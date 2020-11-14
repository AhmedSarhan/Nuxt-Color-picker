<template>
  <div>
    <ThePalettesHeader @changed="formatChanged" v-if="isPalette" />
    <div class="large-palette-container" :class="isCreating ? 'creating' : ''">
      <div
        class="copied-color-modal"
        :class="isCopying ? 'copying' : ''"
        :style="{ backgroundColor: copiedColor }"
      >
        <h3 :style="{ backgroundColor: copiedColorbkg }">{{ copiedText }}</h3>
        <h5>{{ copiedColor }}</h5>
      </div>
      <div
        v-for="(color, index) in shadePalette"
        :key="index"
        class="palette-color"
        :style="{ backgroundColor: color.color }"
        :class="isCreating ? 'creating' : ''"
        @click="doCopy(color.color)"
      >
        <v-row class="copy-container" align="center" justify="space-around">
          <v-btn outlined color="white" class="copy-btn" v-if="!isCreating"
            >Copy</v-btn
          >
          <p class="label white-text">{{ color.name }}</p>
          <v-btn
            class="delete-btn transparent black--text"
            depressed
            flat
            v-if="isCreating"
            @click="deleteColor(index)"
          >
            <v-icon>delete</v-icon>
          </v-btn>
          <v-btn
            :color="color.color"
            depressed
            class="more-btn white--text"
            v-if="isMainPallete"
            route
            :to="paletteId + '/' + color.id"
            >More</v-btn
          >
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCopying: false,
      copiedText: '',
      newFormat: 'Hex - #f4f4f4',
    }
  },
  props: {
    shadePalette: {
      type: [Array, Object],
      required: true,
    },
    copiedColorbkg: {
      type: [String, Number],
      required: true,
    },
    copiedColor: {
      type: [String, Number],
      required: true,
    },
    isMainPallete: {
      type: Boolean,
      default: false,
    },
    isPalette: {
      type: Boolean,
      default: false,
    },
    isCreating: {
      type: Boolean,
      default: false,
    },
    paletteId: {
      type: String,
    },
  },
  methods: {
    shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
    adjust(color, amount) {
      return (
        '#' +
        color
          .replace(/^#/, '')
          .replace(/../g, (color) =>
            (
              '0' +
              Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
                16
              )
            ).substr(-2)
          )
      )
    },
    formatChanged(format) {
      this.newFormat = format
    },
    doCopy(color) {
      if (!this.isCreating) {
        if (this.newFormat === 'rgba - (244, 244, 244, 0.7)') {
          this.$copyText(this.HextoRgba(color))
          this.copiedColor = this.HextoRgba(color)
        } else if (this.newFormat === 'Hex- f4f4f4') {
          this.$copyText(this.HexToHashlessHex(color))
          this.copiedColor = this.HexToHashlessHex(color)
        } else if (this.newFormat === 'rgb - (244, 244, 244)') {
          this.$copyText(this.HexToRGb(color))
          this.copiedColor = this.HexToRGb(color)
        } else {
          this.$copyText(color)
          this.copiedColor = color
        }
      } else {
        return
      }

      let copyMessages = [
        'Nice doing Business with you',
        'Enjoy it',
        'Nice Choice',
        'Happy Styling',
        'Your Styles have Just been Upgraded',
      ]
      this.copiedText = this.shuffle(copyMessages)[0]
      // this.copiedColor = color
      this.copiedColorbkg = this.adjust(color, 20)
      this.isCopying = true
      setTimeout(() => (this.isCopying = false), 1000)
    },
    HexToRGb(color) {
      color = color.replace('#', '')
      let r = parseInt(color.substring(0, 2), 16)
      let g = parseInt(color.substring(2, 4), 16)
      let b = parseInt(color.substring(4, 6), 16)
      let result = 'rgb(' + r + ',' + g + ',' + b + ')'
      return result
    },
    HexToHashlessHex(color) {
      color = color.replace('#', '')
      return color
    },
    HextoRgba(color) {
      var c
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
        c = color.substring(1).split('')
        if (c.length == 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]]
        }
        c = '0x' + c.join('')
        return (
          'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
        )
      }
    },
    deleteColor(index) {
      this.shadePalette.splice(index, 1)
      let dummyColor = {
        name: 'white',
        color: '#ffffff',
      }
      this.shadePalette.push(dummyColor)
      console.log(this.shadePalette)
    },
  },
}
</script>

<style scoped>
.large-palette-container {
  height: calc(100% - 65px);
  width: 100%;
  position: absolute;
}
.large-palette-container .copied-color-modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: green;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: none;
}
.large-palette-container .copied-color-modal.copying {
  display: flex;
  transition: ease-in 3s;
}
.large-palette-container .copied-color-modal h3 {
  margin-bottom: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 50px;
  color: #fff;
  width: 100%;
  text-align: center;
}
.large-palette-container .copied-color-modal h5 {
  font-size: 30px;
  color: #fff;
  width: 100%;
  text-align: center;
}
.large-palette-container .palette-color {
  position: relative;
  width: 20%;
  float: left;
  height: 25%;
  background: #fff;
  cursor: pointer;
}
.large-palette-container .copy-container {
  height: 100%;
}
.large-palette-container .palette-color .copy-container .copy-btn {
  display: none;
}
.large-palette-container .palette-color:hover .copy-btn {
  display: block;
}
.large-palette-container .copy-container .label {
  position: absolute;
  bottom: -10px;
  left: 5px;
}
.large-palette-container .copy-container .more-btn {
  position: absolute;
  bottom: 0;
  right: 5px;
  width: 10%;
}
.large-palette-container .copy-container .delete-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10%;
}
.large-palette-container .palette-color:hover .delete-btn {
  color: #ffffff !important;
  width: 15%;
}

.palette-color.creating {
  border: 1px solid #ccc;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12) !important;
}
.large-palette-container.creating {
  width: 70%;
}
@media (max-width: 700px) {
  .large-palette-container .palette-color .copy-container .copy-btn,
  .large-palette-container .copy-container .label {
    display: none;
  }
}
@media only screen and (min-width: 120px) and (max-width: 1024) {
  .large-palette-container.creating {
    width: 100% !important;
  }
}
</style>
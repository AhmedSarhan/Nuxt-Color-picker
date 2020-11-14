<template>
  <div>
    <ThePalettesHeader @changed="formatChanged" v-if="isPalette" />
    <div class="large-palette-container">
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
        @click="doCopy(color.color)"
      >
        <v-row class="copy-container" align="center" justify="space-around">
          <v-btn outlined color="white" class="copy-btn">Copy</v-btn>
          <p class="label white-text">{{ color.name }}</p>
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
import hexToHsl from 'hex-to-hsl'
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
        } else if (this.newFormat === 'hsl - 0°, 54%, 50%') {
          this.$copyText(this.hexToHSL(color))
          this.copiedColor = color
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
    hexToHSL(color) {
      color = color.replace('#', '')
      let r = parseInt(color.substring(0, 2), 16)
      let g = parseInt(color.substring(2, 4), 16)
      let b = parseInt(color.substring(4, 6), 16)

      // Make r, g, and b fractions of 1
      r /= 255
      g /= 255
      b /= 255

      // Find greatest and smallest channel values
      let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0
      // Calculate hue
      // No difference
      if (delta == 0) h = 0
      // Red is max
      else if (cmax == r) h = ((g - b) / delta) % 6
      // Green is max
      else if (cmax == g) h = (b - r) / delta + 2
      // Blue is max
      else h = (r - g) / delta + 4

      h = Math.round(h * 60)

      // Make negative hues positive behind 360°
      if (h < 0) h += 360
      // Calculate lightness
      l = (cmax + cmin) / 2

      // Calculate saturation
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

      // Multiply l and s by 100
      s = +(s * 100).toFixed(1)
      l = +(l * 100).toFixed(1)

      return 'hsl(' + h + '\u00B0, ' + s + '%, ' + l + '%)'
    },
    deleteColor(index) {
      this.shadePalette.splice(index, 1)
      let dummyColor = {
        name: 'white',
        color: '#ffffff',
      }
      this.shadePalette.push(dummyColor)
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

@media (max-width: 700px) {
  .large-palette-container .palette-color .copy-container .copy-btn,
  .large-palette-container .copy-container .label {
    display: none;
  }
}
</style>
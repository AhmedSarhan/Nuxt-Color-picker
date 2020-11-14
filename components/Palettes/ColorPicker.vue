<template>
  <v-container class="color-picker-section" elevation-5>
    <h3 :style="{ color: newColor }">Pick Colors to Add there</h3>
    <v-form ref="form" v-model="valid" lazy-validation class="mt-0">
      <v-text-field
        v-model="paletteName"
        :counter="10"
        :rules="nameRules"
        label="Palette Name"
        required
      ></v-text-field>
    </v-form>
    <v-form ref="form" v-model="valid">
      <v-color-picker
        class="ma-2"
        v-model="newColor"
        dot-size="28"
        canvas-height="150"
        mode="hexa"
        hide-mode-switch
        show-swatches
        swatches-max-height="141"
        required
      ></v-color-picker>
      <v-text-field
        v-model="colorName"
        :counter="10"
        :rules="nameRules"
        label="Color Name"
        required
      ></v-text-field>
    </v-form>
    <v-row class="d-flex justify-space-around mb-6">
      <v-btn color="primary" class="white--text" @click="addColor"
        >Add Color</v-btn
      >
      <v-btn color="teal" class="white--text" @click="createPalette"
        >Create Palette</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import slugify from 'slugify'
export default {
  props: {
    shadePalette: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      newColor: '#000000',
      paletteName: null,
      colorName: null,
      swatches: [
        ['#FF0000', '#AA0000', '#550000'],
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
      ],
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 30) || 'Name must be less than 30 characters',
      ],
      dummyColor: {
        name: 'white',
        color: '#ffffff',
      },
      feedback: '',
    }
  },
  methods: {
    addColor() {
      this.$refs.form.validate()
      if (this.valid === true && this.colorName !== null) {
        this.dummyColor.name = this.colorName.toLowerCase()
        this.dummyColor.color = this.newColor
        this.shadePalette.splice(0, 0, this.dummyColor)
        this.shadePalette.splice(20, 1)
        this.dummyColor = {
          name: 'white',
          color: '#ffffff',
        }
      } else {
        return false
      }
    },
    createPalette() {
      let dummyColors = this.shadePalette.filter((color) => {
        return color.name === 'white'
      })
      if (dummyColors.length > 1) {
        alert('please complete the Palette first')
        if (this.paletteName === null) {
          alert('please name your Palette first')
        }
      } else {
        axios
          .post(
            process.env.baseUrl + '/paletts.json',
            /* what you wanna push in there */ {
              name: this.paletteName,
              paletteColors: this.shadePalette,
              id: slugify(this.paletteName, {
                replacement: '-', // replace spaces with replacement character, defaults to `-`
                remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
                lower: true, // convert to lower case, defaults to `false`
                strict: true, // strip special characters except replacement, defaults to `false`
              }),
            }
          )
          .then((res) => this.$router.push('/'))
          .catch((e) => console.log(e))
      }
    },
  },
}
</script>

<style>
.color-picker-section {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.v-color-picker {
  max-width: 100% !important;
}
.v-color-picker__canvas {
  margin: auto;
}
</style>
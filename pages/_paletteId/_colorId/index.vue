<template>
  <PalettePreview
    :shadePalette="shadePalette"
    :copiedColor="copiedColor"
    :copiedColorbkg="copiedColorbkg"
    isPalette
  />
</template>

<script>
import axios from 'axios'
import slugify from 'slugify'
export default {
  layout: 'palette',
  data() {
    return {
      color: [],
      shadePalette: [],
      copiedColor: '',
      copiedColorbkg: '',
    }
  },

  methods: {
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
  },
  mounted() {
    axios.get(process.env.baseUrl + '/paletts/.json').then((res) => {
      this.color = Object.values({ ...res.data })
        .filter((palette) => palette.id === this.$route.params.paletteId)[0]
        .paletteColors.filter(
          (color) => slugify(color.name) === this.$route.params.colorId
        )[0]
      //   console.log(this.color)
      for (let k = 10; k >= -8; k--) {
        // for (let x = 0; x <= 19; x++) {
        // console.log(k)
        let newColor = {
          name: this.color.name + ' ' + k * 50,
          color: this.adjust(this.color.color, k * 15),
        }
        // console.log(newColor)
        this.shadePalette.push(newColor)
        // console.log(this.shadePalette)
      }
      for (let x = 0; x < this.shadePalette.length; x++) {
        this.shadePalette[x].name = this.color.name + ' ' + x * 50
      }
    })
  },
}
</script>


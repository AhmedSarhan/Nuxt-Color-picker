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
  async fetch() {
    await axios.get(process.env.baseUrl + '/paletts/.json').then((res) => {
      this.color = Object.values({ ...res.data })
        .filter((palette) => palette.id === this.$route.params.paletteId)[0]
        .paletteColors.filter(
          (color) => slugify(color.name) === this.$route.params.colorId
        )[0]
      for (let k = 10; k >= -8; k--) {
        let newColor = {
          name: this.color.name + ' ' + k * 50,
          color: this.adjust(this.color.color, k * 15),
        }
        this.shadePalette.push(newColor)
      }
      for (let x = 0; x < this.shadePalette.length; x++) {
        this.shadePalette[x].name = this.color.name + ' ' + x * 50
      }
    })
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
  mounted() {},
}
</script>


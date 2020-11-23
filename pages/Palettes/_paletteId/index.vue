<template>
  <PalettePreview
    :shadePalette="paletteColors"
    :copiedColor="copiedColor"
    :copiedColorbkg="copiedColorbkg"
    :paletteId="paletteId"
    isMainPallete
    isPalette
  />
</template>

<script>
import axios from 'axios'
import slugify from 'slugify'
export default {
  layout: 'palette',
  // props: {
  //   newColorFormat: {
  //     type: String,
  //     default: 'Hex - #f4f4f4',
  //   },
  // },
  data() {
    return {
      palettes: {},
      palette: {},
      paletteColors: [],
      colorId: '',
      copiedColor: '',
      copiedColorbkg: '',
      paletteId: this.$route.params.paletteId,
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
  async fetch() {
    await axios
      .get(process.env.baseUrl + '/paletts/.json')
      .then((res) => {
        let loadedPalettes = {}
        loadedPalettes = { ...res.data }
        this.palettes = Object.values(loadedPalettes).filter(
          (palette) => palette.id === this.$route.params.paletteId
        )
        for (let i = 0; i < this.palettes.length; i++) {
          this.palette = this.palettes[0]
          for (let x = 0; x < this.palette.paletteColors.length; x++) {
            ;(this.colorId = slugify(this.palette.paletteColors[x].name, {
              replacement: '-', // replace spaces with replacement character, defaults to `-`
              remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
              lower: true, // convert to lower case, defaults to `false`
              strict: true, // strip special characters except replacement, defaults to `false`
            })),
              (this.palette.paletteColors[x].id = this.colorId)
          }
          this.paletteColors = {
            ...this.palette.paletteColors,
          }
        }
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          console.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)
          console.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
  mounted() {},
  computed: {},
}
</script>


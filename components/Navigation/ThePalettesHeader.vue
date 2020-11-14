<template>
  <v-card color="grey lighten-4">
    <v-toolbar elevation="7">
      <v-btn
        color="transparent"
        depressed
        class="black--text back-btn"
        @click="$router.go(-1)"
      >
        <v-icon left>keyboard_backspace</v-icon>
        <span>Back</span>
      </v-btn>

      <v-toolbar-title class="myBrand grey lighten-3 pa-5"
        >Nuxt Ui Colors</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-row>
        <v-form ref="form" v-model="valid" lazy-validation class="mt-5">
          <v-select
            class="copy-format"
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            required
            @change="changeFormat"
          >
          </v-select>
        </v-form>
      </v-row>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      select: 'Hex - #f4f4f4',
      items: [
        'Hex - #f4f4f4',
        'Hex- f4f4f4',
        'rgb - (244, 244, 244)',
        'rgba - (244, 244, 244, 0.7)',
      ],
    }
  },
  methods: {
    changeFormat() {
      this.$emit('changed', this.select)
    },
  },
}
</script>

<style scoped>
.copy-format {
  text-align: center;
}
.back-btn {
  height: 100% !important;
}
.myBrand {
  display: block;
}
@media (max-width: 992px) {
  .myBrand {
    display: none;
  }
}
</style>
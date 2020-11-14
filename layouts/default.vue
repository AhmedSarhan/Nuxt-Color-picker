<template>
  <v-app>
    <TheHeader />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
export default {
  components: {
    TheHeader,
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.theme--light.v-application {
  background: #5E35B1;
  color: #fff;
  width: 100%;
  float: left;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  background-image: url('~assets/images/stars.svg');
}
</style>

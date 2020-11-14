<template>
  <section id="error-page">
    <img class="error-image" src="~assets/images/error.png" />
    <h1 class="text-center">404 not found</h1>
    <h3 class="text-center">
      Go back to
      <nuxt-link route to="/" class="safe-gaurd white--text">saftey</nuxt-link>
    </h3>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  font-size: 50px;
}
h3 {
  font-size: 35px;
}
.error-image {
  display: block;
  margin: auto;
}
.safe-gaurd {
  text-decoration: none;
}
</style>
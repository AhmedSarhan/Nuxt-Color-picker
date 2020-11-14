<template>
  <div>
    <v-app-bar-nav-icon
      @click="drawer = true"
      class="burger-button float-right white--text"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="primary white--text"
    >
      <MyNavMenu class="mt-5 white--text" />
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>
<style scoped>
.burger-button {
  display: none;
  position: absolute;
  top: 5px;
  right: 5px;
}
@media only screen and (min-width: 1px) and (max-width: 1024px) {
  .burger-button {
    display: block;
  }
}
</style>
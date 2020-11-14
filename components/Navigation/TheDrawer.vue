<template>
  <v-card>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
      <NavMenu />
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import NavMenu from './NavMenu'
export default {
  data() {
    return {
      drawer: false,
    }
  },
  components: {
    NavMenu,
  },
}
</script>
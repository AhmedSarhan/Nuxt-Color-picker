<template>
  <nav>
    <v-toolbar dark text flat class="transparent">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="burger-button float-right"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Nuxt Ui Colors</v-toolbar-title>

      <v-spacer></v-spacer>

      <ul class="nav-list">
        <li class="nav-item" v-for="link in links" :key="link.text">
          <nuxt-link
            router
            :to="link.route"
            class="nav-link transparent white--text"
          >
            <v-icon>{{ link.icon }}</v-icon>
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app temporary class="primary">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue-grey--text text--lighten-5"
        >
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Home',
          icon: 'home',
          route: '/',
        },
        {
          text: 'New Pallette',
          icon: 'palette',
          route: '/new-palette',
        },
      ],
      drawer: false,
    }
  },
}
</script>
<style scoped>
.return-btn {
  height: 100%;
}
.nav-list {
  list-style: none;
}
.nav-list .nav-item {
  display: inline-block;
  margin: 5px 10px;
}
.nav-list .nav-item .nav-link {
  text-decoration: none;
  font-size: 18px !important;
  color: rgba(255, 255, 255, 0.616) !important;
}
.nav-list .nav-item .nuxt-link-active.nuxt-link-exact-active {
  border-bottom: 4px solid #cccc !important;
  padding-bottom: 20px;
  color: #fff !important;
}
.burger-button {
  display: none;
  position: absolute;
  top: 5px;
  right: 5px;
}

@media (max-width: 992px) {
  .nav-list {
    display: none;
  }
  .burger-button {
    display: block !important;
  }
}
</style>
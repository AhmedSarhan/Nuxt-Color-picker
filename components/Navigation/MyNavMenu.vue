<template>
  <ul class="nav-list">
    <li class="nav-item" v-for="link in links" :key="link.text">
      <nuxt-link
        router
        :to="link.route"
        class="nav-link transparent white--text"
      >
        <v-icon color="white">{{ link.icon }}</v-icon>
        {{ link.text }}
      </nuxt-link>
    </li>
  </ul>
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
    }
  },
}
</script>

<style scoped>
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
@media (max-width: 992px) {
  .nav-list .nav-item {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
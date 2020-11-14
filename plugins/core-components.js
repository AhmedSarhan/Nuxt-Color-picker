// import the frequent used components

import Vue from 'vue';
import MyNav from '@/components/Navigation/MyNav.vue';
import MyNavMenu from '@/components/Navigation/MyNavMenu.vue';
import MySideDrawer from '@/components/Navigation/MySideDrawer.vue';
import MyToolBar from '@/components/Navigation/MyToolBar.vue';

import ThePalettesHeader from '@/components/Navigation/ThePalettesHeader.vue';
// import PalettePreview from '@/components/Palettes/PalettePreview.vue';
import PalettePreview from '@/components/Palettes/PalettePreview.vue';
import ColorPicker from '@/components/Palettes/ColorPicker.vue';

Vue.component('MyNav', MyNav);
Vue.component('MyNavMenu', MyNavMenu);
Vue.component('MySideDrawer', MySideDrawer);
Vue.component('MyToolBar', MyToolBar);

Vue.component('ThePalettesHeader', ThePalettesHeader);
Vue.component('PalettePreview', PalettePreview);
Vue.component('ColorPicker', ColorPicker);

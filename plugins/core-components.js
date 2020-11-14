// import the frequent used components

import Vue from 'vue';
import TheMainNavBar from '@/components/Navigation/TheMainNavBar.vue';
import TheMainNavMenu from '@/components/Navigation/TheMainNavMenu.vue';
import TheSideDrawer from '@/components/Navigation/TheSideDrawer.vue';
import TheMainToolBar from '@/components/Navigation/TheMainToolBar.vue';

import ThePalettesHeader from '@/components/Navigation/ThePalettesHeader.vue';
// import PalettePreview from '@/components/Palettes/PalettePreview.vue';
import PalettePreview from '@/components/Palettes/PalettePreview.vue';
import ColorPicker from '@/components/Palettes/ColorPicker.vue';

Vue.component('TheMainNavBar', TheMainNavBar);
Vue.component('TheMainNavMenu', TheMainNavMenu);
Vue.component('TheSideDrawer', TheSideDrawer);
Vue.component('TheMainToolBar', TheMainToolBar);

Vue.component('ThePalettesHeader', ThePalettesHeader);
Vue.component('PalettePreview', PalettePreview);
Vue.component('ColorPicker', ColorPicker);

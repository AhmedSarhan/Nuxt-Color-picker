// import the frequent used components

import Vue from 'vue';
import TheHeader from '@/components/Navigation/TheHeader.vue';
import ThePalettesHeader from '@/components/Navigation/ThePalettesHeader.vue';
// import PalettePreview from '@/components/Palettes/PalettePreview.vue';
import PalettePreview from '@/components/Palettes/PalettePreview.vue';
import ColorPicker from '@/components/Palettes/ColorPicker.vue';

Vue.component('TheHeader', TheHeader);
Vue.component('ThePalettesHeader', ThePalettesHeader);
Vue.component('PalettePreview', PalettePreview);

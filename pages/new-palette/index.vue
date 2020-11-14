<template>
  <div class="new-palette-page">
    <v-container mx-auto>
      <v-card flat class="d-flex justify-center">
        <v-row>
          <v-col lg="3" md="12" cols="12">
            <ColorPicker :shadePalette="newPalette" />
          </v-col>
          <v-col lg="9" md="12" cols="12">
            <PalettePreview :shadePalette="newPalette" isCreating />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPalette: [
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
        { name: 'white', color: '#ffff' },
      ],
    }
  },
}
</script>

<style>
.new-palette-page {
  background-color: #fff;
}
</style>
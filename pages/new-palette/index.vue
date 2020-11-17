<template>
  <div class="new-palette-page">
    <v-container mx-auto>
      <v-card flat class="d-flex justify-center">
        <v-row>
          <v-col lg="3" md="12" cols="12">
            <ColorPicker :shadePalette="newPalette" />
          </v-col>
          <v-col lg="9" md="12" cols="12">
            <div class="root">
              <SlickList
                axis="xy"
                useDragHandle="true"
                class="large-palette-container"
                v-model="newPalette"
              >
                <SlickItem
                  v-for="(color, index) in newPalette"
                  :index="index"
                  :key="index"
                  class="palette-color"
                  :style="{ backgroundColor: color.color }"
                >
                  <v-icon v-handle>drag_handle </v-icon>
                  <v-row
                    class="copy-container"
                    align="center"
                    justify="space-around"
                  >
                    <p class="label white-text">{{ color.name }}</p>
                    <v-btn
                      class="delete-btn transparent black--text"
                      depressed
                      text
                      @click="deleteColor(color.name)"
                    >
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-row>
                </SlickItem>
              </SlickList>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { SlickList, SlickItem, HandleDirective } from 'vue-slicksort'
export default {
  display: 'Transition',
  components: {
    SlickItem,
    SlickList,
  },
  directives: { handle: HandleDirective },
  data() {
    return {
      drag: '',
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
  methods: {
    deleteColor(name) {
      let colorIndex = this.newPalette.findIndex((color) => {
        return color.name === name
      })
      this.newPalette.splice(colorIndex, 1)
      let dummyColor = {
        name: 'white',
        color: '#ffffff',
      }
      this.newPalette.push(dummyColor)
    },
  },
  computed: {},
}
</script>

<style scoped>
.new-palette-page {
  background-color: #fff;
}
.large-palette-container {
  height: calc(100% - 65px);
  width: 75%;
  position: absolute;
}

.large-palette-container .palette-color {
  position: relative;
  width: 20%;
  float: left;
  height: 25%;
  background: #fff;
  cursor: pointer;
  border: 1px solid #ccc;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12) !important;
}
.large-palette-container .copy-container {
  height: 100%;
}

.large-palette-container .copy-container .label {
  position: absolute;
  bottom: -10px;
  left: 5px;
}
.large-palette-container .copy-container .delete-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10%;
  /* z-index: 9999; */
}
.large-palette-container .palette-color:hover .delete-btn,
.large-palette-container .palette-color:active .delete-btn,
.large-palette-container .palette-color:visited .delete-btn {
  color: #ffffff !important;
  background: transparent !important;
  width: 15%;
}
@media (max-width: 1024px) {
  .root {
    width: 100%;
  }
  .large-palette-container .copy-container .label {
    display: none;
  }
  .large-palette-container {
    height: 100%;
    width: 100%;
    position: absolute;
  }
}
</style>
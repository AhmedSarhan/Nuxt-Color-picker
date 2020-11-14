<template>
  <v-container class="palettes-container">
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="4"
        v-for="palette in palettes"
        :key="palette.name"
      >
        <v-card
          class="mx-auto small-palette-container"
          elevation="5"
          route
          :to="'palettes' + '/' + palette.id"
        >
          <div class="palette-display">
            <div
              v-for="color in palette.paletteColors"
              :key="color.name"
              class="palette-color"
              :style="{ backgroundColor: color.color }"
            >
              <!-- <div
               
              ></div> -->
            </div>
          </div>
          <h3 class="palette-title">{{ palette.name }}</h3>
          <!-- <v-card-title>  </v-card-title> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      palettes: [],
    }
  },

  methods: {
    // pullData() {
    //   console.log(this.palettes)
    // },
  },
  mounted() {
    axios
      .get(process.env.baseUrl + '/paletts.json')
      .then((response) => {
        this.palettes = Object.values(response.data)
        console.log(response.data)
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
}
</script>

<style scoped>
.palettes-container {
  margin-top: 40px;
  margin-bottom: 40px;
  width: 80%;
}
.small-palette-container {
  height: 200px;
  border-radius: 5px;
  width: 80%;
}
.small-palette-container .palette-title {
  padding: 10px;
  font-weight: 500;
}
.small-palette-container .palette-display {
  padding: 10px;
  width: 100%;
  border-radius: 5px !important;
  height: calc(100% - 30px);
  float: left;
}
.small-palette-container .palette-display .palette-color {
  width: 20%;
  float: left;
  height: 25%;
  background: #fff;
}
</style>

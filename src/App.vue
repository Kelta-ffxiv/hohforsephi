<template>
  <div class="bg">
    <h1>HoH for sephi</h1>
  <highcharts :options="chartOptions"></highcharts>


  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
export default {
  name: 'App',
  components: {
    highcharts: Chart,

    
  },
  data() {
    return {
      chartOptions: {
        series: [{
          data: [1,2,3] // sample data
        }]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.bg {
  height: 100%;
  width: 100%;

  padding-top: 60px;
  background: url('https://cdn.discordapp.com/attachments/1068317015347040388/1077959201571221544/ffxiv_dx11_2023-02-22_14-24-38.png');

      display: block;
    position: absolute;
}
</style>

<template>
  <div class="bg">
    <h1>HoH for sephi</h1>
  <highcharts :options="chartOptions"></highcharts>


  </div>
</template>

<script>


import Highcharts from 'highcharts';

// import {Chart} from 'highcharts-vue'

export default {
  name: 'App',
  computed: {
    chartOptions()  {
      return {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'HoH performance'
    },
    subtitle: {
        text: 'for sephiii <3'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        },
    },
    yAxis: [{
        min: 90,
        max: 100,
        opposite: true,

        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'Floor',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
    },{
     
        dashStyle: 'shortdot',
        gridLineWidth: 0,
        title: {
            text: 'Score',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }
        
    },{
      
        dashStyle: 'shortdot',
        gridLineWidth: 0,
        title: {
            text: 'Kills',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
    }],
   tooltip: {
    shared: true
   },
   
    plotOptions: {
        series: {
            marker: {
                enabled: true,
                radius: 2.5
            }
        }
    },

    colors: ['rgb(84, 79, 197)', 'rgb(44, 175, 254)', 'rgb(226, 114,0)', '#39F', '#06C', '#036', '#000'],

        series: [
          {
            name: 'Floor',
            yAxis: 0,
        type: 'column',
            data: this.convertedHohData('floor'),
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
          },
          {
            name: 'Score',
            yAxis: 1,
        type: 'spline',
            data: this.convertedHohData('score')
            
          },
          {
            name: 'Kills',
            yAxis: 2,
        type: 'spline',
            data: this.convertedHohData('kills')
          },
        ]
      }
    },
  },
  methods: {

    convertedHohData(dataType) {
      return this.hohdata.map((data) => this.convertHohData(data, dataType))
    },
    convertHohData(data, dataType) {
      return [data.date, data[dataType]]
    }
  },

  mounted() {
   console.log(this.chartOptions)
  },
  data() {
    return {

        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Snow depth (m)'
            },
            min: 1000,
        },
        
        hohdata:  [{date: Date.parse('01 05 2023'), kills: 701, score: 1203929, floor: 95},{date: Date.parse('01 06 2023 00:01:00 GMT'), kills: 680, score: 1186387, floor: 95}, // sample data
      

         {date: Date.parse('01 06 2023 00:13:00 GMT'), kills: 701, score: 1186387, floor: 95},
         {date: Date.parse('01 08 2023 00:01:00 GMT'), kills: 661, score: 1157428, floor: 93},
         {date: Date.parse('01 08 2023 00:13:00 GMT'), kills: 604, score: 1126350, floor: 93},
         {date: Date.parse('01 23 2023'), kills: 653, score: 1162173, floor: 92},
         {date: Date.parse('01 26 2023 00:01:00 GMT'), kills: 593, score: 1166895, floor: 94},
         {date: Date.parse('01 26 2023 00:13:00 GMT'), kills: 668, score: 1622393, floor: 100},
         {date: Date.parse('02 10 2023'), kills: 940, score: 1309935, floor: 96},
         {date: Date.parse('02 14 2023'), kills: 1046, score: 1792327, floor: 100},
         {date: Date.parse('02 17 2023'), kills: 942, score: 1255503, floor: 90},
         {date: Date.parse('02 18 2023'), kills: 884, score: 1292964, floor: 94},
         {date: Date.parse('02 20 2023'), kills: 937, score: 1234322, floor: 89},
         {date: Date.parse('02 21 2023'), kills: 1051, score: 1373253, floor: 97},
         {date: Date.parse('02 22 2023'), kills: 1134, score: 1816391, floor: 100},
         {date: Date.parse('02 23 2023'), kills: 1018, score: 1790161, floor: 100},
         {date: Date.parse('02 27 2023'), kills: 1085, score: 1395712, floor: 98},
         {date: Date.parse('02 28 2023'), kills: 1067, score: 1798749, floor: 100},
         {date: Date.parse('03 04 2023'), kills: 1107, score: 1819879, floor: 100},
         {date: Date.parse('03 17 2023'), kills: 658, score: 1566964, floor: 100},
         {date: Date.parse('03 26 2023'), kills: 678, score: 1555915, floor: 100},]
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

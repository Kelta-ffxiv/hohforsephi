import { createApp } from 'vue'
import App from './App.vue'

import Highcharts from 'highcharts';
 import exportingInit from 'highcharts/modules/exporting';

 import seriesLabelInit from 'highcharts/modules/series-label'
 import exportDataInit from 'highcharts/modules/export-data'
 import accessibilityInit from 'highcharts/modules/accessibility'

exportingInit(Highcharts)
 seriesLabelInit(Highcharts)
exportDataInit(Highcharts)
 accessibilityInit(Highcharts)
import HighchartsVue from 'highcharts-vue'

createApp(App).use(HighchartsVue, {
	highcharts: Highcharts}).mount('#app')


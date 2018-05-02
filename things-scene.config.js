import locales from './locales';

import icon from './assets/echart.png';

var templates = [{
  type: 'echart',
  description: 'echart',
  group: 'chartAndGauge',
  /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon,
  model: {
    type: 'echart',
    top: 0,
    left: 0,
    width: 400,
    height: 300,
    fontColor: "red",
    lineWidth: 1,
    series: `
[{
  name:'利润',
  type:'bar',
  label: {
    normal: {
      show: true,
      position: 'inside'
    }
  },
  data:[200, 170, 240, 244, 200, 220, 210]
}, {
  name:'收入',
  type:'bar',
  stack: '总量',
  label: {
    normal: {
      show: true
    }
  },
  data:[320, 302, 341, 374, 390, 450, 420]
}, {
  name:'支出',
  type:'bar',
  stack: '总量',
  label: {
    normal: {
      show: true,
      position: 'left'
    }
  },
  data:[-120, -132, -101, -134, -190, -230, -210]
}]`,
    option: `
{
  tooltip : {
    trigger: 'axis',
    axisPointer : {
      type : 'shadow'
    }
  },
  legend: {
    data:['利润', '支出', '收入']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis : [{
    type : 'value'
  }],
  yAxis : [{
    type : 'category',
    axisTick : {show: false},
    data : ['周一','周二','周三','周四','周五','周六','周日']
  }]
}`
  }
}];

export default {
  templates,
  locales
};

import locales from './locales'

var templates = [{
  name: 'echart',
  /* 다국어 키 표현을 어떻게.. */
  description: '...',
  /* 다국어 키 표현을 어떻게.. */
  group: 'chartAndGauge',
  /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../',
  /* 또는, Object */
  template: {
    type: 'echart',
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
  }
}];

module.exports = {
  templates,
  locales
};

/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties : [{
    type: 'textarea',
    label: 'option',
    name: 'option',
    property: 'option'
  }]
}

const DEFAULT_OPTIONS = {
  title: 'NO OPTIONS'
}

var {
  HTMLOverlayContainer
} = scene

export default class Echart extends HTMLOverlayContainer {

  static load(component) {
    if (Echart.loaded) {
      component.onload()
      return
    }

    if (this.script) {
      Echart.readies.push(component)
      return
    }

    this.readies = [component]

    var script = document.createElement('script');
    script.onload = function () {
      Echart.loaded = true
      Echart.readies.forEach(component => component.onload())
      delete Echart.readies
    }

    script.src = 'http://echarts.baidu.com/dist/echarts.min.js';

    document.head.appendChild(script)
    Echart.script = script
  }

  onload() {
    this._chart = echarts.init(this._anchor);
    this.reposition();
  }

  dispose() {
    this._echart && this._echart.dispose()
    delete this._echart
    delete this._anchor

    super.dispose();
  }

  reposition() {
    super.reposition()

    if(!this._chart)
      return

    var {
      option = DEFAULT_OPTIONS
    } = this.state

    var options = option

    try {
      if(typeof(options) !== 'object')
        eval(`options = ${options}`)
    } catch(e) {
      console.error(e)
      options = DEFAULT_OPTIONS
    }

    this._chart.setOption(this.buildOptions(options));

    this._chart.resize({
      width: 'auto',
      height: 'auto',
      silent: true
    });
  }

  oncreate_element(div) {
    this._anchor = document.createElement('div')
    this._anchor.style.width = '100%';
    this._anchor.style.height = '100%';

    this.element.appendChild(this._anchor)

    Echart.load(this)
  }

  setElementProperties(div) {
  }

  buildOptions(options) {
    var {
      title = {},
      grid = {},
      series = [],
      backgroundColor
    } = options

    options.title = Object.assign(title, {
      text: this.text,
      show: !!this.text
    })

    options.series = series.map(serial => {
      let {
        name,
        data
      } = serial

      serial.data = (this.data && this.data[name]) || data

      return serial
    })

    return options
  }

  get tagName() {
    return 'div'
  }

  get nature(){
    return NATURE;
  }
}

scene.Component.register('echart', Echart);

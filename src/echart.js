/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
import { Component, HTMLOverlayContainer, error } from '@hatiolab/things-scene';

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties : [{
    type: 'textarea',
    label: 'option',
    name: 'option',
    property: 'option'
  }, {
    type: 'textarea',
    label: 'series',
    name: 'series',
    property: 'series'
  }]
}

const DEFAULT_OPTION = {
  title: 'NO OPTIONS'
}

export default class Echart extends HTMLOverlayContainer {

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

    this._chart.setOption(this.buildOptions(Object.assign({series: this.series}, this.option)));

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

    import('echarts').then(echarts => {

      requestAnimationFrame(() => {
        this._chart = echarts.init(this._anchor);
        this.reposition()
      })
    }, error);
  }

  setElementProperties(div) {
  }

  buildOptions(options) {
    var {
      title = {}
    } = options

    options.title = Object.assign(title, {
      text: this.text,
      show: !!this.text
    })

    // if(!series.length)
    //   return options

    // if(series.length == 1) {
    //   let {
    //     name,
    //     data
    //   } = series[0]

    //   options.series[0].data = this.data[name] || this.data || data
    // } else {
    //   options.series = series.map(serial => {
    //     let {
    //       name,
    //       data
    //     } = serial

    //     serial.data = (this.data && this.data[name]) || data

    //     return serial
    //   })
    // }

    return options
  }

  get series() {
    var {
      series,
      data
    } = this.state

    if(typeof(series) !== 'object') {
      try {
        eval(`series = ${series}`)
      } catch (e) {
        scene.error(e)
      }
    }

    return series
  }

  get option() {
    var {
      option = DEFAULT_OPTION,
      data
    } = this.state

    if(typeof(option) !== 'object') {
      try {
        eval(`option = ${option}`)
      } catch (e) {
        scene.error(e)
      }
    }

    return option
  }

  get tagName() {
    return 'div'
  }

  get nature(){
    return NATURE;
  }
}

Component.register('echart', Echart);

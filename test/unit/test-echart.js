/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

import './util'

import { expect } from 'chai'

import '../../bower_components/things-scene-core/things-scene-min'
import { Echart } from '../../src/index'

describe('Echart', function () {

  var board;

  beforeEach(function () {
    board = scene.create({
      model: {
        components: [{
          id: 'echart',
          type: 'echart'
        }]
      }
    })
  });

  it('component should be found by its id.', function () {

    var component = board.findById('echart')

    expect(!!component).not.to.equal(false);
  });
});

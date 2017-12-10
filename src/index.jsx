import './index.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Stage, Layer, Rect} from 'react-konva';

import store from './store';
import {gameTick} from './actions'

import Player from './player';

const root = document.getElementById('root');

ReactDom.render(
  <Provider store={store}>
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Player />
      </Layer>
    </Stage>
  </Provider>,
  root
);

setInterval(() => store.dispatch(gameTick()), 1/60);
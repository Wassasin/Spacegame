import { combineReducers } from 'redux';
import Vector from 'victor';

import { ActionTypes } from './actions';

const initialState = window.initialState || {
  game: {
    player: {
      pos: Vector(50, 50),
      speed: Vector(0.1, 0),
      rotation: 0,
      rotationSpeed: 0.1,
    },
    viewport: {
      center: Vector(50, 50),
      size: Vector(window.innerWidth, window.innerHeight)
    },
  },
};

const reducers = combineReducers({
    game: (state = initialState.game, action) => {
        if (action.type === ActionTypes.GAME_TICK) {
          const pos = state.player.pos.clone().add(state.player.speed);

          state = {
            player: {
              ...state.player,
              rotation: (state.player.rotation + state.player.rotationSpeed) % 360,
              pos,
            },
            viewport: {
              ...state.viewport,
              center: pos,
            }
          };
        }

        return state;
    },
});

export default reducers;

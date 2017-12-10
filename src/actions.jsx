export const ActionTypes = {
  GAME_TICK: 'GAME_TICK',
};

export function gameTick() {
  return {
      type: ActionTypes.GAME_TICK,
  };
}

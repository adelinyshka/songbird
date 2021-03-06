import { createSelector } from 'reselect';

export const songbirdSelector = (state) => state.songbird;

export const statusAppSelector = createSelector(
  songbirdSelector,
  ({ statusApp }) => statusApp,
);

export const scoreSelector = createSelector(
  songbirdSelector,
  ({ score }) => score,
);

export const answerRightSelector = createSelector(
  songbirdSelector,
  ({ isRight }) => isRight,
);

export const levelSelector = createSelector(
  songbirdSelector,
  ({ level }) => level,
);

export const idClickedSelector = createSelector(
  songbirdSelector,
  ({ id }) => id,
);

export const wasClickSelector = createSelector(
  songbirdSelector,
  ({ wasClick }) => wasClick,
);

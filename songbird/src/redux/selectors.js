import { createSelector } from 'reselect';

export const songbirdSelector = (state) => state.songbird;

export const statusAppSelector = createSelector(
	songbirdSelector,
	({ statusApp }) => statusApp,
);

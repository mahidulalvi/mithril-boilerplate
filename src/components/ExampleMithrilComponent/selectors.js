import { createSelector } from 'reselect';

const selectExampleMithrilComponentDomain = state => state.exampleComponent;

const makeSelectCount = () =>
  createSelector(selectExampleMithrilComponentDomain, domain => domain.value);

export { makeSelectCount };

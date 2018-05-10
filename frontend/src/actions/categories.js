import { getCategories } from '../utils/api';

import {
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from './types';

export const fetchCategoriesBegin = () => ({
  type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccessful = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: { error }
});

export function fetchCategories() {
  return dispatch => {
    dispatch(fetchCategoriesBegin());
    return getCategories()
      .then(categories => dispatch(fetchCategoriesSuccessful(categories)))
      .catch(error => dispatch(fetchCategoriesFailure(error)));
  }
}
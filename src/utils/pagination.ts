import { ONE_PAGE } from '../constants/values';

export const reduce = (argFirst: number, argSecond: number) => argFirst - argSecond;

export const add = (argFirst: number, argSecond: number) => argFirst + argSecond;

export const bigger = (argFirst: number, argSecond: number) => argFirst > argSecond;

export const lesser = (argFirst: number, argSecond: number) => argFirst < argSecond;

export const calcPage = (
  page: number,
  perPage: number,
  delimiter: number,
  max: number,
  calcFunc: (argFirst: number, argSecond: number) => number,
  boolFunc: (argFirst: number, argSecond: number) => boolean,
) => {
  let firstPage = page;

  while (boolFunc(firstPage * perPage, max) && boolFunc(firstPage, calcFunc(page, delimiter))) {
    firstPage = calcFunc(firstPage, ONE_PAGE);
  }

  return firstPage;
};

/* @flow */
import React from 'react';
import take from 'lodash/take';

import type { Element } from 'react';

type TakeProps<T> = {
  n: number,
  array: T[],
  render: (T[]) => ?Element<*>,
  container?: React$ElementType,
};

// eslint-disable-next-line object-curly-spacing
export default function Take<T>({ n, array, render, container }: TakeProps<T>) {
  const contents = render(take(array, n));
  if (!container) {
    return <div>{contents}</div>;
  }
  const Container = container;
  return <Container>{contents}</Container>;
}

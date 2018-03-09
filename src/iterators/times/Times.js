/* @flow */
import React from 'react';
import times from 'lodash/times';

import type { Element } from 'react';

type Props<T> = {
  n: number,
  render: T => ?Element<*>,
  container?: React$ElementType,
};

// eslint-disable-next-line object-curly-spacing
export default function Times<T>({ n, render, container }: Props<T>) {
  const contents = times(n).map(render);
  if (!container) {
    return <div>{contents}</div>;
  }
  const Container = container;
  return <Container>{contents}</Container>;
}

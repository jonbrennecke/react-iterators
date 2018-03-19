/* @flow */
import React from 'react';
import take from 'lodash/take';

import type { Element } from 'react';

type TakeProps<T> = {
  n: number,
  array: T[],
  render: (T[]) => ?Element<*>,
  container?: React$ElementType,
  className?: ?string,
  id?: ?string,
};

// eslint-disable-next-line object-curly-spacing
export default function Take<T>({
  n,
  array,
  render,
  container,
  className,
  id,
// eslint-disable-next-line object-curly-spacing
}: TakeProps<T>) {
  const contents = render(take(array, n));
  if (!container) {
    return (
      <div className={className} id={id}>
        {contents}
      </div>
    );
  }
  const Container = container;
  return (
    <Container className={className} id={id}>
      {contents}
    </Container>
  );
}

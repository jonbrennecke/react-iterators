/* @flow */
import React from 'react';
import nth from 'lodash/nth';

import type { Element } from 'react';

type Props<T> = {
  n: number,
  array: T[],
  render: T => ?Element<*>,
  container?: React$ElementType,
  className?: ?string,
  id?: ?string,
};

export default function Nth<T>({
  n,
  array,
  render,
  container,
  className,
  id,
// eslint-disable-next-line object-curly-spacing
}: Props<T>) {
  const item = nth(array, n);
  if (!item) {
    return null;
  }
  const contents = render(item);
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

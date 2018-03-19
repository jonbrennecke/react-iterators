/* @flow */
import React from 'react';

import type { Element } from 'react';

type Props<T> = {
  array: T[],
  render: T => ?Element<*>,
  container?: React$ElementType,
  className?: ?string,
  id?: ?string,
};

export default function Map<T>({
  array,
  render,
  container,
  className,
  id,
// eslint-disable-next-line object-curly-spacing
}: Props<T>) {
  const contents = array.map(render);
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

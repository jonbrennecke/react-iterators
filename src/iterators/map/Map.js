/* @flow */
import React from 'react';

import type { Element } from 'react';

type Props<T> = {
  array: T[];
  render: T => ?Element<*>;
  container?: React$ElementType;
};

// eslint-disable-next-line object-curly-spacing
export default function Map<T>({ array, render, container }: Props<T>) {
  const contents = array.map(render);
  if (!container) {
    return (
      <div>
        {contents}
      </div>
    );
  }
  const Container = container;
  return (
    <Container>
      {contents}
    </Container>
  );
}

/* @flow */
import React from 'react';
import first from 'lodash/first';

import type { Element } from 'react';

type Props<T> = {
  array: T[];
  render: T => ?Element<*>;
  container?: React$ElementType;
};

// eslint-disable-next-line object-curly-spacing
export default function First<T>({ array, render, container }: Props<T>) {
  const item = first(array);
  if (!item) {
    return null;
  }
  const contents = render(item);
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

/* @flow */
import React from 'react';
import first from 'lodash/first';

import type { Element } from 'react';

type Props<T> = {
  array: T[],
  render: T => ?Element<*>,
  container?: React$ElementType,
  className?: ?string,
  id?: ?string,
};

export default function First<T>({
  array,
  render,
  container,
  className,
  id,
// eslint-disable-next-line object-curly-spacing
}: Props<T>) {
  const item = first(array);
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

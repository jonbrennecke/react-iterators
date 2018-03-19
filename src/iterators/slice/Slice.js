/* @flow */
import React from 'react';
import slice from 'lodash/slice';

import type { Element } from 'react';

type Props<T> = {
  start: number,
  end?: number,
  array: T[],
  render: (T[]) => ?Element<*>,
  container?: React$ElementType,
  className?: ?string,
  id?: ?string,
};

export default function Slice<T>({
  start,
  end,
  array,
  render,
  container,
  className,
  id,
}: // eslint-disable-next-line object-curly-spacing
Props<T>) {
  const contents = render(slice(array, start, end));
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

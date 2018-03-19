/* @flow */
import React from 'react';
import times from 'lodash/times';

import type { Element } from 'react';

type Props<T> = {
  n: number,
  render: T => ?Element<*>,
  container?: React$ElementType,
  className?: ?string,
  id?: ?string,
};

export default function Times<T>({
  n,
  render,
  container,
  className,
  id,
// eslint-disable-next-line object-curly-spacing
}: Props<T>) {
  const contents = times(n).map(render);
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

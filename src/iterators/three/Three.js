/* @flow */
import React from 'react';

import type { Element } from 'react';

import Times from '../times/Times';

type Props = {
  first: () => ?Element<*>,
  second: () => ?Element<*>,
  third: () => ?Element<*>,
  container?: React$ElementType,
  className: ?string,
  id: ?string,
};

// eslint-disable-next-line object-curly-spacing
export default function Three({ render, container, className, id }: Props) {
  return (
    <Times
      n={3}
      container={container}
      className={className}
      id={id}
      render={n => {
        switch (n) {
          case 0:
            return this.props.first();
          case 1:
            return this.props.second();
          case 2:
            return this.props.third();
        }
      }}
    />
  );
}

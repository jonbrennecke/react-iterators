/* @flow */
import React from 'react';

import type { Element } from 'react';

import Times from '../times/Times';

type Props = {
  first: () => ?Element<*>;
  second: () => ?Element<*>;
  container?: React$ElementType;
};

// eslint-disable-next-line object-curly-spacing
export default function Two({ render, container }: Props) {
  return (
    <Times
      n={2}
      container={container}
      render={n => {
        switch (n) {
          case 0:
            return this.props.first();
          case 1:
            return this.props.second();
        }
      }}
  />
  );
}

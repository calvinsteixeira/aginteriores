'use client';

import React, { useState } from 'react';
import CountUp, { CountUpProps } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface CounterProps extends CountUpProps {
  bottomOffset: number;
  partialVisibility?: boolean;
}

export function Counter(props: CounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <VisibilitySensor
      offset={{ bottom: props.bottomOffset }}
      partialVisibility={props.partialVisibility}
      active={!hasAnimated}
      onChange={(isVisible: boolean) => {
        if (isVisible && !hasAnimated) {
          setHasAnimated(true);
        }
      }}
    >
      {({ isVisible }: { isVisible: boolean }) => <div style={{ height: 70 }}>{isVisible || hasAnimated ? <CountUp {...props} /> : null}</div>}
    </VisibilitySensor>
  );
}

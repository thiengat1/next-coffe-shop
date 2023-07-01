import { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

export interface IUseCommonProps {}

export default function UseCommon(props?: IUseCommonProps) {
  const infoRef = useRef<any>(null);
  const itemRef = useRef<any>(null);
  const [infoVisible, setInfoVisible] = useState(false);
  const [itemVisible, setItemVisible] = useState(false);
  const infoAnimated = useSpring({
    opacity: infoVisible ? 1 : 0,
    transform: infoVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20%, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 20%, 0)' },
    config: { duration: 1000, tension: 100, friction: 20 },
  });
  const itemAnimated = useSpring({
    opacity: itemVisible ? 1 : 0,
    transform: itemVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20%, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 20%, 0)' },
    config: { duration: 1000, tension: 100, friction: 20 },
  });
  const handleScroll = (isItem: boolean) => {
    const { top, bottom } = isItem
      ? itemRef.current?.getBoundingClientRect()
      : infoRef.current?.getBoundingClientRect();
    const { innerHeight } = window;

    if (top < innerHeight && bottom > 0) {
      if (isItem) {
        setItemVisible(true);
      } else {
        setInfoVisible(true);
      }
    }
  };
  return {
    infoAnimated,
    itemAnimated,
    handleScroll,
    infoVisible,
    itemVisible,
    infoRef,
    itemRef,
    animated,
  };
}

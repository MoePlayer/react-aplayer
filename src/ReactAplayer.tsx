import React, { useEffect } from 'react';
// @ts-ignore
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import { APlayerOptions, AudioEvents, PlayerEvents } from './react-aplayer';

function startsWithOn(str: string) {
  const prefix = 'on';
  return str.slice(0, prefix.length) === prefix;
}

function firstCharToLower(str: String) {
  if (!str) return '';
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function GetListenersFromProps(props: APlayerOptions): {
  [key in AudioEvents | PlayerEvents]?: Function;
} {
  let listeners: { [key in AudioEvents | PlayerEvents]?: Function } = {};

  for (const key in props) {
    if (key == 'onInit') continue;
    if (startsWithOn(key)) {
      const event = firstCharToLower(key.slice(2));
      listeners[event as AudioEvents | PlayerEvents] = props[
        key as keyof APlayerOptions
      ] as Function;
    }
  }

  return listeners;
}

const ReactAplayer: React.FC<APlayerOptions> = (props) => {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const listeners = GetListenersFromProps(props);
  useEffect(() => {
    const { onInit, ...rest } = props;
    const control = new APlayer({
      container: mountRef.current,
      ...rest,
    });
    onInit && onInit(control);
    for (const key in listeners) {
      control.on(
        key as AudioEvents | PlayerEvents,
        listeners[key as AudioEvents | PlayerEvents] as Function
      );
    }
    return () => {
      control.destroy();
    };
  }, []);

  return <div ref={mountRef} />;
};

ReactAplayer.defaultProps = {
  fixed: false,
  mini: false,
  autoplay: false,
  theme: '#b7daff',
  loop: 'all',
  order: 'list',
  preload: 'auto',
  volume: 0.7,
  mutex: true,
  lrcType: 0,
  listFolded: false,
  storageName: 'react-aplayer-setting',
};

export default ReactAplayer;

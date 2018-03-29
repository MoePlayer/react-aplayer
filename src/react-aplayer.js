import React from 'react';
import PropTypes from 'prop-types';
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import events from './events';

const capitalize = function(str) {
  return str[0].toUpperCase() + str.slice(1);
};

const eventsPropTypes = events.reduce((acc, event) => {
  acc[`on${capitalize(event)}`] = PropTypes.func;
  return acc;
}, {});

const audioItemShape = PropTypes.shape({
  name: PropTypes.string,
  artist: PropTypes.string,
  url: PropTypes.string,
  cover: PropTypes.string,
  lrc: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string
});

class ReactAplayer extends React.Component {
  static propTypes = {
    onInit: PropTypes.func,
    // belows are the same props with aplayer
    fixed: PropTypes.bool,
    mini: PropTypes.bool,
    autoplay: PropTypes.bool,
    theme: PropTypes.string,
    loop: PropTypes.oneOf(['all', 'one', 'none']),
    order: PropTypes.oneOf(['list', 'random']),
    preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
    volume: PropTypes.number,
    audio: PropTypes.oneOfType([
      audioItemShape,
      PropTypes.arrayOf(audioItemShape)
    ]),
    customAudioType: PropTypes.object,
    mutex: PropTypes.bool,
    lrcType: PropTypes.number,
    listFolded: PropTypes.bool,
    listMaxHeight: PropTypes.string,
    storageName: PropTypes.string,
    // belows are bind event listener
    ...eventsPropTypes
  };

  static defaultProps = {
    onInit() {},
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
    storageName: 'react-aplayer-setting'
  };

  componentDidMount() {
    const { onInit, ...restProps } = this.props;

    const control = new APlayer({
      ...restProps,
      container: this.container
    });

    events.forEach(event => {
      const funcName = 'on' + capitalize(event);
      const callback = this.props[funcName];
      if (callback) {
        control.on(event, callback);
      }
    });

    this.control = control;
    onInit(control);
  }

  render() {
    return <div ref={el => (this.container = el)} />;
  }
}

export default ReactAplayer;

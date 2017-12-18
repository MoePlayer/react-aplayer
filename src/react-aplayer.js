import React from 'react';
import PropTypes from 'prop-types';
import APlayer from 'aplayer';

const events = ['play', 'pause', 'playing', 'canplay', 'ended', 'error'];
const capitalize = function (str) {
  return str[0].toUpperCase() + str.slice(1);
};

export default class ReactAplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: null,
    };
  }
  componentDidMount() {
    this.aplay(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.music) {
      this.ap.destroy();
      this.aplay(nextProps);
    }
  }
  aplay(props) {
    this.ap = new APlayer({
      element: this.el,
      narrow: props.narrow,
      autoplay: props.autoplay,
      showlrc: props.showlrc,
      mutex: props.mutex,
      theme: props.theme,
      preload: props.preload,
      mode: props.mode,
      listmaxheight: props.listmaxheight,
      music: props.music
    });

    events.forEach(event => {
      let funcName = 'on' + capitalize(event);
      let callback = this.props[funcName];
      if (callback) {
        this.ap.on(event, callback);
      }
    });
    this.state.control = this.ap;
  }
  render() {
    return (
      <div className="aplayer" ref={(el) => {
        this.el = el;
      }}></div>
    );
  }
}

ReactAplayer.propTypes = {
  autoplay: PropTypes.bool,
  listmaxheight: PropTypes.string,
  mode: PropTypes.oneOf(['circulation', 'order', 'random', 'single']),
  mutex: PropTypes.bool,
  narrow: PropTypes.bool,
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
  showlrc: PropTypes.number,
  theme: PropTypes.string,
  music(props, propName) {
    const prop = props[propName];
    let audios;
    if (!prop) return new Error(propName + ' is required');

    if (Object.prototype.toString.call(prop) === '[object Object]') {
      audios = [prop];
    } else if (Array.isArray(prop)) {
      audios = prop;
    } else {
      return new Error(propName + ' should be Object / Array');
    }

    for (let i = 0; i < audios.length; i++) {
      let item = audios[i];
      if (!item.url) {
        return new Error(`${propName} should have 'url' property`);
      }
    }
  },
  onCanplay: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onPlaying: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func,
};

ReactAplayer.defaultProps = {
  autoplay: false,
  mode: 'circulation',
  mutex: false,
  narrow: false,
  preload: 'auto',
  showlrc: 0,
  theme: '#b7daff'
};
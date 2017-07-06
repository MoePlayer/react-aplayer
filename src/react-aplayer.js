import React from 'react';
import PropTypes from 'prop-types';
import APlayer from 'aplayer';

const events = ['play', 'pause', 'playing', 'canplay', 'ended', 'error'];
const capitalize = function(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export default class ReactAplayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: null,
    };
  }

  render() {
    return (
      <div className="aplayer" ref={(el) => {
        this.el = el;
      }}></div>
    );
  }

  componentDidMount() {
    let ap = this.state.control = new APlayer({
      element: this.el,
      narrow: this.props.narrow,
      autoplay: this.props.autoplay,
      showlrc: this.props.showlrc,
      mutex: this.props.mutex,
      theme: this.props.theme,
      preload: this.props.preload,
      mode: this.props.mode,
      listmaxheight: this.props.listmaxheight,
      music: this.props.music
    });

    events.forEach(event => {
      let funcName = 'on' + capitalize(event);
      let callback = this.props[funcName];
      if (callback) {
        ap.on(event, callback);
      }
    });
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
  music(props, propName){
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
import React, { PureComponent } from 'react';
import ReactAplayer from './react-aplayer';
import appData from './data';
import './app.css';

class App extends PureComponent {
  // event binding example
  onPlay = () => {
    console.log('on play');
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  initAp1 = ap => {
    this.ap1 = ap;
  };

  render() {
    return (
      <div className="landing">
        <h1 className="main-title">React Aplayer</h1>
        <h3>🍭 Wow, A react wrapper of the beautiful HTML5 music Aplayer</h3>

        <div className="aplayer-wrap">
          {/* example with detailed props */}
          <ReactAplayer
            {...appData.apLrcList}
            onInit={this.initAp1}
            onPlay={this.onPlay}
            onPause={this.onPause}
          />
          {/* example of access aplayer instance API */}
          <span className="footer">
            {' '}
            click button to try player control ->{' '}
          </span>
          <button onClick={() => this.ap1.toggle()}>toggle()</button>
        </div>

        {/* example with deconstructing props */}
        <ReactAplayer {...appData.apFixedLrcList} />

        <div className="landing-buttons">
          <a
            className="landing-button"
            target="_blank"
            href="https://github.com/MoePlayer/react-aplayer"
          >
            GitHub
          </a>

          <a
            className="landing-button"
            target="_blank"
            href="https://github.com/MoePlayer/react-aplayer#react-aplayer"
          >
            React-Aplayer Docs
          </a>

          <a
            className="landing-button"
            target="_blank"
            href="https://aplayer.js.org/#/home"
          >
            Aplayer Docs
          </a>
        </div>
      </div>
    );
  }
}

export default App;

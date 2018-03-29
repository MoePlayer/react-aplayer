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

  renderReactLogo = () => {
    return (
      <img
        className="react-logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
      />
    );
  };

  render() {
    return (
      <div className="landing">
        <h1 className="main-title">React Aplayer</h1>
        <h2>
          {this.renderReactLogo()} x <span className="icon-lollipop">🍭</span>
        </h2>
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

import React from 'react';
import ReactAplayer from './react-aplayer';
import appData from './data.json';
import './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  playHandler() {
    console.log('on play');
  }

  pauseHandler() {
    console.log('on pause');
  }

  render() {
    return (
      <div className="container">
        <h1 className="main-title">React Aplayer</h1>
        <h2>A react wrapper of Aplayer</h2>

        <h3>Normal</h3>
        <ReactAplayer
          {...appData.apNormal}
          onPlay={this.playHandler}
          onPause={this.pauseHandler}
          ref={ap => {
            const player = ap.state.control;

            const methods = [
              'play',
              'pause',
              'toggle',
              'volume',
              'addMusic',
              'destroy',
            ];
            methods.forEach(method => {
              this[method] = player[method].bind(player);
            });
          }}
        />
        <button onClick={() => this.play()}>play</button>
        <button onClick={() => this.play(100)}>play(100)</button>
        <button onClick={() => this.pause()}>pause</button>
        <button onClick={() => this.toggle()}>toggle()</button>
        <button onClick={() => this.volume(0.1)}>volume(0.1)</button>
        <button onClick={() => this.addMusic(appData.apList.music)}>
          addMusic()
        </button>
        <button onClick={() => this.destroy()}>destroy()</button>

        <h3>With playlist</h3>
        <ReactAplayer
          {...appData.apList}
          ref={ap => {
            const player = ap.state.control;
            this.setMusic = player.setMusic.bind(player);
          }}
        />
        <button onClick={() => this.setMusic(2)}>setMusic(2)</button>

        <h3>With lyrics</h3>
        <ReactAplayer {...appData.apLrc} />

        <h3>With playlist and lyrics</h3>
        <ReactAplayer {...appData.apLrcList} />

        <h3>Narrow</h3>
        <ReactAplayer music={appData.apNormal.music} narrow={true} />
      </div>
    );
  }
}

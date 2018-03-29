
# React-APlayer
[![GitHub tag](https://img.shields.io/github/tag/sabrinaluo/react-aplayer.svg)](https://github.com/sabrinaluo/react-aplayer/releases) [![npm](https://img.shields.io/npm/dm/react-aplayer.svg)](https://www.npmjs.com/package/react-aplayer) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/sabrinaluo/react-aplayer/blob/master/LICENSE)

🍭 Wow, A react wrapper of the beautiful HTML5 music [APlayer](https://github.com/MoePlayer/APlayer)

## Introduction
[Demo](http://sabrinaluo.github.io/react-aplayer/)

### List with lyrics
![image](https://user-images.githubusercontent.com/5300359/38107595-f7fd325a-33c4-11e8-9a9a-5d60613c9458.png)

### :star2: Fixed Mode
![image](https://user-images.githubusercontent.com/5300359/38107623-11ad0874-33c5-11e8-8e0b-1e9625571e4b.png)

## Usage

### Install
```
npm install react-aplayer --save
```

### Example
Check `src/app.js` to get more example;

```javascript
import React from 'react';
import ReactAplayer from 'react-aplayer';

export default class App extends React.Component {
  // event binding example
  onPlay = () => {
    console.log('on play');
  };

  onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  onInit = ap => {
    this.ap = ap;
  };

  render() {
    const props = {
      theme: '#F57F17',
      lrcType: 3,
      audio: [
        {
          name: '光るなら',
          artist: 'Goose house',
          url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
          cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
          lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
          theme: '#ebd0c2'
        }
      ]
    };

    return (
      <div>
        <ReactAplayer
          {...props}
          onInit={this.onInit}
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
        {/* example of access aplayer instance API */}
        <button onClick={() => this.ap.toggle()}>toggle</button>
      <div>
    );
  }
}
```

### Props
**`onInit`** as a callback function will be invoked when aplayer instance get initialized and with the instance as parameter, through which you can get the full control of aplayer API. *see `onInit` in above example*

Other props are exactly the same with original APlayer, please check the [docs](https://aplayer.js.org/#/home) for more details.

### Event Handlers
Event handlers are triggered when corresponding event happens, it takes a callback function as parameter.

All the event handlers in `react-aplayer` are in a format of captalized event name prefixed with `on`, e.g. in aplayer, event `play` will be `onPlay` in react-aplayer,

Please check the [docs](https://aplayer.js.org/#/home?id=event-binding) for more events.

### APlayer Instance
APlayer Instance can be accessed through `onInit`

## LICENSE
[MIT License](https://github.com/sabrinaluo/react-aplayer/blob/master/LICENSE)

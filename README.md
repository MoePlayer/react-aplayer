# React-APlayer [![GitHub tag](https://img.shields.io/github/tag/sabrinaluo/react-aplayer.svg)](https://github.com/sabrinaluo/react-aplayer/releases) [![npm](https://img.shields.io/npm/dm/react-aplayer.svg)](https://www.npmjs.com/package/react-aplayer) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/sabrinaluo/react-aplayer/blob/master/LICENSE) 
A React wrapper component of [APlayer](https://github.com/DIYgod/APlayer)

## Introduction
[Demo](http://sabrinaluo.com/react-aplayer/)

Screen shot
[![](https://camo.githubusercontent.com/a69d395460135e5542a3fd3f9a09d3817d17c228/68747470733a2f2f692e696d6775722e636f6d2f4a44724a5843722e706e67)]()

## Usage

### Install
```
npm install react-aplayer --save
```

### Example
```
import React from 'react';
import ReactAplayer from 'react-aplayer';

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
    const props = {
      "autoplay": true,
      "mutex": true,
      "preload": "metadata",
      "music": {
        "author": "Hans Zimmer/Richard Harvey",
        "url": "http://devtest.qiniudn.com/Preparation.mp3",
        "pic": "http://devtest.qiniudn.com/Preparation.jpg"
      }
    };

    return (
      <ReactAplayer {...props} onPlay={this.playHandler} onPause={this.pauseHandler}/>
    );
  }
}
```

### Props
Props are almost the same with original APlayer, please check the [docs](https://aplayer.js.org/docs/#/) for more details.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
|autoplay| Boolean | N |`false` | |
|listmaxheight| String | N | N/A |e.g. `'80px'` |
|mode| String | |`'circulation'`|One of `'circulation'`, `'order'`, `'random'`, `'single'`|
|mute| Boolean | |`false`| |
|narrow| Boolean | |`false`| |
|preload| String | |`'auto'`|One of `'auto'`, `'metadata'`, `'none'`|
|showlrc| Number | |`0`| |
|theme| String | |`'#b7daff'`| |
|music| Array \| Object | Y | N/A | |
|music.url| String | Y | | |
|music.title| String | | N/A | |
|music.author| String | | N/A | |
|music.pic| String |  | N/A | |
|music.lrc| String |  | N/A | |

### Event Handlers
Event handlers are triggered when corresponding event happens, it takes a callback function as param.

|Name|Type | Description |
|---|---|---|
|onPlay| Func | |
|onCanplay| Func | |
|onPlay| Func | |
|onPause| Func | |
|onPlaying| Func | |
|onEnded| Func | |
|onError| Func | |

### APlayer Instance & Bind Methods
APlayer Instance can be accessed through `.state.control`.

```
<ReactAplayer {...props} ref={(ap) => {
          const aplayer = ap.state.control;
        }/>
```

To expose APlayer methods on React level, binding is needed.
```
<ReactAplayer {...props} ref={(ap) => {
          const player = ap.state.control;
          this.play = player.play.bind(player);
        }}/>
```

## LICENSE
[MIT License](https://github.com/sabrinaluo/react-aplayer/blob/master/LICENSE)

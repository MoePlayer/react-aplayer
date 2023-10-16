export interface APlayerOptions {
  fixed?: boolean;
  mini?: boolean;
  autoplay?: boolean;
  theme?: string;
  loop?: 'all' | 'one' | 'none';
  order?: 'list' | 'random';
  preload?: 'none' | 'metadata' | 'auto';
  volume?: number;
  audio: APlayerAudio[];
  mutex?: boolean;
  lrcType?: number;
  listFolded?: boolean;
  listMaxHeight?: string;
  storageName?: string;
  onInit?: (api: APlayerApi) => any;

  // Events - Audio
  onAbort?: () => any;
  onCanplay?: () => any;
  onCanplaythrough?: () => any;
  onDurationchange?: () => any;
  onEmptied?: () => any;
  onEnded?: () => any;
  onError?: () => any;
  onLoadeddata?: () => any;
  onLoadedmetadata?: () => any;
  onLoadstart?: () => any;
  onMozaudioavailable?: () => any;
  onPause?: () => any;
  onPlay?: () => any;
  onPlaying?: () => any;
  onProgress?: () => any;
  onRatechange?: () => any;
  onSeeked?: () => any;
  onSeeking?: () => any;
  onStalled?: () => any;
  onSuspend?: () => any;
  onVolumechange?: () => any;
  onTimeupdate?: () => any;
  onWaiting?: () => any;
  // Events - Player
  onListshow?: () => any;
  onListhide?: () => any;
  onListadd?: () => any;
  onListremove?: () => any;
  onListswitch?: () => any;
  onListclear?: () => any;
  onNoticeshow?: () => any;
  onNoticehide?: () => any;
  onDestroy?: () => any;
  onLrcshow?: () => any;
  onLrchide?: () => any;
}

export interface APlayerAudio {
  name: string;
  artist?: string;
  url: string;
  cover?: string;
  lrc?: string;
  theme?: string;
  type?: 'auto' | 'hls' | 'normal' | string;
}

export type APlayerLrc = {
  show: () => void;
  hide: () => void;
  toggle: () => void;
};

export type APlayerList = {
  show: () => void;
  hide: () => void;
  toggle: () => void;
  add: (audios: APlayerAudio[]) => void;
};

export declare const audioEvents: [
  'abort',
  'canplay',
  'canplaythrough',
  'durationchange',
  'emptied',
  'ended',
  'error',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'mozaudioavailable',
  'pause',
  'play',
  'playing',
  'progress',
  'ratechange',
  'seeked',
  'seeking',
  'stalled',
  'suspend',
  'volumechange',
  'timeupdate',
  'waiting',
];

export declare const playerEvents: [
  'listshow',
  'listhide',
  'listadd',
  'listremove',
  'listswitch',
  'listclear',
  'noticeshow',
  'noticehide',
  'destroy',
  'lrcshow',
  'lrchide',
];

export type AudioEvents = (typeof audioEvents)[number];
export type PlayerEvents = (typeof playerEvents)[number];

export interface APlayerApi {
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  toggle: () => void;
  on: (event: AudioEvents | PlayerEvents, callback: () => void) => void;
  volume: (percentage: number, nostorage: boolean) => void;
  theme: (color: string, index: number) => void;
  setMode: (mode: string) => void;
  mode: 'mini' | 'normal';
  notice: (text: string, time: number, opacity: number) => void;
  skipBack: () => void;
  skipForward: () => void;
  destroy: () => void;
  lrc: APlayerLrc;
  list: APlayerList;
  audio: {
    currentTime: number;
    duration: number;
    buffered: boolean;
  };
}

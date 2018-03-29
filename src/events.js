export const audioEvents = [
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
  'timeupdate',
  'volumechange',
  'waiting'
];

export const playerEvents = [
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
  'lrchide'
];

const events = [...audioEvents, ...playerEvents];

export default events;

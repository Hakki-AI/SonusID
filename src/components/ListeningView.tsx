// AudD için ham mikrofon stream'ini kayıt et (işlenmemiş ses = daha iyi parmak izi)
const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
  ? 'audio/webm;codecs=opus'
  : MediaRecorder.isTypeSupported('audio/webm')
    ? 'audio/webm'
    : MediaRecorder.isTypeSupported('audio/mp4')
      ? 'audio/mp4'
      : '';

const recorderOptions = mimeType ? { mimeType } : {};
const mediaRecorder = new MediaRecorder(stream, recorderOptions);

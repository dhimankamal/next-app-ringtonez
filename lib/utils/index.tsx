export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    const ctx = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(ctx, args), wait);
  };
};

export async function convertAndDownloadRingtone(
  mp3Url: string
): Promise<boolean> {
  try {
    const response = await fetch(mp3Url);
    const mp3Blob = await response.blob();
    const m4aBlob = await convertToM4A(mp3Blob);
    downloadBlobAsFile(m4aBlob, "ringtone.m4a");
    return true;
  } catch (error) {
    return false;
  }
}

function convertToM4A(mp3Blob: Blob): Promise<Blob> {
  return new Promise(resolve => {
    const audio = new Audio();
    audio.src = URL.createObjectURL(mp3Blob);

    audio.addEventListener("loadedmetadata", () => {
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaElementSource(audio);
      const destination = audioCtx.createMediaStreamDestination();
      source.connect(destination);

      const mediaRecorder = new MediaRecorder(destination.stream);
      const m4aChunks: Blob[] = [];

      mediaRecorder.addEventListener("dataavailable", e => {
        if (e.data.size > 0) {
          m4aChunks.push(e.data);
        }
      });

      mediaRecorder.addEventListener("stop", () => {
        const m4aBlob = new Blob(m4aChunks, { type: "audio/mp4" });
        audioCtx.close();
        resolve(m4aBlob);
      });

      mediaRecorder.start();
      audio.play();
      setTimeout(() => {
        mediaRecorder.stop();
      }, audio.duration * 1000);
    });
  });
}

function downloadBlobAsFile(blob: Blob, fileName: string): void {
  const downloadLink = document.createElement("a");
  const url = URL.createObjectURL(blob);

  downloadLink.href = url;
  downloadLink.download = fileName;
  downloadLink.click();

  // Delay revoking the object URL to ensure the file is downloaded
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 100);
}

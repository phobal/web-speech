const ding = () => {
  const audio = document.getElementById("audio") as HTMLAudioElement;
  // 如果用户还没有操作的话，直接调用 audio?.play() 会出现错误
  const playPromise = audio?.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("播放成功！");
      })
      .catch((error: string) => {
        console.error(error);
      });
  }
};

export { ding };

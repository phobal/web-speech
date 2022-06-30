//语音播报
const speech = () => {
  let speechInstance = new SpeechSynthesisUtterance();

  return {
    //语音播报开始
    say: function (content: string) {
      let lang = "zh-CN";
      let text = content;
      if (text !== "") {
        speechInstance.text = text;
        speechInstance.lang = lang;
        speechInstance.volume = 1;
        speechInstance.rate = 1;
        speechSynthesis.speak(speechInstance);
        speechInstance.onend = function (event) {
          console.log("语音播报完毕");
        };
      }
    },

    //暂停
    pause: function () {
      speechSynthesis.pause();
    },
    //重新开始
    resume: function () {
      speechSynthesis.resume();
    },
    //取消
    cancel: function () {
      speechSynthesis.cancel();
    },
  };
};

export default speech();

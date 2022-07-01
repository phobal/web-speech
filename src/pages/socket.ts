import Stomp from "stompjs";
import speech from "./speech";
import notice from "./notice";
import { ding } from "./ding";

let client: any = null;
const url = "ws://127.0.0.1:61614/stomp";
// const isPlay = canPlay();
const connect = () => {
  client = Stomp.client(url);
  client.heartbeat.outgoing = 0;
  client.connect(
    {},
    //连接成功回调
    function connectCallback() {
      console.log("连接成功~");
      //订阅消息
      // 因为我们订阅的是topic下的msg，所以这里是'/topic/msg'
      client.subscribe(
        "/topic/import/message",
        function (message: { body: string }) {
          const data = message.body;
          if (data) {
            console.log(data);
            speech.say(data);
            notice(data);
            ding();
          }
        },
        { id: "importMessage" }
      );
    },
    //连接失败回调
    function errorCallBack(error: string) {
      console.log(error);
    }
  );
};

export const disConnect = () => {
  client.unsubscribe("importMessage");
};

export default connect;

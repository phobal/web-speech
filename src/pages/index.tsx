import React from "react";
import connect, { disConnect } from "./socket";
import "antd/dist/antd.css";

export default function HomePage() {
  React.useEffect(() => {
    connect();
    return () => {
      disConnect();
    };
  }, []);
  return (
    <div>
      <h2>Speech Test</h2>
      <h5>
        please open your chrome console tab, and see the socket information
      </h5>
      <audio id="audio">
        <source src={require("@/assets/dududu.mp3")} type="audio/mpeg" />
      </audio>
    </div>
  );
}

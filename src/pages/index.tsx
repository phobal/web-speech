import React from "react";
import connect, { disConnect } from "./socket";

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
    </div>
  );
}

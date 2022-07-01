import React from 'react';
import { notification } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

const notice = (msg: string) => {
  notification.open({
    message: "新消息通知",
    description: msg,
    icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
  })
};

export default notice;

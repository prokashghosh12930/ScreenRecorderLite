import {
  showFloatingBubble,
  hideFloatingBubble,
  requestPermission,
  initialize,
} from "react-native-floating-bubble";
import React, { useEffect, useState } from "react";
import screenRecordHook from "./screenRecordHook";
import { DeviceEventEmitter } from "react-native";

const bubbleRenderHook = () => {
  const [permissonStatus, setPermissonHook] = useState<boolean>(false);
  const { recordingStart, setRecordingStatus } = screenRecordHook();
  useEffect(() => {
    requestPermission().catch(() => console.log("Permission is not granted"));

    initialize();
    showFloatingBubble(20, 30);

    DeviceEventEmitter.addListener("floating-bubble-press", (e) => {
      // What to do when user press the bubble
      recordingStart();
      setRecordingStatus(true);
    });
  }, []);

  return {
    permissonStatus,
  };
};

export default bubbleRenderHook;

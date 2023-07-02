import React, { useState, useEffect } from "react";
import { PermissionsAndroid } from "react-native";
import RecordScreen from "react-native-record-screen";
import RNFS from "react-native-fs";
const screenRecordHook = () => {
  const [recordingStatus, setRecordingStatus] = useState<boolean>(false);
  const [myDirectory, setMyDirectory] = useState<any>();

  useEffect(() => {
    fetchAllRecords();
    requestPermission()
      .then(() => console.log("Permission Granted"))
      .catch(() => console.log("Permission is not granted"));
  }, []);

  /**
   * @name requestPermission
   * @description
   * This function is use to ask permission from the user about their mic and storage.
   * @params none
   * @returns none
   */
  const requestPermission = async (): Promise<void> => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * @name recordingStart
   * @description
   * This function is use to start screen record.
   * @params null
   * @returns null
   */
  const recordingStart = (): void => {
    const res = RecordScreen.startRecording().catch((error) =>
      console.log(error)
    );
    res.then((data) => {
      if (data === "started") {
        setRecordingStatus(true);
      }
    });
  };

  /**
   * @name recordingStop
   * @description
   * This function is use to stop recording.
   * @params null
   * @returns null
   */
  const recordingStop = async (): Promise<void> => {
    const res: any = await RecordScreen.stopRecording().catch((error) =>
      console.log(error)
    );
    if (res) {
      const url = res.result.outputURL;
      fetchAllRecords();
    }
    setRecordingStatus(false);
  };

  /**
   * @name fetchAllRecords
   * @description
   * This function is use to fetching all screen records details from mobile storage.
   * @params null
   * @returns null
   */
  const fetchAllRecords = (): void => {
    RNFS.readDir(
      "/storage/emulated/0/Android/data/com.overlayrecorder/files/ReactNativeRecordScreen"
    )
      .then((result) => {
        setMyDirectory(result);
        console.log("result",result.length)
      })
      .catch((err) => console.log("Error is:--", err));
  };

  return {
    requestPermission,
    recordingStart,
    recordingStop,
    fetchAllRecords,
    recordingStatus,
    setRecordingStatus,
    myDirectory,
  };
};

export default screenRecordHook;

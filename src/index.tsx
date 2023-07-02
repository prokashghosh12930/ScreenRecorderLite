import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import screenRecordHook from "./hooks/screenRecordHook";
import { VideoList } from "./components";
import bubbleRenderHook from "./hooks/bubbleRenderHook";

const App = (): JSX.Element => {
  const { requestPermission, recordingStart, recordingStop, recordingStatus } =
    screenRecordHook();
  const { permissonStatus } = bubbleRenderHook();

  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <VideoList title={"Videos"} />
      {!recordingStatus ? (
        <TouchableOpacity style={styles.roundButton} onPress={recordingStart}>
          <Text style={styles.plusStyle}>start</Text>
        </TouchableOpacity>
      ) : null}
      {recordingStatus ? (
        <TouchableOpacity style={styles.roundButton} onPress={recordingStop}>
          <Text style={styles.plusStyle}>stop</Text>
        </TouchableOpacity>
      ) : null}
      <Text style={styles.showPermissonStatus}>{permissonStatus}</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundButton: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "#FFA500",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  plusStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 19,
  },
  showPermissonStatus: {
    top: 900,
  },
});

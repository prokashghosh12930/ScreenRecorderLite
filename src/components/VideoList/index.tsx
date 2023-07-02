import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Video from "react-native-video";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Header from "../common/Header";
import { propsHeader } from "../../utils/types";
import screenRecordHook from "../../hooks/screenRecordHook";
import FullScreenVideo from "../common/FullSceenVideo";

const VideoList: React.FC<propsHeader> = () => {
  const [show, setShow] = useState<boolean>(false);
  const [path, SetPath] = useState<string>(" ");
  const [name, setName] = useState<string>(" ");
  const { myDirectory } = screenRecordHook();
  const goToVideo = (val: string, name: string) => {
    SetPath(val);
    setName(name);
    setShow(true);
  };
  useEffect(()=>{
    console.log("Run")
  },[myDirectory])
  return (
    <View style={styles.container}>
      <Header title={"Videos"} />
      <FlatList
        data={myDirectory}
        style={styles.videoListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.screenRecords}
            onPress={() => goToVideo(item.path, item.name)}
          >
            <Video
              source={{ uri: `file://${item.path}` }}
              resizeMode={"cover"}
              paused={true}
              style={styles.videoText}
            />
            <Text style={styles.textStyle}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      <FullScreenVideo isShowModal={show} videoPath={path} setShow={setShow} />
    </View>
  );
};

export default VideoList;

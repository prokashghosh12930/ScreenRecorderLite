import { View, Modal, BackHandler, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { propsVideoScreen } from "../../../utils/types";
import Video from "react-native-video";
import styles from "./styles";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const FullScreenVideo: React.FC<propsVideoScreen> = ({
  isShowModal,
  videoPath,
  setShow,
}) => {
  const [isPaused, setIsPaused] = useState(true);
  console.log("Path", videoPath);

  return (
    <Modal
      visible={isShowModal}
      animationType="slide"
      transparent={false}
      style={styles.containerStyle}
    >
      <View style={styles.videoContainer}>
        <Video
          source={{
            uri: `file://${videoPath}`,
          }}
          resizeMode={"contain"}
          paused={isPaused}
          style={styles.videoSize}
          onEnd={() => setIsPaused(true)}
        />
      </View>
      <TouchableOpacity style={styles.backIcons} onPress={() => setShow(false)}>
        <Ionicons name={"arrow-back-circle"} size={50} />
      </TouchableOpacity>
      <View style={styles.videoControlButton}>
        <TouchableOpacity>
          <AntDesign name={"banckward"} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playPauseContainer}
          onPress={() => setIsPaused(!isPaused)}
        >
          {isPaused ? (
            <EvilIcons name="play" size={40} />
          ) : (
            <Feather name={"pause-circle"} size={30} />
          )}
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name={"forward"} size={20} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FullScreenVideo;

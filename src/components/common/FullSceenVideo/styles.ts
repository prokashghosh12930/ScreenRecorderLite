import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale } from "../../../utils/Matrics";
const styles = StyleSheet.create({
    containerStyle:{
        position:"absolute",
        height:"100%",
        Width:"100%",
    },
    videoContainer:{
        height:"90%",
        width:"90%",
        alignSelf:"center",
        marginTop:10,
    },
    videoSize:{
        height:"100%",
        width:"100%"
    },
    playPauseContainer:{
        height:verticalScale(40),
        width:horizontalScale(40),
        alignItems:"center",
        alignSelf:"center",
    },
    backIcons:{
        position:"absolute",
        left:10,
    },
    videoControlButton:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-evenly",
        alignItems:"center",
        marginTop:verticalScale(5),
    },
})
export default styles;
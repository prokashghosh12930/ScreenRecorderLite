import { StyleSheet } from "react-native";
import { verticalScale } from "../../utils/Matrics";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  videoListContainer: {
    width: "85%",
    alignSelf: "center",
    // borderWidth:2,
  },
  videoText: { 
    height: "70%", 
    width: "100%", 
    borderWidth:1,
    borderRadius:10,  
  },
  screenRecords:{
    width: "45%",
    height: verticalScale(200),
    marginHorizontal:"3%",
    marginVertical:verticalScale(10),
    // borderWidth: 2.1,
    borderColor:"#52006A",
    shadowColor: '#52006A',
  },
  textStyle:{
    height: "30%", 
    width: "100%", 
    borderWidth:1,
    borderRadius:10,
    color:"#000",
    textAlign:"center",
    paddingHorizontal:10
  }
});
export default styles;

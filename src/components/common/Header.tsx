import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { propsHeader } from "../../utils/types";

/**
 * @name Header
 * @description
 * Showing header of a page it can be show with different name.
 * @param title it recieved name of header.
 */
const Header: React.FC<propsHeader> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
export default Header;

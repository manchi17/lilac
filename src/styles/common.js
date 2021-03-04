import { StyleSheet } from "react-native";
import { COLORS } from '../styles/colors';

export const common = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: COLORS.bacground
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rowConatiner: {
   flexDirection:"row"
  },
 
  flatList: {
    padding: 30,
    borderBottomColor: COLORS.light_greyexpo,
    borderBottomWidth: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
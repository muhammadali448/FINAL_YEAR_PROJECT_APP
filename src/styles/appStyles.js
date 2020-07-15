import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  txtContainer: { width: "auto" },
  smallTextStyle: {
    width: "auto",
    height: "auto",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#ffffff",
    marginTop: 2,
    textAlign: "right"
  },
  textStyle: {
    width: "auto",
    height: "auto",
    margin: "auto",
    fontSize: 20,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    color: "#ffffff",
    textAlign: "center"
  },
  icon: { color: "white", fontSize: 120 },
  buttonStyle: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#484464",
    width: 200,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto"
  },
  btnTextStyle: {
    // height: 18,
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    // lineHeight: 19,
    // letterSpacing: 0,
    textAlign: "left",
    color: "#10c1c1"
  }
});

export default styles;

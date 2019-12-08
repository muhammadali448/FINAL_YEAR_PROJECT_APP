import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import Tts from "react-native-tts";
import { Button, Icon } from "native-base";
import BS from "react-native-bluetooth-serial";
import Toast from "react-native-root-toast";
import LinearGradientComponent from "./components/LinearGradient";
import styles from "./styles/appStyles";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      device: {},
      devices: []
    };
    this.bs = BS;
  }

  displayToast(message) {
    Toast.show(message, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0
    });
  }

  async componentDidMount() {
    try {
      await BS.enable();
      this.displayToast("Bluetooth enabled");
      BS.on("bluetoothEnabled", () => this.displayToast("Bluetooth enabled"));
      BS.on("bluetoothDisabled", () => this.displayToast("Bluetooth disabled"));
      BS.on("error", error => console.log("Error: ", error.message));
      BS.on("connectionLost", () => {
        if (this.state.device) {
          this.displayToast(
            `Connection to device ${this.state.device.name} has been lost`
          );
        }
      });
    } catch (error) {
      this.displayToast(error.message);
    }
  }

  connectHc05 = async () => {
    try {
      const devices = await BS.list();
      console.log("DEVICES: ", devices);
      if (devices.length > 0) {
        const hc05 = devices.filter(device => device.name === "HC-05")[0];
        console.log("HC-05 Connected: ", hc05.id);
        await Promise.all([BS.connect(hc05.id), BS.withDelimiter("\n")]);
        // await BS.connect(hc05.id);
        this.displayToast(`Connected to device ${hc05.name}`);
        // await BS.withDelimiter("\n");
        BS.on("read", data => {
          this.displayToast(data.data);
          Tts.getInitStatus().then(() => {
            Tts.speak(data.data);
          });
          console.log(`DATA FROM BLUETOOTH: ${data.data}`);
        });
      }
    } catch (error) {
      this.displayToast(error.message);
    }
  };

  render() {
    return (
      <LinearGradientComponent slideStyle={styles.slideStyle}>
        <Icon type="Ionicons" name="hand" style={styles.icon} />
        <View style={styles.txtContainer}>
          <Text style={styles.textStyle}>SMART GLOVE</Text>
          <Text style={styles.smallTextStyle}>
            created by Muhammad Ali, Yasir Abbas and Maryam Jahangir
          </Text>
        </View>
        <Button block style={styles.buttonStyle} onPress={this.connectHc05}>
          <Text style={styles.btnTextStyle}>Connect</Text>
        </Button>
      </LinearGradientComponent>
    );
  }
}

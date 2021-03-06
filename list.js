import React, { Component } from "react";
import {
  AppRegistry,
  Animated,
  Easing,
  View,
  Text,
  TouchableHighlight
} from "react-native";

export default class test extends Component {
  constructor(props) {
    super(props);

    this.animasyonDegeri1 = new Animated.Value(0);
    this.animasyonDegeri2 = new Animated.Value(0);
    this.animasyonDegeri3 = new Animated.Value(0);
  }

  componentDidMount() {
    this.oynat();
  }

  oynat() {
    this.animasyonDegeri1.setValue(0);
    this.animasyonDegeri2.setValue(0);
    this.animasyonDegeri3.setValue(0);
    const animasyonYap = function(value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay
      });
    };
    Animated.parallel([
      animasyonYap(this.animasyonDegeri1, 2000, Easing.ease),
      animasyonYap(this.animasyonDegeri2, 1000, Easing.ease, 1000),
      animasyonYap(this.animasyonDegeri3, 1000, Easing.ease, 2000)
    ]).start();
  }

  render() {
    const scaleText = this.animasyonDegeri1.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    const spinText = this.animasyonDegeri2.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "720deg"]
    });
    const introButton = this.animasyonDegeri3.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 400]
    });

    return (
      <View style={{ flex: 1, marginTop: 100, alignItems: "center" }}>
        <Animated.View style={{ transform: [{ scale: scaleText }] }}>
          <Text>5</Text>
        </Animated.View>
        <Animated.View
          style={{
            marginTop: 20,
            transform: [{ rotate: spinText }],
            top: introButton
          }}
        >
          <Text style={{ fontSize: 20 }}>2</Text>
        </Animated.View>
        <Animated.View style={{ top: introButton, position: "absolute" }}>
          <TouchableHighlight
            onPress={this.oynat.bind(this)}
            style={{
              padding: 10,
              backgroundColor: "blue"
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              Buraya tıkla ve Başlat
            </Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

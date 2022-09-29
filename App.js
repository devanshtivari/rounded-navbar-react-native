import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Pressable } from 'react-native';
import Icon from "react-native-ico-material-design";

var iconHeight = 26;
var iconWidth = 26;


export default class App extends React.Component {
  state={
    screenText: 'Press a button'
  }
  changeText = (text) => {
    console.log(text + ' is pressed')
    this.setState({screenText: text})
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 30, color: "white" }}>
            {this.state.screenText}
          </Text>
          <StatusBar style="light" />
        </View>
        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <Pressable
              onPress={() => this.changeText("Login")}
              style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 50 }}
            >
              <Icon
                name="round-account-button-with-user-inside"
                height={iconHeight}
                width={iconWidth}
                color="#448aff"
              />
            </Pressable>
            <Pressable
              onPress={() => this.changeText("Sign up")}
              style={styles.IconBehave}
              android_ripple={{ borderless: true, radius: 50 }}
            >
              <Icon
                name="add-user-button"
                height={iconHeight}
                width={iconWidth}
                color="#448aff"
              />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },
  NavBar: {
    flexDirection:'row',
    backgroundColor: '#eee',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40,
  },
  IconBehave: {
    padding: 14,
  }
});

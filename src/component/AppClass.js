// rcc
// rfc

// react
import React, { Component } from 'react'

// react native
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// CLASS
class ButtonCounter extends Component {

  // STATE
  state = {
    counter: 0,
  }

  // onPress
  buttonOnClick = () => {
    this.setState({
      counter: this.state.counter + 1, // X++
    });
  };

  // RENDER
  render() {
    // RETURN
    return (
      <View style={styles.container}>
        {/* Button */}
        <TouchableOpacity style={styles.buttonStyle} onPress={this.buttonOnClick}>
          <Text style={styles.buttonTextStyle}> Counter Artır</Text>
        </TouchableOpacity>

        {/* Text data */}
        <View>
          <Text style={styles.justView}> Counter: {this.state.counter}</Text>
        </View>
      </View>
    ) //end return
  } //end render
} //end class

const styles = StyleSheet.create({
  container: {
    // flex-start:sol
    // flex-end: sağ
    // center
    flex: 1,
    alignItems: 'center',     // satır düzleminde (X)
    justifyContent: 'center', // sutun düzleminde (Y)
    backgroundColor: '#000',

  },

  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 10.5,
    padding: 15,
    justifyContent: 'center',
    alignItems: "center",
  },

  buttonTextStyle: {
    color: 'black',
    lineHeight: 25,
    fontSize: 15,
    letterSpacing: 0.5,
    fontWeight : 'bold',
  },

  justView:{
    color: "blue",
    fontSize: 20,
    marginTop: 12,

  }
});


export default ButtonCounter
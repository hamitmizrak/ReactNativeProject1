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

  // counterPlus (+)
  counterPlus = () => {
    this.setState({
      counter: this.state.counter + 1, // X++
    });
  };

  // counterMinus (+)
  counterMinus = () => {
    this.setState({
      counter: this.state.counter - 1, // X++
    });
  };

  // counterReset (+)
  counterReset = () => {
    this.setState({
      counter: this.state.counter = 0, // X++
    });
  };

  // RENDER
  render() {

    // RETURN
    return (
      <View style={styles.container}>
        {/* BUTTON GROUP */}
        <View>
          <Text style={styles.textStyle}> Counter: {this.state.counter}</Text>
        </View>

        {/* BUTTON (+) */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.counterPlus}>
            <Text style={styles.textStyle}> Counter (+)</Text>
          </TouchableOpacity>

          {/* BUTTON (-) */}
          <TouchableOpacity style={styles.buttonStyle} onPress={this.counterMinus}>
            <Text style={styles.textStyle}> Counter (-)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroup}>
          {/* BUTTON (reset) */}
          <TouchableOpacity style={styles.buttonStyle} onPress={this.counterReset}>
            <Text style={styles.textStyle}> Counter Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroup}>
          {/* BUTTON (reset) */}
          <TouchableOpacity style={styles.buttonStyle} onPress={this.counterReset}>
            <Text style={styles.textStyle}> Counter Timer</Text>
          </TouchableOpacity>
          {/* BUTTON (reset) */}
          <TouchableOpacity style={styles.buttonStyle} onPress={this.counterReset}>
            <Text style={styles.textStyle}> Counter Stop</Text>
          </TouchableOpacity>
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

  buttonGroup: {
    flexDirection: "row"
  },

  buttonStyle: {
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 12.5,
    height: 40,
    marginRight: 3,
    marginBottom: 10
  },

  textStyle: {
    color: "blue",
    fontSize: 21,
    marginBottom: 10
  }
});

// EXPORT
export default ButtonCounter
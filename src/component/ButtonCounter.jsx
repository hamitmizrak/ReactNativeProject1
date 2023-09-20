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

  // onPress (+)
  counterPlus = () => {
    this.setState({
      counter: this.state.counter + 1, // X++
    });
  };

  // RENDER
  render() {

    // RETURN
    return (
      <View style={styles.container}>
        <View>

          {/* BUTTON GROUP */}
          <View style={styles.buttonGroup}>
            <Text style={styles.textStyle}> Counter: {this.state.counter}</Text>
          </View>

          {/* BUTTON (+) */}
          <View>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.counterPlus}>
            <Text style={styles.textStyle}> Counter Artır</Text>
          </TouchableOpacity>

          {/* BUTTON (-) */}
          <TouchableOpacity style={styles.buttonStyle} onPress={this.counterPlus}>
            <Text style={styles.textStyle}> Counter Azalt</Text>
          </TouchableOpacity>

          {/* BUTTON (reset) */}
          <TouchableOpacity style={styles.buttonStyle} onPress={this.counterPlus}>
            <Text style={styles.textStyle}> Counter Reset</Text>
          </TouchableOpacity>
          </View>
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

  buttonGroup:{

  },

  buttonStyle: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center'

  },
  textStyle: {
    color: "blue",
    fontSize: 21,
    marginBottom: 10
  }
});

// EXPORT
export default ButtonCounter
// rcc
// rfc

// react
import React, { Component } from 'react'

// react native
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// CLASS
export default class ButtonCounter extends Component {

    // constructor
    constructor(props) {

        // STATE
        this.state = {
            counter: 0,
        }
        // BIND
        this.buttonOnClick = this.buttonOnClick.bind(this);
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
                <TouchableOpacity style={styles.buttonStyle} onPress={this.buttonOnClick}>
                    <Text> Counter Artır</Text>
                </TouchableOpacity>

                <View>
                    <Text> Counter: {this.state.counter}</Text>
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
        alignItems: 'center',     // satır düzleminde
        justifyContent: 'center', // sutun düzleminde
        backgroundColor: '#fff',
    },
    buttonStyle: {

    }
});

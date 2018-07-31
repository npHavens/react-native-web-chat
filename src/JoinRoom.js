import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';

export default class JoinRoom extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
         input: ''
        }
      }

    render () {
        return (
        <View style={{marginTop: 22}}>
            <Text>Enter Room Name</Text>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => { this.setState({ input: text })}}
            />
             <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.handleJoinRoom(this.state.input)}
                >
            <Text> Join</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.handleCancel()}
                >
            <Text> Cancel</Text>
            </TouchableOpacity>
        </View>
        );
    };
    
};

const styles = StyleSheet.create({
    button: {
      fontSize: 36
    },
    container: {
      flex: 1,
      backgroundColor: '#ededed',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    }
  });
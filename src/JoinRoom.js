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
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>Enter Room Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ input: text })}
                autoFocus={true}
            />
             <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.handleJoinRoom(this.state.input)}
                >
            <Text style={styles.buttonText}>Join</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.handleCancel()}
                >
            <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
        );
    };
    
};

const styles = StyleSheet.create({
    input : {
        backgroundColor: 'white',
        fontSize: 20,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: 250,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5
    },
    container: {
      flex: 1,
      backgroundColor: '#ededed',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#4286f4',
        width: 150,
        height: 40,
        borderRadius: 15,
        marginBottom: 10,
    },
    buttonText: {
        paddingTop: 7,
        fontSize: 20,
        color: 'white'
    }
  });
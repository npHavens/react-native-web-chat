import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';

export default class Prompt extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
         input: ''
        }
    }

    render () {
        const { handleConfirm, handleCancel, promptText, confirmText } = this.props;
        return (
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>{promptText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({ input: text })}
                autoFocus={true}
            />
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleConfirm(this.state.input)}
                >
                    <Text style={styles.buttonText}>{confirmText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleCancel()}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    };
    
};

const styles = StyleSheet.create({
    input : {
        padding: 10,
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
    buttonRow: {
        flexDirection: 'row'
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
        width: 100,
        height: 40,
        borderRadius: 15,
        margin: 10,
    },
    buttonText: {
        paddingTop: 7,
        fontSize: 20,
        color: 'white'
    }
  });
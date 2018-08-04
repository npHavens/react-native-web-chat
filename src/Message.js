import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default Message = ({ text, username }) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>{text}</Text>
            <Text>username: {username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 250,
        margin: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#c0d2e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        paddingBottom: 5
    }
});

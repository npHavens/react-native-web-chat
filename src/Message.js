import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default Message = ({ text, username }) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>{text}</Text>
            <Text style={{ fontSize: 18, color: '#424040' }}>username: {username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // width: 250,
        margin: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#c0d2e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 22,
        paddingBottom: 5,
        color: '#424040'
    }
});

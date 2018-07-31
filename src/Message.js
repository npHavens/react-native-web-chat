import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default Message = ({ text, username }) => {
    return (
        <View style={styles.container}> 
            <Text>{text}</Text>
            <Text>username: {username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#c0d2e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

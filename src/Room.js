import React from 'react';
import { View, StyleSheet, ScrollView, Text, Button, Modal } from 'react-native';

import { default as Message } from './Message';

export default Room = ({ room, messages, handleNewMessage }) => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>{room.toUpperCase()}</Text>
                { 
                    messages.map((msg, i) => {
                        return <Message {...msg} room={room} key={i}/>
                    })
                }
            </ScrollView>
            <Button style={styles.button}
                onPress={() => {
                    Modal.prompt(
                        'New Message',
                        'Enter message text',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            {
                                text: 'send',
                                onPress: (msgText) => {
                                    handleNewMessage({ 
                                        text: msgText,
                                        username: 'anonymous',
                                        room                          
                                    })
                                },
                            },
                        ]
                    );    
                }
                }
                title="New Message"
                color="#164882"
                accessibilityLabel="New Message"
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 50,
        fontSize: 26
    },
    container: {
        flex: 1,
        backgroundColor: '#ededed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        paddingBottom: 50
    }
});

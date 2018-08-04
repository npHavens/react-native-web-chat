import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';

import { default as Message } from './Message';
import { default as NewMessage } from './NewMessage';

export default class Room extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
         enteringMsg: false
        }
    }

    closePrompt = () => {
        this.setState({ enteringMsg: false });
    }

    render () {
        return (        
                this.state.enteringMsg ? 
                <NewMessage
                    handleSend={this.props.handleNewMessage}
                    closePrompt={this.closePrompt}
                /> :
                    <View style={styles.container}>
                        <ScrollView style={styles.scroll}> 
                            <Text style={styles.header}>{this.props.room.toUpperCase()}</Text>
                            { 
                                this.props.messages.map((msg, i) => {
                                    return <Message {...msg} room={this.props.room} key={i}/>
                                })
                            }
                        </ScrollView>  
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.setState({ enteringMsg: true })}
                            >
                            <Text style={styles.buttonText}>New Message</Text>
                        </TouchableOpacity>  
                    </View>            
                
           
        );
    }
    
}

const styles = StyleSheet.create({
    scroll: {
        flex: 0.8
    },
    header: {
        // position: 'absolute',
        // top: 50,
        textAlign: 'center',
        fontSize: 26
    },
    container: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#ededed',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#4286f4',
        width: 200,
        height: 40,
        borderRadius: 15,
        marginBottom: 25,
    },
    buttonText: {
        paddingTop: 7,
        fontSize: 20,
        color: 'white'
    }
});
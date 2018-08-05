import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Platform } from 'react-native';

import { default as Message } from './Message';
import { default as Prompt } from './Prompt';

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

    handleSend = (msgText) => {
        this.props.handleNewMessage({
            text: msgText,
            username: 'anonymous'
        });
        this.closePrompt();
    }

    render () {
        return (        
                this.state.enteringMsg ? 
                <Prompt
                    promptText="Enter message text"
                    confirmText="Send"
                    handleConfirm={this.handleSend}
                    handleCancel={this.closePrompt}
                /> :
                    <View style={styles.container}>
                        <View style={styles.topBar}>
                            <Text style={styles.title}>{this.props.room.toUpperCase()}</Text>
                        </View>   
                        <ScrollView    
                            style={Platform.OS !== 'web' && styles.nativeScroll}       
                            contentContainerStyle={Platform.OS === 'web' && styles.webScroll} 
                        >
                            {this.props.messages.map((msg, i) => {
                                return <Message {...msg} room={this.props.room} key={i}/>
                            })}
                    
                        </ScrollView>
                        <View style={styles.bottomBar}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({ enteringMsg: true })}
                            >
                                <Text style={styles.buttonText}>New Message</Text>
                            </TouchableOpacity>  
                        </View>
                    </View>             
                );
    }
    
}

const styles = StyleSheet.create({
    topBar: {
        paddingTop: 10,
        flex: 0.15,
        backgroundColor: '#4286f4',
        justifyContent: 'center' 
    },
    nativeScroll: {
        flex: 0.8,
        padding: 30
    },
    webScroll: {
       height: 400,
       padding: 30 
    },
    title: {
        color: '#ededed',
        textAlign: 'center',
        fontSize: 32
    },
    container: {
        flex: 1,
        backgroundColor: '#ededed',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#c0d2e8',
        width: 200,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center'

    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20
    },
    bottomBar: {
        padding: 20,
        flex: 0.1,
        backgroundColor: '#4286f4',
        // width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});
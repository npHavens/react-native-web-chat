import React from 'react';
import io from 'socket.io-client';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import { default as Room } from './Room';
import { default as JoinRoom } from './JoinRoom';

const socket = io('https://simple-socket-server.herokuapp.com/');
//const socket = io('https://socket-server.apps.us2.bosch-iot-cloud.com');


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room: '',
      joining: false,
      messages: [
        {
          text: 'test message',
          username: 'Nick'
        }
      ]
    }
  }

  componentWillMount() {
    socket.on('serverMsg', (data) => {
      this.handleServerMessage(data.msg)
    })
  }


  handleJoinRoom = (roomName) => {
    console.log('JOINING ROOM')
    this.setState({ room: roomName });
  } 

  handleCancel = () => {
    this.setState({ room: '', joining: false });
  }

  handleNewMessage = ({ text, username, room }) => {
    socket.emit('newMsg', { msg: { text, username}, room });
    console.log('SENDING NEW MESSAGE TO:', room); 
  }
  
  handleServerMessage = ({ text, username, room }) => {
    const currentMessages = this.state.messages;
    currentMessages.push({ text, username, room });
    this.setState({ messages: currentMessages });
  }

  render() {
    return (
      <View style={styles.container}>
      {this.state.room ? 
        <View>
          <Room {...this.state} handleNewMessage={this.handleNewMessage}/>
        </View> :
        this.state.joining ?
        <JoinRoom 
          handleJoinRoom={this.handleJoinRoom}
          handleCancel={this.handleCancel}
        /> :
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ joining: true })}
        >
        <Text> Join Room </Text>
        </TouchableOpacity>
      }
      </View>
    );
  }
}

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

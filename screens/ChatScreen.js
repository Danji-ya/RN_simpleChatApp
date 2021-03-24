import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, TextInput, View, YellowBox, Button, Platform, KeyboardAvoidingView } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
    //secret
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// 현재 issue 떄문에 
YellowBox.ignoreWarnings(['Setting a timer for a long period of time']);

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default function ChatScreen({route}) {
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        readUser()
        const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])

    const appendMessages = useCallback(
        (messages) => {
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        [messages]
    )

    const readUser = () => {
        const name = route.params.name;
        const _id = Math.random().toString(36).substring(7);
        const user = { _id, name };
        setUser(user);

        //debug
        console.log(user)
    }

    async function handleSend(messages) {
        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)
    }


    return (
      <View style={{ flex: 1 }}>
        <GiftedChat messages={messages} user={user} onSend={handleSend} />
        {
            Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
        }
      </View>
    )
}
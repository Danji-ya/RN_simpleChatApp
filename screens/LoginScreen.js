import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const LoginScreen = ({navigation}) => {

    return (
        <View>
            <Text>LoginScreen</Text>
            <TouchableOpacity
                style={{
                    backgroundColor:'red',
                }}
                onPress={ () => navigation.navigate("Chat",{

                })}
            >
                <Text>Click me</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
});

export default LoginScreen;
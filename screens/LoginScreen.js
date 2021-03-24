import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {icons, SIZES, FONTS, COLORS} from '../constants';

const LoginScreen = ({navigation}) => {

    const [name, setName] = useState("");



    return (
        <View style={styles.container}>
            <View style={styles.circle} />
            <View>
                <Image 
                    source={icons.chat_room}
                    resizeMode='contain'
                    style={{
                        width: 120,
                        height: 120,
                        alignSelf: 'center'
                    }}    
                />
            </View>
            <View style={{marginHorizontal: SIZES.padding * 3}}>
                <Text style={{...FONTS.h1, paddingTop: SIZES.padding * 2}}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="write your name"
                    onChangeText={ name => setName(name)}
                    value={name}
                />
            </View>
            <View style={{alignItems: 'flex-end', marginTop: SIZES.padding * 5}}>
                <TouchableOpacity
                    onPress={ () => navigation.navigate("Chat",{
                        name: name
                    })}
                >
                    <Image 
                        source={icons.next}
                        resizeMode='contain'
                        style={{
                            width: 70,
                            height: 70,
                            
                        }}    
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F7"
    },
    circle: {
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        left: -120,
        top: -20
    },
    input: {
        marginTop: SIZES.padding * 3,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: SIZES.padding,
        color: COLORS.black,
        fontWeight: "600"
    }
});

export default LoginScreen;
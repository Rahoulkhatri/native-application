import React from 'react'
import { View, Text, TextInput } from 'react-native'


const MyInput = (props) => {
  return (
    <View style={{marginTop:10}}>
    <Text>
        {props.title}
    </Text>
    <View style={{height:50,width:"100%", backgroundColor:"lightgray",borderRadius:10,borderColor:"gray",borderWidth:0.5,paddingHorizontal:10,marginTop:10}}>
        <TextInput  secureTextEntry={props.secureTextEntry} onChangeText={props.onChangeText} placeholder={props.placeholder} style={{ height:"100%", width: "100%"}}/>
    </View>
</View>
  )
}

export default MyInput
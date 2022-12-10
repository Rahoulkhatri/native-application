import React from 'react'
import { View, Text , FlatList, ImageBackground , TouchableOpacity,SafeAreaView} from 'react-native'
import {categroy} from '../../Data/DummyData'

const CategroyScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={{marginHorizontal : 5, marginTop:10}}>
    <FlatList
    data={categroy}
    keyExtractor={(item, index) => index.toString()}
    numColumns={2}
    renderItem={(itemData) =>{

        return(
          <TouchableOpacity onPress={() => {
            props.navigation.navigate("Meals", {
               CatId: itemData.item.id,
            });
          }} style={{height: 120, width:"45%", margin:5}}>
            <ImageBackground
             borderRadius={10}
             style={{ height:"100%",width:"100%",justifyContent:"flex-end" , overflow:"hidden"}}
            source={{uri:itemData.item.Image}}>
             
             <View style={{backgroundColor:"black",width:"100%", height:"100%",backgroundColor:"#00000052",borderRadius:20,justifyContent:"flex-end"}}> 
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold",textAlign:"center" }}>
                {itemData.item.name}
            </Text>
            </View>
                
                
                </ImageBackground> 
           



          </TouchableOpacity>

        )
        
    }}
    />



      </View>
    </SafeAreaView>
  )
}

export default CategroyScreen
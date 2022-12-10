import React from 'react'
import { View, Text , FlatList, ImageBackground, TouchableOpacity} from 'react-native'
import {AllMeals} from "../../Data/DummyData"


const AllMealsScreen = (props) => {
    const CatId = props.route.params.CatId;
    const MyMeals = AllMeals.filter((item) => item.CatId == CatId);
  return (
    <View>
      <FlatList
    data={MyMeals}
    keyExtractor={(item, index) => index.toString()}
    
    renderItem={(itemData) =>{

        return(
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate("MealsDetailsScreen",{
                mealsData: itemData.item,
            })
          }} style={{height: 100, width:"100%", margin:5,marginTop:10}}>
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
  )
}

export default AllMealsScreen
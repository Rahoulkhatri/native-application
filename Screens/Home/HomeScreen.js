import React from 'react'
import { View, Text , FlatList, ImageBackground } from 'react-native'


const HomeScreen = () => {
    const  Data =[
      {
      id: Math.random(),
      name:"rahoul",
      Image:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
      
      },
      {
        id: Math.random(),
        name:"ali",
        Image:"https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
     },
     {
         id: Math.random(),
         name:"kelash",
         Image:"https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"
     },
     {
         id: Math.random(),
         name:"tania",
         Image:"https://media.istockphoto.com/photos/hand-held-bbq-favorites-picture-id694189032?s=170667a"
     },
     
     {
        id: Math.random(),
        name:"neha",
        Image:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
     }
     ,
     
     {
        id: Math.random(),
        name:"neha",
        Image:"https://image.shutterstock.com/image-photo/bowl-buddha-buckwheat-pumpkin-chicken-260nw-1259570605.jpg"
     }
     


    ]
  return (
    <View style={{flex:1 , backgroundColor:"white" }}>
     <FlatList
     style={{marginTop:10}}
      keyExtractor={(item, index) => index.toString()}
      data={Data}
      renderItem={(itemData) => {
        return (
            <ImageBackground 
            resizeMode="cover"
            source={{uri:itemData.item.Image}} style={{ height:100,width:"97%",backgroundColor:"lightgray", marginBottom:10,borderRadius:10,marginHorizontal:10,justifyContent:"flex-end",alignItems:"center"}}>
             <View style={{backgroundColor:"black",width:"100%", height:"22%", justifyContent:"center",alignItems:"center",opacity:0.6,borderRadius:20}}> 
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
                {itemData.item.name}
            </Text>
            </View>


            </ImageBackground>

        )
        }}
     
     />
    </View>
  )
}

export default HomeScreen;
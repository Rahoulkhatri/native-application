import React from 'react'
import { View, Text, ScrollView,FlatList ,Dimensions,  Image} from 'react-native'
import Color from '../../Constant/Color';


const MealsDetailsScreen = (props) => {
    
    const MealsData = props.route.params.mealsData;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        data={MealsData.imagesUrl}
        renderItem={(itemData) => {
          return (
            <View
              style={{
                height: 150,
                width: Dimensions.get("screen").width - 30,

                marginHorizontal: 10,
                marginTop: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                borderRadius: 30,
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", borderRadius: 30 }}
                source={{ uri: itemData.item.image }}
              />
            </View>
          );
        }}
      />
      <View
        style={{
          width: "100%",

          paddingHorizontal: 10,
        }}
      >
        <View>
          <Text
            style={{
              marginVertical: 10,
              fontSize: 15,
              color:Color.primarycolor,
              fontWeight: "bold",
            }}
          >{`Time Duration`}</Text>

          <Text style={{ fontSize: 12, opacity: 0.7 }}>
            {MealsData.timeDuration}
          </Text>
        </View>
        <Text
          style={{
            marginVertical: 10,
            fontSize: 15,
            color:Color.primarycolor,
            fontWeight: "bold",
          }}
        >{`Steps To Make ${MealsData.name}`}</Text>

        <View style={{}}>
          {MealsData.steps.map((i) => {
            return (
              <View
                style={{
                  width: "100%",

                  marginBottom: 10,
                  padding: 5,
                }}
              >
                <Text
                  style={{
                    marginVertical: 5,
                    fontSize: 15,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {`* ${i.stepCount}`}
                </Text>
                <Text style={{ fontSize: 12, opacity: 0.7 }}>
                  {i.stepDescription}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
    
  )
}

export default MealsDetailsScreen
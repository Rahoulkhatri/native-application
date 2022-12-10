import React ,{ useEffect} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "../Screens/Auth/LoginScreen";
import HomeScreen from "../Screens/Home/HomeScreen";
import CategroyScreen from "../Screens/Home/CategroyScreen";
import SplashScreen from "../Screens/SplashScreen";
import AllMealsScreen from "../Screens/Home/AllMealsScreen";
import MealsDetailsScreen from "../Screens/Home/MealsDetailsScreen";


const Stack = createStackNavigator();
const Navigation =()=>{
    return(
 <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="cate" component={CategroyScreen}/>
        <Stack.Screen name="Meals" component={AllMealsScreen}/>
        <Stack.Screen name="MealsDetailsScreen" component={MealsDetailsScreen}/>
        
         

    </Stack.Navigator>
 </NavigationContainer>



    )
}
export default Navigation;
// Routing
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { StatusBar } from 'expo-status-bar';

// React native
import { Button, StyleSheet, Text, View } from 'react-native';

// ButtonCounter, AppText
import ButtonCounter from './src/component/ButtonCounter'
import AppText from './src/component/AppText';

// CREATE
// Create Native Stack
const Stack = createNativeStackNavigator();

//FUNCTION
// 1.YOL
// const App = () => { }
// 2.YOL
 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Anasayfa" }} />
        <Stack.Screen name="HomeOther" component={HomeOther} options={{ title: "Home Other" }} />
        <Stack.Screen name="Counter" component={ButtonCounter} options={{ title: "Başlık Alanı" }} />
        <Stack.Screen name="AppText" component={AppText} options={{ title: "App Text Alanı" }} />
        <Stack.Screen name="MyProfile" component={ProfileScreen} options={{ title: "Profile Alanı" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ProfileScreen
const ProfileScreen = ({ navigation,route }) => {
  return <Text> Profilime sayfama Hoş geldiniz {route.params.name}  </Text>
}

// HomeOther
const HomeOther = ({ navigation }) => {
  return <Text> Home Other Page</Text>
}

// HomeScreen
const HomeScreen = ({ navigation }) => {
  return (
    <View>

      {/* Counter */}
      <View style={{ marginBottom: 10 }}>
        <Button
          color='orange'
          title='Counter'
          onPress={() => navigation.navigate('Counter', { name: 'Counter' })} />
      </View>

      {/* HomeOther */}
      <View style={{ marginBottom: 10 }}>
        <Button
          title="HomeOther"
          color='red'
          onPress={() => navigation.navigate('HomeOther', { name: 'HomeOther' })} />
      </View>

      {/* AppText */}
      <Button
        title='App Text'
        onPress={() => navigation.navigate('AppText', { name: 'App Text' })} />

      {/* MyProfile */}
      <Button
        title='Profile'
        onPress={() => navigation.navigate('MyProfile', { name: 'Malatya' })} />

    </View> // common View
  ); //end return 
} //end HomeScreen


// EXPORT
export default App;
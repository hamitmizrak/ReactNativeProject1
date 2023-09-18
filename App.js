import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import {Button, Text, View} from 'react-native';
import ButtonCounter from './src/component/ButtonCounter';
import AppText from './src/component/AppText';

// CREATE NAVIGATOR
const Stack = createNativeStackNavigator();

// STACK SCREEN
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Başlık'}}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile Screen'}}/>
                <Stack.Screen name="AppText" component={AppText} options={{title: 'App Text 99'}}/>
                <Stack.Screen name="Counter" component={ButtonCounter} options={{title: 'Button Counter 77'}}/>
                <Stack.Screen name="HomeOther" component={Home} options={{title: 'Home 33'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// PROFILE
const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};


// HOME
const HomeScreen = ({navigation}) => {
    return (
        <View>
            {/* <Button title='Geri' onPress={()=> navigation.goBack()}/> */}

          {/*  Button HomeOther */}
            <View style={{marginBottom: 20}}>
                <Button
                    title="Home"
                    onPress={() =>
                        navigation.navigate('HomeOther', {name: 'Home'})
                    }
                />
            </View>

            {/*  Button Counter */}
            <Button
                title="Counter"
                onPress={() =>
                    navigation.navigate('Counter', {name: 'Counter'})
                }
            />

            {/*  Button HomeOther */}
            <Button
                title="Profile"
                onPress={() =>
                    navigation.navigate('AppText', {name: 'App Text'})
                }
            />

            {/*  Button HomeOther */}
            <Button
                title="Hamit Mızrak"
                onPress={() =>
                    navigation.navigate('Profile', {name: 'Jane'})
                }
            />
        </View>
    );
};

// EXPORT
export default App;
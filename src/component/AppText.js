import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

//FUNCTION
export default function AppText() {
  return (
    <View style={styles.container}>
      <Text>Merhabalar Nasılsın</Text>
      <StatusBar style="auto" />
      {/* <Button title='Geri' onPress={()=> navigation.goBack()}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex-start:sol
    // flex-end: sağ
    // center
    flex: 1,
    alignItems: 'center',     // satır düzleminde
    justifyContent: 'center', // sutun düzleminde
    backgroundColor: '#fff',      
  },
});

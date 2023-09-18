import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//FUNCTION
export default function AppText() {
  return (
    <View style={styles.container}>
      <Text>Merhabalar</Text>
      <StatusBar style="auto" />
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

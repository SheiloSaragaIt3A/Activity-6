import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Accounts from './src/accounts';
import Users from './src/users';
import Students from './src/students';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Accounts/>
               
          <Users/> 
            
          <Students/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  }
});

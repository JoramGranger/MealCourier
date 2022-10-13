import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList} from 'react-native';
import orders from './assets/data/orders.json';
import OrderItem from './src/components/OrderItem';
import OrdersScreen from './src/screens/OrdersScreen';
import OrderDelivery from './src/screens/OrderDelivery';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';

const order = orders[0];

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.container}>
          <Navigation />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* alignItems: 'center', */
   justifyContent: 'center',
   paddingTop: 50,
  },
});

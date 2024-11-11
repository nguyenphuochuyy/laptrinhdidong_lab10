import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Started1 from "./screens/started1"
import Screen2 from './screens/Screen2';
import { Provider } from 'react-redux';
import store from "./store"
import AddProductScreen from './screens/addproduct';
import ProductDetailScreen from './screens/detail';
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
    <Stack.Navigator initialRouteName="Started1">
      <Stack.Screen
        name="Started1"
        component={Started1}
        options={({ navigation }) => ({
          title: 'Bike Shop',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddProduct')}
              title="Add Product"
              color="#000"
            />
          ),
        })}

      />
         <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerShown: false }}
      />
        <Stack.Screen
            name="AddProduct"
            component={AddProductScreen}
            options={{ title: 'Add New Product' }}
          />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
    </Stack.Navigator>
  </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

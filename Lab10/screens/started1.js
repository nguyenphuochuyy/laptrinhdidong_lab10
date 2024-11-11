import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import logo from "../assets/started1.png"
const Started1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        A premium online store for sporter and their stylish choice
      </Text>
      
      <View style={styles.imageContainer}>
        <Image
          source={logo} // Replace with your image URL
          style={styles.bikeImage}
        />
      </View>
      
      <Text style={styles.shopTitle}>POWER BIKE SHOP</Text>
      
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Screen2')}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 20,
    backgroundColor: '#FADADD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bikeImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  shopTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Started1;

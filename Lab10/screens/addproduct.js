import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../productSlice';

const AddProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { status } = useSelector((state) => state.products);

  const handleAddProduct = () => {
    if (!name || !price) {
      alert('Please fill all fields');
      return;
    }
 
      const defaultImageUrl = 'https://huyyyy.sirv.com/Images/item4.png';
     
      dispatch(addProduct({ name, price: parseFloat(price), img: defaultImageUrl , category : 'Mountain'})).then(() => {
        navigation.navigate('Screen2');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter product name"
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />

    

      {status === 'loading' ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Add Product" onPress={handleAddProduct} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default AddProductScreen;

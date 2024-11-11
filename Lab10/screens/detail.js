import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  // Calculate discount percentage and discounted price
  const discountPercentage = 15; // Example discount percentage
  const originalPrice = product.price;
  const discountedPrice = (originalPrice * (100 - discountPercentage)) / 100;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.img }} style={styles.image} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.discountText}>{discountPercentage}% OFF | ${originalPrice}</Text>
        <Text style={styles.price}>${discountedPrice.toFixed(2)}</Text>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
        It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#FADADD',
    marginBottom: 20,
    borderRadius: 10,
  },
  infoContainer: {
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discountText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 15,
  
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;

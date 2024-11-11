import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Screen2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Roadbike', 'Mountain'];
  const bikes = [
    { id: '1', name: 'Pinarello', price: 1800, image:  require('../assets/item1.png'), category: 'All' },
    { id: '2', name: 'Pina Mountai', price: 1700, image: require('../assets/item2.png'), category: 'Mountain' },
    { id: '3', name: 'Pina Bike', price: 1500, image: require('../assets/item3.png'), category: 'Roadbike' },
    { id: '4', name: 'Pinarello', price: 1900, image: require('../assets/item4.png'), category: 'Roadbike' },
    { id: '5', name: 'Pinarello', price: 2700, image: require('../assets/item3.png'), category: 'Mountain' },
    { id: '6', name: 'Pinarello', price: 1350, image:require('../assets/item4.png'), category: 'All' },
  ];

  const filteredBikes = selectedCategory === 'All' ? bikes : bikes.filter(bike => bike.category === selectedCategory);

  const renderBikeItem = ({ item }) => (
    <View style={styles.bikeCard}>
      <Image source={item.image} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>${item.price}</Text>
      <TouchableOpacity style={styles.favoriteIcon}>
        <Text>♡</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>The world's Best Bike</Text>
      
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredBikes}
        renderItem={renderBikeItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.bikeList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedCategory: {
    backgroundColor: '#D32F2F',
  },
  categoryText: {
    color: '#333',
  },
  bikeList: {
    paddingBottom: 20,
  },
  bikeCard: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    position: 'relative',
  },
  bikeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  bikePrice: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
});

export default Screen2;

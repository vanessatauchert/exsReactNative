import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const ads = [
    {
      title: 'Anúncio 1',
      description: 'O pet perfeito',
      image: 'https://picsum.photos/id/237/200/300',
      product: 'Cachorro Preto',
    },
    {
      title: 'Anúncio 2',
      description: 'Cidade Maravilhosa',
      image: 'https://picsum.photos/id/238/200/300',
      product: 'Cidade São Paulo',
    },
    {
      title: 'Anúncio 3',
      description: 'Confira as flores do verão',
      image: 'https://picsum.photos/id/239/200/300',
      product: 'Flores',
    },
    {
      title: 'Anúncio 4',
      description: 'Veja as novas cores de tinta',
      image: 'https://picsum.photos/id/240/200/300',
      product: 'Tinta cinza',
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {ads.map((ad, index) => (
        <View key={index} style={styles.adContainer}>
          <Image source={{ uri: ad.image }} style={styles.adImage} />
          <View style={styles.adTextContainer}>
            <Text style={styles.adTitle}>{ad.title}</Text>
            <Text style={styles.adProduct}>{ad.product}</Text>
            <Text style={styles.adDescription}>{ad.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  adContainer: {
    width: 250,
    height: 300,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  adImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  adTextContainer: {
    flex: 1,
  },
  adTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  adProduct: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  adDescription: {
    fontSize: 16,
  },
});
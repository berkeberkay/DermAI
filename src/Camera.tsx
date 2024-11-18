import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Camera = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Sağ üstteki çarpı butonu */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Image 
          source={require('./assets/close_asset.png')}
          style={{ width: 50, height: 50 }}/>
      </TouchableOpacity>

      <Text style={styles.title}>Kamera</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', // Açık mavi arka plan rengi
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1, // Diğer bileşenlerin üzerine gelmesi için z-index ayarı
  },
});

export default Camera;

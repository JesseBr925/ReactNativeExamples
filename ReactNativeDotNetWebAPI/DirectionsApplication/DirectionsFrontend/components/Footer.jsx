import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Directions App</Text>
      <View style={styles.linksContainer}>
        <Text style={styles.link}>About</Text>
        <Text style={styles.link}>Contact</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#183059',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop:15,
    justifyContent: 'center'
  },
  appName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'center'
  },
  link: {
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 10,
    justifyContent: 'center'
  },
});

export default Footer;
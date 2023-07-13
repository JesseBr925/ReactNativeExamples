import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderNavigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        <Text style={styles.link}>Home</Text>
        <Text style={styles.link}>About</Text>
        <Text style={styles.link}>Contact</Text>
      </View>
      <Text style={styles.appName}>Directions App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#183059',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  appName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  link: {
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 10,
  },
});

export default HeaderNavigation;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapCard from "./MapCard";

const AddressCard = ({ address }) => {
  return (

    <View style={styles.container}>
      <View style={styles.container}>
        <MapCard style = {styles.mapSizer}></MapCard>
      </View>

      <Text style={styles.text}>{address.address1}</Text>
      {address.address2 != '' ? <Text style={styles.text}>{address.address2}</Text> : null}
      <Text style={styles.text}>{address.city} {address.state} {address.zipcode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 2,
    padding: 5,
    borderRadius: 3,
    backgroundColor: '#183059', // dark blue
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  text: {
    fontSize: 14,
    color: '#ffffff', // white
  },
  header: {
    fontSize: 20,
    color: '#ffffff', // white
  },
  mapSizer:{
    height: '.5',
    width: '.5'
  }
});

export default AddressCard;
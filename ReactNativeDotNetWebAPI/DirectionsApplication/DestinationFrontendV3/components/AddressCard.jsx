import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import DisplayLatLng from "./DisplayLatLng";
import MapView, { Marker, MAP_TYPES, PROVIDER_DEFAULT } from 'react-native-maps';
const AddressCard = ({ address }) => {
  const { width, height } = Dimensions.get('window');

  const ASPECT_RATIO = width / height;
  const LATITUDE = parseFloat(address.latitude);
  const LONGITUDE = parseFloat(address.longitude);
  const LATITUDE_DELTA = 0.05;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


  const [region, setRegion] = useState({
    latitude: address.latitude,
    longitude: address.longitude,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  });

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <MapView
          provider={PROVIDER_DEFAULT}
          mapType={MAP_TYPES.SATELLITE}
          style={{ height: 300, width: 300, margin: 10, padding: 10 }}
          initialRegion={{
            latitude: address.latitude,
            longitude: address.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        >
          <Marker
            coordinate={{
              latitude: address.latitude,
              longitude: address.longitude,
            }}
          />
        </MapView>
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
  }
});

export default AddressCard;

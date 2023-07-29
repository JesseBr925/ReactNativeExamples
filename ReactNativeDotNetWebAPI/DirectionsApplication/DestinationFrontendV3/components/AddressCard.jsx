import React, { useState } from 'react';
import { View, Text,Button, StyleSheet, Dimensions} from 'react-native';
import DisplayLatLng from "./DisplayLatLng";
import MapView, { MAP_TYPES, PROVIDER_DEFAULT } from 'react-native-maps';

const AddressCard = ({ address }) => {
  const {width, height} = Dimensions.get('window');

  const ASPECT_RATIO = width / height;
  const LATITUDE = parseFloat(address.latitude);
  const LONGITUDE = parseFloat(address.longitude);
  const LATITUDE_DELTA = 0.05;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


  const [region, setRegion] = useState({
    latitude: 90,
    longitude: 30,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  });

  return (
    <View style={styles.container}>
      <View>
        <MapView
          provider={PROVIDER_DEFAULT}
          mapType={MAP_TYPES.SATELLITE}
          style={{ height: 300, width: 300, margin: 10, padding: 10 }}
          initialRegion={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        />
      </View>

      <Text style={styles.text}>{address.address1}</Text>
      {address.address2 != '' ? <Text style={styles.text}>{address.address2}</Text> : null}
      <Text style={styles.text}>{address.city} {address.state} {address.zipcode}</Text>
      <Text style={styles.text}>{region.latitude}, {region.longitude}</Text>

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

import React, { useState } from 'react';
import {View, ScrollView, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import AddressCard from './AddressCard';

const AddressList = () => {
  const [addresses, setAddresses] = useState([]);

  const fetchAddresses = async () => {
    try {
      let response = await axios.get('http://10.0.2.2:5020/api/addresses');
      setAddresses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Get Addresses" onPress={fetchAddresses} />
      <ScrollView>
        {addresses.map((address, index) => (
          <AddressCard key={index} address={address} />
        ))}
      </ScrollView>
    </View>
  );
}

export default AddressList;
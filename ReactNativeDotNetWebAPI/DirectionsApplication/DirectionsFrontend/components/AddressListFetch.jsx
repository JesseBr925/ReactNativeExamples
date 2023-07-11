import React, { useState } from 'react';
import { View, ScrollView, Button } from 'react-native';
import AddressCard from './AddressCard';

const AddressList = () => {
  const [addresses, setAddresses] = useState([]);

  const fetchAddresses = async () => {
    try {
      let response = await fetch('http://localhost:5000/api/addresses');
      let json = await response.json();
      setAddresses(json);
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
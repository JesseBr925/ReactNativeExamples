import React, { useState } from 'react';
import { View, ScrollView, Button, StyleSheet, Platform } from 'react-native';
import axios from 'axios';
import AddressCard from './AddressCard';


const AddressList = () => {
  const [addresses, setAddresses] = useState([]);

  const fetchAddresses = async () => {

    try {
      if (Platform.OS == 'ios') {
        let response = await axios.get('http://127.0.0.1:5020/api/addresses');
        setAddresses(response.data);


      }
      else {
        let response = await axios.get('http://10.0.2.2:5020/api/addresses');
        setAddresses(response.data);
      }


    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style = {{padding:10}}>
      <Button style= {{padding:15}} title="Get Addresses" onPress={fetchAddresses} />

      {addresses.map((address, index) => (
        <AddressCard key={index} address={address} />
      ))}

    </View>
  );
}

export default AddressList;
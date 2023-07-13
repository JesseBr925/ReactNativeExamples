import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AddressCard from './AddressCard';

const AddressListStatic = () => {
  const [addresses, setAddresses] = useState([
    {
      "street1": "123 Main St",
      "street2": "Apt 4B",
      "city": "Anytown",
      "state": "Anystate",
      "country": "AnyCountry",
      "zipcode": "12345"
    },
    {
      "street1": "456 Maple Dr",
      "street2": "",
      "city": "Othertown",
      "state": "Otherstate",
      "country": "OtherCountry",
      "zipcode": "67890"
    },
    {
        "street1": "789 Oak Rd",
        "street2": "",
        "city": "Elsetown",
        "state": "Elsetate",
        "country": "Elsecountry",
        "zipcode": "34567"
    },
    {
        "street1": "135 Elm Blvd",
        "street2": "Appt 2503",
        "city": "Anothertown",
        "state": "Anotherstate",
        "country": "AnotherCountry",
        "zipcode": "12678"
    }

  ]);

  return (
    <ScrollView>
      <View>
        {addresses.map((address, index) => (
          <AddressCard key={index} address={address} />
        ))}
      </View>
    </ScrollView>
  );
}

export default AddressListStatic;
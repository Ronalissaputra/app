import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const BayiForm = ({route}) => {
  const {uuid} = route.params;
  const {setBy} = route.params;
  useEffect(() => {
    setBy(false);
  }, []);
  return (
    <View>
      <Text>{uuid}</Text>
    </View>
  );
};

export default BayiForm;

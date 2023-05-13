import {View, Text} from 'react-native';
import React from 'react';

const LabelComp = props => {
  return (
    <View className="w-full py-4 flex justify-center items-center bg-white">
      <Text className="text-xl">{props.children}</Text>
    </View>
  );
};

export default LabelComp;

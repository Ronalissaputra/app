import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGettokendecoded} from '../../features/authintence';

const HeaderComp = () => {
  const navigation = useNavigation();
  const {data} = useGettokendecoded();

  return (
    <View className="h-[100px] flex-row justify-between items-center bg-transparent">
      <Text className="text-xl">{data && data.decoded.name}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfilComp')}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-300">
        <Text className="text-3xl text-white">
          {data && data.decoded.name[0].toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComp;

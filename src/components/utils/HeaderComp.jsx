import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGetme} from '../../features/authintence';

const HeaderComp = () => {
  const navigation = useNavigation();
  const {data} = useGetme();

  return (
    <View className="h-[100px] flex-row justify-between items-center bg-transparent">
      <Text className="text-xl">{data && data.nama}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfilComp')}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-300">
        <Text className="text-3xl text-white">
          {data && data.nama[0].toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComp;

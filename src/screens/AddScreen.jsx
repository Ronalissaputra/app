import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {HeaderComp} from '../components/utils';

const AddScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 min-h-screen justify-center mx-2">
      <ScrollView>
        <HeaderComp />
        <View className="flex-row w-full justify-around space-x-5">
          <LinearGradient
            colors={['#c471ed', '#f64f59']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            className="flex-1 items-center justify-between w-full h-[200px] space-x-2 py-10 my-2 rounded-md">
            <TouchableOpacity
              onPress={() => navigation.navigate('IbuhamilForm')}>
              <View className="flex items-center">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon2 name="mother-heart" size={50} color="white" />
                </View>
                <View className="flex">
                  <Text className="text-2xl text-slate-50">Tambah</Text>
                  <Text className="text-xl text-slate-50">Ibu hamil</Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#c471ed', '#f64f59']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            className="flex-1 items-center justify-between w-full h-[200px] space-x-2 py-10 my-2 rounded-md">
            <TouchableOpacity
              onPress={() => navigation.navigate('BayilahirForm')}>
              <View className="flex items-center">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon2 name="mother-nurse" size={50} color="white" />
                </View>
                <View className="flex items-center justify-center">
                  <Text className="text-2xl text-slate-50">Tambah</Text>
                  <Text className="text-xl text-slate-50">Bayi baru lahir</Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({});

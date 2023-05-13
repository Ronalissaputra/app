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
import Icon3 from 'react-native-vector-icons/Entypo';

// components imported
import {ArtikelComp, HeaderComp, TitleComp} from '../components/utils';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="mx-2">
      <ScrollView>
        <HeaderComp />
        <View className="flex-row w-full justify-around space-x-5">
          <LinearGradient
            colors={['#c471ed', '#f64f59']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            className="flex-1 shadow-inner items-center justify-between w-full h-[200px] space-x-2 py-10 my-2 rounded-md">
            <TouchableOpacity
              onPress={() => navigation.navigate('IbuhamilMenu')}>
              <View className="flex items-center">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon2 name="mother-heart" size={50} color="white" />
                </View>
                <View className="flex">
                  <Text className="text-2xl text-slate-50 border-b-2 border-white">
                    Ibu hamil
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#c471ed', '#f64f59']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            className="flex-1 items-center justify-between w-full h-[200px] space-x-2 py-10 my-2 rounded-md">
            <TouchableOpacity onPress={() => navigation.navigate('AnakkuMenu')}>
              <View className="flex items-center">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon2 name="mother-nurse" size={50} color="white" />
                </View>
                <View className="flex">
                  <Text className="text-2xl text-slate-50 border-b-2 border-white">
                    Anak
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View className="flex-row w-full justify-around space-x-5">
          <LinearGradient
            colors={['#c471ed', '#f64f59']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            className="flex-1 items-center justify-between w-full h-[200px] space-x-2 py-10 my-2 rounded-md">
            <TouchableOpacity
              onPress={() => navigation.navigate('IbunifasMenu')}>
              <View className="flex items-center">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon3 name="heart" size={50} color="white" />
                </View>
                <View className="flex">
                  <Text className="text-2xl text-slate-50 border-b-2 border-white">
                    Ibu nifas
                  </Text>
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
              onPress={() => navigation.navigate('BeresikoMenu')}>
              <View className="flex items-center">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon3 name="heart" size={50} color="white" />
                </View>
                <View className="flex">
                  <Text className="text-2xl text-slate-50 border-b-2 border-white">
                    Beresiko
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View className="mt-5">
          <TitleComp>edukasi kesehatan</TitleComp>
          <ArtikelComp />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

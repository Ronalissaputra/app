import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';

// component imported
import {HeaderComp} from '../components/utils';
import {
  BayiModal,
  KehamilanModal,
  NifasModal,
  PersalinanModal,
} from '../components/modals';
import {useGetusermutate} from '../features/userintence';

const MonitoringScreen = () => {
  const [km, setKm] = useState(false);
  const [nf, setNf] = useState(false);
  const [ps, setPs] = useState(false);
  const [by, setBy] = useState(false);
  const {mutate} = useGetusermutate();
  useEffect(() => {
    mutate();
  }, []);
  return (
    <SafeAreaView
      className={`${
        km || nf || ps || by ? 'bg-slate-300' : null
      } flex-1 min-h-screen justify-center`}>
      <ScrollView className="mx-2">
        <HeaderComp />
        <View className="flex-row w-full justify-around space-x-5">
          <LinearGradient
            colors={['#c471ed', '#f64f59']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            className="flex-1 items-center justify-between w-full h-[200px] space-x-2 py-2 my-2 rounded-md">
            <TouchableOpacity onPress={() => setKm(!km)}>
              <View className="flex items-center px-2">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon2 name="mother-heart" size={50} color="white" />
                </View>
                <View className="flex">
                  <Text className="text-2xl text-slate-50">Pemantauan</Text>
                  <Text className="text-xl text-slate-50">
                    Masa Kehamilan ibu hamil
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#c471ed', '#f64f59']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            className="flex-1 items-center justify-between w-full h-[200px] space-x-2 py-2 my-2 rounded-md">
            <TouchableOpacity onPress={() => setNf(!nf)}>
              <View className="flex items-center px-2">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon2 name="mother-nurse" size={50} color="white" />
                </View>
                <View className="flex">
                  <Text className="text-2xl text-slate-50">Pemantauan</Text>
                  <Text className="text-xl text-slate-50">
                    Masa nifas setelah melahirkan
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
            className="flex-1 items-center justify-between w-full h-[200px] space-x-2 py-2 my-2 rounded-md">
            <TouchableOpacity onPress={() => setPs(!ps)}>
              <View className="flex items-center px-2">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon3 name="heart" size={50} color="white" />
                </View>
                <View className="flex">
                  <Text className="text-2xl text-slate-50">Pemantauan</Text>
                  <Text className="text-xl text-slate-50">
                    Masa persalinan ibu hamil
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#c471ed', '#f64f59']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            className="flex-1 items-center justify-between w-full h-[200px] space-x-2 py-2 my-2 rounded-md">
            <TouchableOpacity onPress={() => setBy(!by)}>
              <View className="flex items-center px-2">
                <View className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                  <Icon3 name="heart" size={50} color="white" />
                </View>
                <View className="flex">
                  <Text className="text-2xl text-slate-50">Pemantauan</Text>
                  <Text className="text-xl text-slate-50">Bayi baru lahir</Text>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
      <KehamilanModal km={km} setKm={setKm} />
      <NifasModal nf={nf} setNf={setNf} />
      <PersalinanModal ps={ps} setPs={setPs} />
      <BayiModal by={by} setBy={setBy} />
    </SafeAreaView>
  );
};

export default MonitoringScreen;

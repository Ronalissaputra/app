import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useGetusermutate} from '../../features/userintence';

const NifasModal = ({nf, setNf}) => {
  const navigation = useNavigation();
  const {mutate, data: kunjungan} = useGetusermutate();
  useEffect(() => {
    mutate();
  }, []);
  return (
    <View className="flex justify-end">
      <Modal animationType="slide" transparent={true} visible={nf}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            height: 10,
            overflow: 'hidden',
          }}>
          <View className="rounded-t-2xl px-4 shadow-xl bg-white h-80">
            <ScrollView>
              <View className="mt-2 flex-row items-center justify-center">
                <TouchableOpacity
                  onPress={() => setNf(!nf)}
                  className="absolute right-0 top-0">
                  <Icon name="ios-close" size={28} color="black" />
                </TouchableOpacity>
                <View className="my-5" />
              </View>
              {kunjungan && kunjungan.length > 0 ? (
                <>
                  {kunjungan &&
                    kunjungan.map(kunjung => (
                      <View key={kunjung.id} className="mb-2 flex items-center">
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('NifasForm', {
                              id: `${kunjung.id}`,
                              nama_ibu: `${kunjung.nama_ibu}`,
                              setNf: setNf,
                            })
                          }
                          className="w-full rounded-lg">
                          <View className="flex-row space-x-3">
                            <Text className="text-2xl text-gray-800">
                              {kunjung.nama_ibu}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <View className="border w-full border-slate-200 my-2" />
                      </View>
                    ))}
                </>
              ) : (
                <>
                  <View className="w-auto h-auto bg-white flex items-center justify-center">
                    <Image
                      source={require('../../assets/notdata.png')}
                      className="w-12 h-12"
                    />
                    <Text className="text-2xl text-[#F64F59]">
                      Belum ada data!
                    </Text>
                  </View>
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NifasModal;

import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useLogout} from '../../features/authintence';
import {useNavigation} from '@react-navigation/native';
import {useGetme} from '../../features/authintence';

const ProfileComp = () => {
  const navigation = useNavigation();
  const {data} = useGetme();
  const {mutate, isSuccess} = useLogout();

  const Logout = async () => {
    await mutate();
  };

  return (
    <SafeAreaView className="w-full min-h-screen">
      {isSuccess && navigation.navigate('AuthStacknavigation')}
      <LinearGradient
        colors={['#c471ed', '#f64f59']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className="w-full h-[40%] bg-indigo-700 flex items-center justify-center">
        <View className="flex items-center justify-center">
          <View className="border border-slate-300 w-32 p-2 h-32 rounded-full">
            <View className="w-28 p-2 h-28 rounded-full flex items-center justify-center bg-slate-300">
              <Text className="text-[40px] text-white">
                {data && data.nama[0].toUpperCase()}
              </Text>
            </View>
          </View>
          <Text className="text-2xl mt-2 text-slate-50">
            {data && data.nama}
          </Text>
        </View>
      </LinearGradient>
      <View className="w-full h-[60%]">
        <View className="mx-4 mt-10 h-full relative">
          <View>
            <Text className="text-xl">email</Text>
            <Text className="text-[23px]">{data && data.email}</Text>
          </View>
          <View className="border-slate-400 border my-2" />
          <View>
            <Text className="text-xl">Nomor Handphone</Text>
            {data.no_hp ? (
              <Text className="text-[23px]">{data && data.no_hp}</Text>
            ) : (
              <Text className="text-lg text-red-500">Lengkapi data anda</Text>
            )}
          </View>
          <View className="border-slate-400 border my-2" />
          <View>
            <Text className="text-xl">Program studi</Text>
            {data.no_hp ? (
              <Text className="text-[23px]">{data && data.prodi}</Text>
            ) : (
              <Text className="text-lg text-red-500">Lengkapi data anda</Text>
            )}
          </View>
          <View className="border-slate-400 border my-2" />
          <View className="flex-row w-full space-x-2 bottom-12 absolute">
            <LinearGradient
              colors={['#c471ed', '#f64f59']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              className="bg-slate-600 p-5 rounded-md items-center flex-1">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProfileForm', {
                    uuid: `${data && data.uuid}`,
                    nama: `${data && data.nama}`,
                    umur: `${data && data.umur}`,
                    prodi: `${data && data.prodi}`,
                    semester: `${data && data.semester}`,
                    no_hp: `${data && data.no_hp}`,
                    alamat: `${data && data.alamat}`,
                    email: `${data && data.email}`,
                  })
                }
                className="w-full h-full flex-1 items-center">
                <Text className="text-2xl text-slate-50">Ubah</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#c471ed', '#f64f59']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              className="bg-slate-600 p-5 rounded-md items-center flex-1">
              <TouchableOpacity
                onPress={() => Logout()}
                className="w-full h-full flex-1 items-center">
                <Text className="text-2xl text-slate-50">Keluar</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileComp;

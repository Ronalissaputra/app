import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import {LabelComp} from '../utils';

const PersalinanForm = ({route}) => {
  const {setPs, nama_ibu} = route.params;
  useEffect(() => {
    setPs(false);
  }, []);
  return (
    <SafeAreaView className="h-auto">
      <ScrollView stickyHeaderIndices={[0]}>
        <LabelComp>{nama_ibu.toUpperCase()}</LabelComp>
        <View className="mx-2">
          <Formik>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <View>
                  <Text className="text-xl mb-1">Nama</Text>
                  <TextInput
                    placeholder="nama"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nik</Text>
                  <TextInput
                    placeholder="nik"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Umur</Text>
                  <TextInput
                    placeholder="umur"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Lama Nikah</Text>
                  <TextInput
                    placeholder="lama nikah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Suku</Text>
                  <TextInput
                    placeholder="suku"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Agama</Text>
                  <TextInput
                    placeholder="agama"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Pendidikan</Text>
                  <TextInput
                    placeholder="pendidikan"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Pekerjaan</Text>
                  <TextInput
                    placeholder="pekerjaan"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Alamat</Text>
                  <TextInput
                    placeholder="alamat"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nomor handphone</Text>
                  <TextInput
                    placeholder="nomor handphone"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Golongan darah</Text>
                  <TextInput
                    placeholder="golongan darah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nomor bpjs</Text>
                  <TextInput
                    placeholder="nomor bpjs"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tempat periksa</Text>
                  <TextInput
                    placeholder="tempat periksa"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nama suami</Text>
                  <TextInput
                    placeholder="nama suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Umur suami</Text>
                  <TextInput
                    placeholder="umur suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Agama suami</Text>
                  <TextInput
                    placeholder="agama suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Suku suami</Text>
                  <TextInput
                    placeholder="suku suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Pendidikan suami</Text>
                  <TextInput
                    placeholder="pendidikan suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Pekerjaan suami</Text>
                  <TextInput
                    placeholder="pekerjaan suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Alamat suami</Text>
                  <TextInput
                    placeholder="alamat suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nomor Hp suami</Text>
                  <TextInput
                    placeholder="nomor hp suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Password user</Text>
                  <TextInput
                    placeholder="password user"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <LinearGradient
                  colors={['#c471ed', '#f64f59']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  className="my-4 rounded-md">
                  <TouchableOpacity className="w-full p-2 py-4 px-4 flex items-center justify-center">
                    <Text className="text-slate-50 text-2xl">Simpan</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersalinanForm;

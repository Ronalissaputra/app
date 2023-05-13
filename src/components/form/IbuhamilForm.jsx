import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import {LabelComp, SpinloadComp} from '../utils';
import {useCreateuser} from '../../features/userintence';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const IbuhamilForm = () => {
  const navigation = useNavigation();
  const {mutate, isSuccess, isLoading} = useCreateuser();

  const initialValues = {
    nama_ibu: '',
    nik: '',
    umur: '',
    lama_nikah: '',
    suku: '',
    agama: '',
    pendidikan: '',
    pekerjaan: '',
    alamat: '',
    no_hp: '',
    gol_darah: '',
    no_bpjs: '',
    tempat_periksa: '',
    nama_suami: '',
    umur_suami: '',
    agama_suami: '',
    suku_suami: '',
    pendidikan_suami: '',
    pekerjaan_suami: '',
    alamat_suami: '',
    no_hpsuami: '',
    password: '',
    confPassword: '',
    role: 'user',
  };

  const onSubmit = async (values, {resetForm}) => {
    await mutate(values);
    resetForm({values: initialValues});
  };

  return (
    <SafeAreaView className="h-auto">
      {isSuccess && navigation.navigate('IbuhamilMenu')}
      {isLoading && <SpinloadComp />}
      <ScrollView stickyHeaderIndices={[0]}>
        <LabelComp>TAMBAH IBU HAMIL</LabelComp>
        <View className="mx-2">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <View>
                  <Text className="text-xl mb-1">Nama</Text>
                  <TextInput
                    onChangeText={handleChange('nama_ibu')}
                    onBlur={handleBlur('nama_ibu')}
                    value={values.nama_ibu}
                    placeholder="nama"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nik</Text>
                  <TextInput
                    onChangeText={handleChange('nik')}
                    onBlur={handleBlur('nik')}
                    value={values.nik}
                    placeholder="nik"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Umur</Text>
                  <TextInput
                    onChangeText={handleChange('umur')}
                    onBlur={handleBlur('umur')}
                    value={values.umur}
                    placeholder="umur"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Lama Nikah</Text>
                  <TextInput
                    onChangeText={handleChange('lama_nikah')}
                    onBlur={handleBlur('lama_nikah')}
                    value={values.lama_nikah}
                    placeholder="lama nikah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Suku</Text>
                  <TextInput
                    onChangeText={handleChange('suku')}
                    onBlur={handleBlur('suku')}
                    value={values.suku}
                    placeholder="suku"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Agama</Text>
                  <TextInput
                    onChangeText={handleChange('agama')}
                    onBlur={handleBlur('agama')}
                    value={values.agama}
                    placeholder="agama"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Pendidikan</Text>
                  <TextInput
                    onChangeText={handleChange('pendidikan')}
                    onBlur={handleBlur('pendidikan')}
                    value={values.pendidikan}
                    placeholder="pendidikan"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Pekerjaan</Text>
                  <TextInput
                    onChangeText={handleChange('pekerjaan')}
                    onBlur={handleBlur('pekerjaan')}
                    value={values.pekerjaan}
                    placeholder="pekerjaan"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Alamat</Text>
                  <TextInput
                    onChangeText={handleChange('alamat')}
                    onBlur={handleBlur('alamat')}
                    value={values.alamat}
                    placeholder="alamat"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nomor handphone</Text>
                  <TextInput
                    onChangeText={handleChange('no_hp')}
                    onBlur={handleBlur('no_hp')}
                    value={values.no_hp}
                    placeholder="nomor handphone"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Golongan darah</Text>
                  <TextInput
                    onChangeText={handleChange('gol_darah')}
                    onBlur={handleBlur('gol_darah')}
                    value={values.gol_darah}
                    placeholder="golongan darah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nomor bpjs</Text>
                  <TextInput
                    onChangeText={handleChange('no_bpjs')}
                    onBlur={handleBlur('no_bpjs')}
                    value={values.no_bpjs}
                    placeholder="nomor bpjs"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tempat periksa</Text>
                  <TextInput
                    onChangeText={handleChange('tempat_periksa')}
                    onBlur={handleBlur('tempat_periksa')}
                    value={values.tempat_periksa}
                    placeholder="tempat periksa"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nama suami</Text>
                  <TextInput
                    onChangeText={handleChange('nama_suami')}
                    onBlur={handleBlur('nama_suami')}
                    value={values.nama_suami}
                    placeholder="nama suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Umur suami</Text>
                  <TextInput
                    onChangeText={handleChange('umur_suami')}
                    onBlur={handleBlur('umur_suami')}
                    value={values.umur_suami}
                    placeholder="umur suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Agama suami</Text>
                  <TextInput
                    onChangeText={handleChange('agama_suami')}
                    onBlur={handleBlur('agama_suami')}
                    value={values.agama_suami}
                    placeholder="agama suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Suku suami</Text>
                  <TextInput
                    onChangeText={handleChange('suku_suami')}
                    onBlur={handleBlur('suku_suami')}
                    value={values.suku_suami}
                    placeholder="suku suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Pendidikan suami</Text>
                  <TextInput
                    onChangeText={handleChange('pendidikan_suami')}
                    onBlur={handleBlur('pendidikan_suami')}
                    value={values.pendidikan_suami}
                    placeholder="pendidikan suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Pekerjaan suami</Text>
                  <TextInput
                    onChangeText={handleChange('pekerjaan_suami')}
                    onBlur={handleBlur('pekerjaan_suami')}
                    value={values.pekerjaan_suami}
                    placeholder="pekerjaan suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Alamat suami</Text>
                  <TextInput
                    onChangeText={handleChange('alamat_suami')}
                    onBlur={handleBlur('alamat_suami')}
                    value={values.alamat_suami}
                    placeholder="alamat suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nomor Hp suami</Text>
                  <TextInput
                    onChangeText={handleChange('no_hpsuami')}
                    onBlur={handleBlur('no_hpsuami')}
                    value={values.no_hpsuami}
                    placeholder="nomor hp suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Password user</Text>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="password user"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">confPassword user</Text>
                  <TextInput
                    onChangeText={handleChange('confPassword')}
                    onBlur={handleBlur('confPassword')}
                    value={values.confPassword}
                    placeholder="confPassword user"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <LinearGradient
                  colors={['#c471ed', '#f64f59']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  className="my-4 rounded-md">
                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="w-full p-2 py-4 px-4 flex items-center justify-center">
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

export default IbuhamilForm;

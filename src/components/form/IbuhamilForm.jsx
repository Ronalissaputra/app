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
import {useNavigation} from '@react-navigation/native';
import {useCreateibuhamil} from '../../features/ibuhamilintence';

const IbuhamilForm = () => {
  const navigation = useNavigation();
  const {mutate, isLoading, isSuccess} = useCreateibuhamil();

  const initialValues = {
    name: '',
    umur: '',
    lama_nikah: '',
    suku: '',
    agama: '',
    pendidikan: '',
    pekerjaan: '',
    alamat: '',
    nomor_telefon: '',
    golongan_darah: '',
    nomor_bpjs: '',
    tempat_pemeriksaan: '',
    nama_suami: '',
    umur_suami: '',
    agama_suami: '',
    suku_suami: '',
    pendidikan_suami: '',
    pekerjaan_suami: '',
    alamat_suami: '',
    nomortelefon_suami: '',
    email: '',
    password: '',
    role: 'pasien',
  };

  const onSubmit = async (values, {resetForm}) => {
    await mutate(values);
    resetForm({values: initialValues});
    console.log(values);
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
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="nama"
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
                    onChangeText={handleChange('nomor_telefon')}
                    onBlur={handleBlur('nomor_telefon')}
                    value={values.nomor_telefon}
                    placeholder="nomor handphone"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Golongan darah</Text>
                  <TextInput
                    onChangeText={handleChange('golongan_darah')}
                    onBlur={handleBlur('golongan_darah')}
                    value={values.golongan_darah}
                    placeholder="golongan darah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nomor bpjs</Text>
                  <TextInput
                    onChangeText={handleChange('nomor_bpjs')}
                    onBlur={handleBlur('nomor_bpjs')}
                    value={values.nomor_bpjs}
                    placeholder="nomor bpjs"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tempat periksa</Text>
                  <TextInput
                    onChangeText={handleChange('tempat_pemeriksaan')}
                    onBlur={handleBlur('tempat_pemeriksaan')}
                    value={values.tempat_pemeriksaan}
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
                    onChangeText={handleChange('nomortelefon_suami')}
                    onBlur={handleBlur('nomortelefon_suami')}
                    value={values.nomortelefon_suami}
                    placeholder="nomor hp suami"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">email</Text>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="example@gmail.com"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Password</Text>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="password"
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

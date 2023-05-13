import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import {LabelComp} from '../utils';
import {useEffect} from 'react';

const ProfileForm = ({route}) => {
  const {nama, umur, prodi, semester, no_hp, alamat, email} = route.params;
  const initialValues = {
    nama: '',
    umur: '',
    prodi: '',
    semester: '',
    no_hp: '',
    alamat: '',
    email: '',
    password: '',
    role: '',
  };

  useEffect(() => {
    initialValues.nama = nama;
    initialValues.umur = umur;
    initialValues.prodi = prodi;
    initialValues.semester = semester;
    initialValues.no_hp = no_hp;
    initialValues.alamat = alamat;
    initialValues.email = email;
  }, []);

  return (
    <SafeAreaView className="h-auto mx-2">
      <ScrollView className="mt-4">
        <Formik initialValues={initialValues}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <LabelComp>{nama.toUpperCase()}</LabelComp>
              <View>
                <Text className="text-xl mb-1">Nama</Text>
                <TextInput
                  onChangeText={handleChange('nama')}
                  onBlur={handleBlur('nama')}
                  value={values.nama}
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
                <Text className="text-xl mb-1">Prodi</Text>
                <TextInput
                  onChangeText={handleChange('prodi')}
                  onBlur={handleBlur('prodi')}
                  value={values.prodi}
                  placeholder="Prodi"
                  className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                />
              </View>
              <View>
                <Text className="text-xl mb-1">Semester</Text>
                <TextInput
                  onChangeText={handleChange('semester')}
                  onBlur={handleBlur('semester')}
                  value={values.semester}
                  placeholder="semester"
                  className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                />
              </View>
              <View>
                <Text className="text-xl mb-1">Telepon</Text>
                <TextInput
                  onChangeText={handleChange('no_hp')}
                  onBlur={handleBlur('no_hp')}
                  value={values.no_hp}
                  placeholder="telepon"
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
                <Text className="text-xl mb-1">Email</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="email"
                  className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                />
              </View>
              <LinearGradient
                colors={['#c471ed', '#f64f59']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                className="mt-4 rounded-md">
                <TouchableOpacity className="w-full p-2 py-4 px-4 flex items-center justify-center">
                  <Text className="text-slate-50 text-2xl">Simpan</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileForm;

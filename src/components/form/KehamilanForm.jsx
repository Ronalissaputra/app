import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {Dropdown} from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import {LabelComp} from '../utils';

const KehamilanForm = ({route}) => {
  const {setKm, nama_ibu, id} = route.params;
  console.log(id);
  const [value, setValue] = useState();
  const [isFocus, setIsFocus] = useState(false);

  const options = [
    {label: 'Kunjungan 1', value: 'Kunjungan 1'},
    {label: 'Kunjungan 2', value: 'Kunjungan 2'},
    {label: 'Kunjungan 3', value: 'Kunjungan 3'},
    {label: 'Kunjungan 4', value: 'Kunjungan 4'},
    {label: 'Kunjungan 5', value: 'Kunjungan 5'},
    {label: 'Kunjungan 6', value: 'Kunjungan 6'},
  ];

  const initialValues = {
    tbUserId: id,
    status: '',
    tanggal: '',
    tempat_kunjungan: '',
    hasil_anamnesis: '',
    tinggi_bdn: '',
    berat_bdn: '',
    lngkr_lngnatas: '',
    tknan_darah: '',
    suhu: '',
    nadi: '',
    pernafasan: '',
    conjungtiva: '',
    sklera: '',
    udema_wajah: '',
    kshtn_gigi_mulut: '',
    klnjr_tiroid: '',
    klnjr_limfe: '',
    vena_jugularis: '',
    bntk_payudara: '',
    puting: '',
    pembesaran_perut: '',
    luka_bksoperasi: '',
    leopold_i: '',
    leopold_ii: '',
    leopold_iii: '',
    leopold_iv: '',
    ekstremitas: '',
    kndisi_vulva_vagina: '',
    kadar_haemoglobin: '',
    protein_urine: '',
    glukosa_urineataudarah: '',
    hbsag: '',
    rapidtes_hiv: '',
    usg: '',
    analisis_masalah: '',
    pemberiantablet_tmbhdarah: '',
    statusimunisasi_tt: '',
    konseling: '',
    layanan_dokter: '',
    tbUserId: '',
  };

  useEffect(() => {
    setKm(false);
  }, []);

  const onSubmit = async values => {
    values.status = value;
    console.log(values);
  };

  return (
    <SafeAreaView className="h-auto ">
      <ScrollView stickyHeaderIndices={[0]}>
        <LabelComp>{nama_ibu.toUpperCase()}</LabelComp>
        <View className="mx-2">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <View>
                  <Text className="text-xl mb-1">Status</Text>
                  <Dropdown
                    style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={options}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Pilih status kunjungan' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item.value);
                    }}
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

export default KehamilanForm;

const styles = StyleSheet.create({
  dropdown: {
    height: 58,
    borderColor: 'gray',
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: '#CBD5E1',
  },
  icon: {
    marginRight: 5,
  },
  selectedTextStyle: {
    fontSize: 24,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

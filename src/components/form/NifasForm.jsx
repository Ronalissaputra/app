import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {Dropdown} from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import {LabelComp, SpinloadComp} from '../utils';
import {useCreatemasanifas} from '../../features/masanifas';
import {useNavigation} from '@react-navigation/native';

const NifasForm = ({route}) => {
  const navigation = useNavigation();
  const {setNf, nama_ibu, id} = route.params;
  const {mutate, isSuccess, isLoading} = useCreatemasanifas();
  const [value, setValue] = useState();
  const [isFocus, setIsFocus] = useState(false);

  const options = [
    {label: 'Kunjungan 1', value: 'Kunjungan 1'},
    {label: 'Kunjungan 2', value: 'Kunjungan 2'},
    {label: 'Kunjungan 3', value: 'Kunjungan 3'},
    {label: 'Kunjungan 4', value: 'Kunjungan 4'},
  ];

  const initialValues = {
    tbUserId: id,
    status: '',
    keadaan_umum: '',
    kesadaran: '',
    status_emosional: '',
    tekanan_darah: '',
    suhu_tubuh: '',
    prnapasan: '',
    dnyut_nadi: '',
    konjungtiva: '',
    puting_susu: '',
    asi: '',
    tfu: '',
    kontraksi_uterus: '',
    kandung_kemih: '',
    jahitan: '',
    oedema: '',
    hematoma: '',
    warna_lochea: '',
    banyak_lochea: '',
    bau_lochea: '',
    robekan_anus: '',
    hemorid_anus: '',
    varises: '',
    oedema_ekstermitasbwh: '',
    golongan_drh: '',
    hemoglobin: '',
    hematorit: '',
  };

  useEffect(() => {
    setNf(false);
  }, []);

  const onSubmit = async (values, {resetForm}) => {
    values.status = value;
    await mutate(values);
    resetForm({values: initialValues});
  };

  return (
    <SafeAreaView className="h-auto">
      {isLoading && <SpinloadComp />}
      {isSuccess && navigation.navigate('IbunifasMenu')}
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
                  <Text className="text-xl mb-1">Keadaan umum</Text>
                  <TextInput
                    onChangeText={handleChange('keadaan_umum')}
                    onBlur={handleBlur('keadaan_umum')}
                    value={values.keadaan_umum}
                    placeholder="Keadaan umum"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Kesadaran</Text>
                  <TextInput
                    onChangeText={handleChange('kesadaran')}
                    onBlur={handleBlur('kesadaran')}
                    value={values.kesadaran}
                    placeholder="Kesadaran"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Status emosional</Text>
                  <TextInput
                    onChangeText={handleChange('status_emosional')}
                    onBlur={handleBlur('status_emosional')}
                    value={values.status_emosional}
                    placeholder="Status emosional"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tekanan darah</Text>
                  <TextInput
                    onChangeText={handleChange('tekanan_darah')}
                    onBlur={handleBlur('tekanan_darah')}
                    value={values.tekanan_darah}
                    placeholder="Tekanan darah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Suhu Tubuh</Text>
                  <TextInput
                    onChangeText={handleChange('suhu_tubuh')}
                    onBlur={handleBlur('suhu_tubuh')}
                    value={values.suhu_tubuh}
                    placeholder="Suhu Tubuh"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Prnapasan</Text>
                  <TextInput
                    onChangeText={handleChange('prnapasan')}
                    onBlur={handleBlur('prnapasan')}
                    value={values.prnapasan}
                    placeholder="Prnapasan"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Denyut nadi</Text>
                  <TextInput
                    onChangeText={handleChange('dnyut_nadi')}
                    onBlur={handleBlur('dnyut_nadi')}
                    value={values.dnyut_nadi}
                    placeholder="Denyut nadi"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Konjungtiva</Text>
                  <TextInput
                    onChangeText={handleChange('konjungtiva')}
                    onBlur={handleBlur('konjungtiva')}
                    value={values.konjungtiva}
                    placeholder="Konjungtiva"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Puting susu</Text>
                  <TextInput
                    onChangeText={handleChange('puting_susu')}
                    onBlur={handleBlur('puting_susu')}
                    value={values.puting_susu}
                    placeholder="Puting susu"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Asi</Text>
                  <TextInput
                    onChangeText={handleChange('asi')}
                    onBlur={handleBlur('asi')}
                    value={values.asi}
                    placeholder="Asi"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tfu</Text>
                  <TextInput
                    onChangeText={handleChange('tfu')}
                    onBlur={handleBlur('tfu')}
                    value={values.tfu}
                    placeholder="Tfu"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Kontraksi uterus</Text>
                  <TextInput
                    onChangeText={handleChange('kontraksi_uterus')}
                    onBlur={handleBlur('kontraksi_uterus')}
                    value={values.kontraksi_uterus}
                    placeholder="Kontraksi uterus"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Kandung kemih</Text>
                  <TextInput
                    onChangeText={handleChange('kandung_kemih')}
                    onBlur={handleBlur('kandung_kemih')}
                    value={values.kandung_kemih}
                    placeholder="Kandung kemih"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Jahitan</Text>
                  <TextInput
                    onChangeText={handleChange('jahitan')}
                    onBlur={handleBlur('jahitan')}
                    value={values.jahitan}
                    placeholder="Jahitan"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Oedema</Text>
                  <TextInput
                    onChangeText={handleChange('oedema')}
                    onBlur={handleBlur('oedema')}
                    value={values.oedema}
                    placeholder="Oedema"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Hematoma</Text>
                  <TextInput
                    onChangeText={handleChange('hematoma')}
                    onBlur={handleBlur('hematoma')}
                    value={values.hematoma}
                    placeholder="Hematoma"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Warna locea</Text>
                  <TextInput
                    onChangeText={handleChange('warna_lochea')}
                    onBlur={handleBlur('warna_lochea')}
                    value={values.warna_lochea}
                    placeholder="Warna locea"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Banyak lochea</Text>
                  <TextInput
                    onChangeText={handleChange('banyak_lochea')}
                    onBlur={handleBlur('banyak_lochea')}
                    value={values.banyak_lochea}
                    placeholder="Banyak lochea"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Bau lochea</Text>
                  <TextInput
                    onChangeText={handleChange('bau_lochea')}
                    onBlur={handleBlur('bau_lochea')}
                    value={values.bau_lochea}
                    placeholder="Bau lochea"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Robekan anus</Text>
                  <TextInput
                    onChangeText={handleChange('robekan_anus')}
                    onBlur={handleBlur('robekan_anus')}
                    value={values.robekan_anus}
                    placeholder="Robekan anus"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Hemorid anus</Text>
                  <TextInput
                    onChangeText={handleChange('hemorid_anus')}
                    onBlur={handleBlur('hemorid_anus')}
                    value={values.hemorid_anus}
                    placeholder="Hemorid anus"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Varises</Text>
                  <TextInput
                    onChangeText={handleChange('varises')}
                    onBlur={handleBlur('varises')}
                    value={values.varises}
                    placeholder="Varises"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Oedema Ekstermitas Bawah</Text>
                  <TextInput
                    onChangeText={handleChange('oedema_ekstermitasbwh')}
                    onBlur={handleBlur('oedema_ekstermitasbwh')}
                    value={values.oedema_ekstermitasbwh}
                    placeholder="Oedema Ekstermitas Bawah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Golongan darah</Text>
                  <TextInput
                    onChangeText={handleChange('golongan_drh')}
                    onBlur={handleBlur('golongan_drh')}
                    value={values.golongan_drh}
                    placeholder="Golongan darah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Hemoglobin</Text>
                  <TextInput
                    onChangeText={handleChange('hemoglobin')}
                    onBlur={handleBlur('hemoglobin')}
                    value={values.hemoglobin}
                    placeholder="Hemoglobin"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Hematorit</Text>
                  <TextInput
                    onChangeText={handleChange('hematorit')}
                    onBlur={handleBlur('hematorit')}
                    value={values.hematorit}
                    placeholder="Hematorit"
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

export default NifasForm;

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

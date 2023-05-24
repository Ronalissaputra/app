import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useEffect, useState} from 'react';
import {axiosIsntance} from '../../lib/baseUrl';
import {Formik} from 'formik';
import {Dropdown} from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import {LabelComp} from '../utils';
import {useNavigation} from '@react-navigation/native';

const BayilahirForm = () => {
  const navigation = useNavigation();
  const {mutate, isSuccess} = useCreatebayi();
  const [users, setUsers] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState();

  const initialValues = {
    tbUserId: value,
    nama_bayi: '',
    jenis_klamin: '',
    tnggl_lahir: '',
    anak_ke: '',
    keadaan_umum: '',
    kesadaran: '',
    kondisi_saatlahir: '',
    tekanan_darah: '',
    suhu: '',
    dja: '',
    hr: '',
    rr: '',
    saturasi: '',
    capilary_refill: '',
    bb: '',
    pb: '',
    lila: '',
    lk: '',
    ld: '',
    warna_kulit: '',
    denyut_nadi: '',
    tonusotot: '',
    usaha_napas: '',
    kepala: '',
    uub: '',
    mata: '',
    tht: '',
    mulut: '',
    thorax: '',
    abdomen: '',
    tali_pusat: '',
    punggung: '',
    genetalia: '',
    anus: '',
    ekstermitas: '',
    kulit: '',
    moro: '',
    rooting: '',
    sucking: '',
    swallowing: '',
    walking: '',
    graphs: '',
    babinski: '',
    tonicneck: '',
    bak: '',
    frekuensi_bak: '',
    warna_bak: '',
    bab: '',
    frekuensi_bab: '',
    warna_bab: '',
    laboratorium: '',
    usg: '',
    rontgen: '',
    terapi_yangdidpt: '',
    analisis_masalah: '',
    penatalaksanaan: '',
  };

  const onSubmit = async (values, {resetForm}) => {
    values.tbUserId = value;
    await mutate(values);
    resetForm({values: initialValues});
  };

  return (
    <SafeAreaView className="h-auto">
      <ScrollView stickyHeaderIndices={[0]}>
        <LabelComp>TAMBAH BAYI BARU LAHIR</LabelComp>
        {isSuccess && navigation.navigate('AnakkuMenu')}
        <View className="mx-2">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <View>
                  <Text className="text-xl mb-1">Nama ibu</Text>
                  <Dropdown
                    style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={users}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Pilih ibu hamil' : '...'}
                    searchPlaceholder="Cari..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item.value);
                    }}
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Nama Anak</Text>
                  <TextInput
                    onChangeText={handleChange('nama_bayi')}
                    onBlur={handleBlur('nama_bayi')}
                    value={values.nama_bayi}
                    placeholder="nama"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Jenis Kelamin</Text>
                  <TextInput
                    onChangeText={handleChange('jenis_klamin')}
                    onBlur={handleBlur('jenis_klamin')}
                    value={values.jenis_klamin}
                    placeholder="Jenis Kelamin"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tanggal Lahir</Text>
                  <TextInput
                    onChangeText={handleChange('tnggl_lahir')}
                    onBlur={handleBlur('tnggl_lahir')}
                    value={values.tnggl_lahir}
                    placeholder="Tanggal Lahir"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Anak Ke</Text>
                  <TextInput
                    onChangeText={handleChange('anak_ke')}
                    onBlur={handleBlur('anak_ke')}
                    value={values.anak_ke}
                    placeholder="Anak ke"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Keadaan Umum</Text>
                  <TextInput
                    onChangeText={handleChange('keadaan_umum')}
                    onBlur={handleBlur('keadaan_umum')}
                    value={values.keadaan_umum}
                    placeholder="keadaan umum"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Kesadaran</Text>
                  <TextInput
                    onChangeText={handleChange('kesadaran')}
                    onBlur={handleBlur('kesadaran')}
                    value={values.kesadaran}
                    placeholder="kesadaran"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Kondisi lahir</Text>
                  <TextInput
                    onChangeText={handleChange('kondisi_saatlahir')}
                    onBlur={handleBlur('kondisi_saatlahir')}
                    value={values.kondisi_saatlahir}
                    placeholder="kondisi lahir"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tekanan Darah</Text>
                  <TextInput
                    onChangeText={handleChange('tekanan_darah')}
                    onBlur={handleBlur('tekanan_darah')}
                    value={values.tekanan_darah}
                    placeholder="tekanan darah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Suhu</Text>
                  <TextInput
                    onChangeText={handleChange('suhu')}
                    onBlur={handleBlur('suhu')}
                    value={values.suhu}
                    placeholder="suhu"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Dja</Text>
                  <TextInput
                    onChangeText={handleChange('dja')}
                    onBlur={handleBlur('dja')}
                    value={values.dja}
                    placeholder="dja"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Hr</Text>
                  <TextInput
                    onChangeText={handleChange('hr')}
                    onBlur={handleBlur('hr')}
                    value={values.hr}
                    placeholder="hr"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Rr</Text>
                  <TextInput
                    onChangeText={handleChange('rr')}
                    onBlur={handleBlur('rr')}
                    value={values.rr}
                    placeholder="Rr"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Saturasi</Text>
                  <TextInput
                    onChangeText={handleChange('saturasi')}
                    onBlur={handleBlur('saturasi')}
                    value={values.saturasi}
                    placeholder="Saturasi"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Capilary_refill</Text>
                  <TextInput
                    onChangeText={handleChange('capilary_refill')}
                    onBlur={handleBlur('capilary_refill')}
                    value={values.capilary_refill}
                    placeholder="capitulary"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Berat badan</Text>
                  <TextInput
                    onChangeText={handleChange('bb')}
                    onBlur={handleBlur('bb')}
                    value={values.bb}
                    placeholder="berat badan"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">pb</Text>
                  <TextInput
                    onChangeText={handleChange('pb')}
                    onBlur={handleBlur('pb')}
                    value={values.pb}
                    placeholder="pb"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Lila</Text>
                  <TextInput
                    onChangeText={handleChange('lila')}
                    onBlur={handleBlur('lila')}
                    value={values.lila}
                    placeholder="Lila"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Lk</Text>
                  <TextInput
                    onChangeText={handleChange('lk')}
                    onBlur={handleBlur('lk')}
                    value={values.lk}
                    placeholder="lk"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Ld</Text>
                  <TextInput
                    onChangeText={handleChange('ld')}
                    onBlur={handleBlur('ld')}
                    value={values.ld}
                    placeholder="Ld"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Warnah Kulit</Text>
                  <TextInput
                    onChangeText={handleChange('warna_kulit')}
                    onBlur={handleBlur('warna_kulit')}
                    value={values.warna_kulit}
                    placeholder="Warnah Kulit"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Denyut nadi</Text>
                  <TextInput
                    onChangeText={handleChange('denyut_nadi')}
                    onBlur={handleBlur('denyut_nadi')}
                    value={values.denyut_nadi}
                    placeholder="Denyut nadi"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tonusotot</Text>
                  <TextInput
                    onChangeText={handleChange('tonusotot')}
                    onBlur={handleBlur('tonusotot')}
                    value={values.tonusotot}
                    placeholder="Tonusotot"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Usaha napas</Text>
                  <TextInput
                    onChangeText={handleChange('usaha_napas')}
                    onBlur={handleBlur('usaha_napas')}
                    value={values.usaha_napas}
                    placeholder="Usaha napas"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Kepala</Text>
                  <TextInput
                    onChangeText={handleChange('kepala')}
                    onBlur={handleBlur('kepala')}
                    value={values.kepala}
                    placeholder="Kepala"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Uub</Text>
                  <TextInput
                    onChangeText={handleChange('uub')}
                    onBlur={handleBlur('uub')}
                    value={values.uub}
                    placeholder="Uub"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Mata</Text>
                  <TextInput
                    onChangeText={handleChange('mata')}
                    onBlur={handleBlur('mata')}
                    value={values.mata}
                    placeholder="Mata"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tht</Text>
                  <TextInput
                    onChangeText={handleChange('tht')}
                    onBlur={handleBlur('tht')}
                    value={values.tht}
                    placeholder="Tht"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Mulut</Text>
                  <TextInput
                    onChangeText={handleChange('mulut')}
                    onBlur={handleBlur('mulut')}
                    value={values.mulut}
                    placeholder="Mulut"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Thorax</Text>
                  <TextInput
                    onChangeText={handleChange('thorax')}
                    onBlur={handleBlur('thorax')}
                    value={values.thorax}
                    placeholder="Thorax"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Abdomen</Text>
                  <TextInput
                    onChangeText={handleChange('abdomen')}
                    onBlur={handleBlur('abdomen')}
                    value={values.abdomen}
                    placeholder="Abdomen"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tali pusat</Text>
                  <TextInput
                    onChangeText={handleChange('tali_pusat')}
                    onBlur={handleBlur('tali_pusat')}
                    value={values.tali_pusat}
                    placeholder="Tali pusat"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Punggung</Text>
                  <TextInput
                    onChangeText={handleChange('punggung')}
                    onBlur={handleBlur('punggung')}
                    value={values.punggung}
                    placeholder="Punggung"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Genetalia</Text>
                  <TextInput
                    onChangeText={handleChange('genetalia')}
                    onBlur={handleBlur('genetalia')}
                    value={values.genetalia}
                    placeholder="Genetalia"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Anus</Text>
                  <TextInput
                    onChangeText={handleChange('anus')}
                    onBlur={handleBlur('anus')}
                    value={values.anus}
                    placeholder="Anus"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Ekstermitas</Text>
                  <TextInput
                    onChangeText={handleChange('ekstermitas')}
                    onBlur={handleBlur('ekstermitas')}
                    value={values.ekstermitas}
                    placeholder="Ekstermitas"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Kulit</Text>
                  <TextInput
                    onChangeText={handleChange('kulit')}
                    onBlur={handleBlur('kulit')}
                    value={values.kulit}
                    placeholder="Kulit"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Moro</Text>
                  <TextInput
                    onChangeText={handleChange('moro')}
                    onBlur={handleBlur('moro')}
                    value={values.moro}
                    placeholder="Moro"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Rooting</Text>
                  <TextInput
                    onChangeText={handleChange('rooting')}
                    onBlur={handleBlur('rooting')}
                    value={values.rooting}
                    placeholder="Rooting"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Sucking</Text>
                  <TextInput
                    onChangeText={handleChange('sucking')}
                    onBlur={handleBlur('sucking')}
                    value={values.sucking}
                    placeholder="Sucking"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Swallowing</Text>
                  <TextInput
                    onChangeText={handleChange('swallowing')}
                    onBlur={handleBlur('swallowing')}
                    value={values.swallowing}
                    placeholder="Swallowing"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Walking</Text>
                  <TextInput
                    onChangeText={handleChange('walking')}
                    onBlur={handleBlur('walking')}
                    value={values.walking}
                    placeholder="Walking"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Graphs</Text>
                  <TextInput
                    onChangeText={handleChange('graphs')}
                    onBlur={handleBlur('graphs')}
                    value={values.graphs}
                    placeholder="Graphs"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Babinski</Text>
                  <TextInput
                    onChangeText={handleChange('babinski')}
                    onBlur={handleBlur('babinski')}
                    value={values.babinski}
                    placeholder="Babinski"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Tonicneck</Text>
                  <TextInput
                    onChangeText={handleChange('tonicneck')}
                    onBlur={handleBlur('tonicneck')}
                    value={values.tonicneck}
                    placeholder="Tonicneck"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Bak</Text>
                  <TextInput
                    onChangeText={handleChange('bak')}
                    onBlur={handleBlur('bak')}
                    value={values.bak}
                    placeholder="Bak"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Frekuensi bak</Text>
                  <TextInput
                    onChangeText={handleChange('frekuensi_bak')}
                    onBlur={handleBlur('frekuensi_bak')}
                    value={values.frekuensi_bak}
                    placeholder="Frekuensi_bak"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Warna bak</Text>
                  <TextInput
                    onChangeText={handleChange('warna_bak')}
                    onBlur={handleBlur('warna_bak')}
                    value={values.warna_bak}
                    placeholder="Warna_bak"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">bab</Text>
                  <TextInput
                    onChangeText={handleChange('bab')}
                    onBlur={handleBlur('bab')}
                    value={values.bab}
                    placeholder="Bab"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Frekuensi bab</Text>
                  <TextInput
                    onChangeText={handleChange('frekuensi_bab')}
                    onBlur={handleBlur('frekuensi_bab')}
                    value={values.frekuensi_bab}
                    placeholder="Frekuensi bab"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Warna bab</Text>
                  <TextInput
                    onChangeText={handleChange('warna_bab')}
                    onBlur={handleBlur('warna_bab')}
                    value={values.warna_bab}
                    placeholder="Warna bab"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Laboratorium</Text>
                  <TextInput
                    onChangeText={handleChange('laboratorium')}
                    onBlur={handleBlur('laboratorium')}
                    value={values.laboratorium}
                    placeholder="Laboratorium"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Usg</Text>
                  <TextInput
                    onChangeText={handleChange('usg')}
                    onBlur={handleBlur('usg')}
                    value={values.usg}
                    placeholder="Usg"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Rontgen</Text>
                  <TextInput
                    onChangeText={handleChange('rontgen')}
                    onBlur={handleBlur('rontgen')}
                    value={values.rontgen}
                    placeholder="Rontgen"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Terapi</Text>
                  <TextInput
                    onChangeText={handleChange('terapi_yangdidpt')}
                    onBlur={handleBlur('terapi_yangdidpt')}
                    value={values.terapi_yangdidpt}
                    placeholder="Terapi"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Analisis masalah</Text>
                  <TextInput
                    onChangeText={handleChange('analisis_masalah')}
                    onBlur={handleBlur('analisis_masalah')}
                    value={values.analisis_masalah}
                    placeholder="Analisis masalah"
                    className="w-full rounded-sm p-2 py-3 px-4 bg-slate-300 text-slate-800 text-2xl"
                  />
                </View>
                <View>
                  <Text className="text-xl mb-1">Penatalaksanaan</Text>
                  <TextInput
                    onChangeText={handleChange('penatalaksanaan')}
                    onBlur={handleBlur('penatalaksanaan')}
                    value={values.penatalaksanaan}
                    placeholder="Penatalaksanaan"
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

export default BayilahirForm;

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

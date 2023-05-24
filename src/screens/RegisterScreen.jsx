import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {RegisterForm} from '../components/authform';
import {useCreateadmin} from '../features/adminintence';
import {SpinloadComp} from '../components/utils';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {mutate, isLoading, isSuccess} = useCreateadmin();
  return (
    <SafeAreaView>
      {isLoading && <SpinloadComp />}
      {isSuccess && navigation.navigate('LoginScreen')}
      <ScrollView>
        <LinearGradient
          colors={['#C9D6FF', '#E2E2E2']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="min-h-screen flex justify-center items-center">
          <Image
            source={require('../assets/Buminglogo.png')}
            className="w-[210px] h-[210px]"
          />
          <Text className="text-3xl text-rose-600">Daftar</Text>
          <View className="w-full px-2 my-2">
            <RegisterForm mutate={mutate} />
            <View className="pt-5">
              <View className="flex-row justify-center items-center">
                <Text className="text-xl">
                  Sudah punya akun?
                  <Text
                    onPress={() => navigation.navigate('LoginScreen')}
                    className="text-purple-700 font-bold">
                    {' '}
                    Login
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

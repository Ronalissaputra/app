import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import {validationLogin} from '../../lib/validationScema';

const LoginForm = ({mutate}) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, {resetForm}) => {
    await mutate(values);
    resetForm({values: initialValues});
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <View className="space-y-2">
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="example@mail.com"
              className="w-full rounded-full p-2 py-3 px-4 bg-slate-200 text-slate-800 text-2xl"
            />
            {touched.email && errors.email && (
              <Text className="text-red-500 ml-5">{errors.email}</Text>
            )}
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              className="w-full rounded-full p-2 py-3 px-4 bg-slate-200 text-slate-800 text-2xl"
            />
            {touched.password && errors.password && (
              <Text className="text-red-500 ml-5">{errors.password}</Text>
            )}
            <LinearGradient
              colors={['#c471ed', '#f64f59']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              className="rounded-full">
              <TouchableOpacity
                onPress={handleSubmit}
                className="w-full rounded-full p-2 py-4 px-4 flex items-center justify-center">
                <Text className="text-slate-50 text-2xl">Login</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

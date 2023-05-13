import * as yup from 'yup';

export const validationLogin = yup.object().shape({
  email: yup
    .string()
    .email('Email tidak valid')
    .required('Email tidak boleh kosong'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Kata sandi harus mengandung setidaknya 8 karakter, termasuk setidaknya satu huruf dan satu angka',
    )
    .required('Password tidak boleh kosong'),
});

export const validationRegister = yup.object().shape({
  nama: yup.string().required('Username tidak boleh kosong').min(3).max(20),
  email: yup
    .string()
    .email('Email tidak valid')
    .required('Email tidak boleh kosong'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Kata sandi harus mengandung setidaknya 8 karakter, termasuk setidaknya satu huruf dan satu angka',
    )
    .required('Password tidak boleh kosong'),
  confPassword: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Kata sandi harus mengandung setidaknya 8 karakter, termasuk setidaknya satu huruf dan satu angka',
    )
    .required('confPassword tidak boleh kosong'),
});

import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Too short').max(20).required('Name must be required..!'),
  email: Yup.string().email().required('Email must be required..!'),
  password: Yup.string().required('Password must be required..!').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  cpassword: Yup.string().oneOf([Yup.ref('password'), null],'password must match').required('Confirm Password must be required..!'),
});

export default validationSchema;

import React from 'react'
import { Formik, Form, useField, FieldAttributes } from 'formik'
import { TextField, Button } from '@material-ui/core'

import * as Yup from 'yup'

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  )
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone is required!'),
  password: Yup.string()
    .min(6, 'need more than 6!')
    .max(12, 'too long, need short than 12!')
    .required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  )
})

export const FormikPage = () => {
  return (
    <div className='formik-form'>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          password: '',
          passwordConfirmation: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          // same shape as initial values
          console.log('submit: ', data)
          setSubmitting(false)
          resetForm()
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form className='form'>
            <MyTextField
              placeholder='first name'
              name='firstName'
              type='input'
            />
            <MyTextField placeholder='last name' name='lastName' type='input' />
            <MyTextField placeholder='email' name='email' type='email' />
            <MyTextField
              placeholder='password'
              name='password'
              type='password'
            />
            <MyTextField
              placeholder='password Confirmation'
              name='passwordConfirmation'
              type='password'
            />
            <MyTextField
              placeholder='phone number'
              name='phoneNumber'
              type='input'
            />
            <Button disabled={isSubmitting} type='submit'>
              Submit
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}

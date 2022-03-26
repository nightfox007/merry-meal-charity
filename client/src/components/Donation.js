import React, { useState } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import * as yup from 'yup'
import CustomErrorMsg from './CustomErrorMsg'

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is Required'),
  lastName: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is Required'),
  email: yup.string().required('Email is Required'),
  phone: yup
    .number()
    .max(1000000000, 'Not Valid Phone Number')
    .min(9999999999, 'Not Valid Phone Number')
    .required('Phone Number is Required'),
  country: yup.string().required('Country is Required'),
  address: yup.string().required('Address is Required'),

  personName: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Person Name is Required'),
  cardNumber: yup.number().required('Required'),
  expiry: yup.date().required('Expiry Date is Required'),
  cvv: yup.number().required('Required'),
  amount: yup.number().required('Required'),
})

const Donation = () => {
  const [showPaymentForm, setshowPaymentForm] = useState(false)
  return (
    <div className='container'>
      {!showPaymentForm && (
        <>
          <h1 className='fw-bold'>Please Donate !</h1>
          <br />
          <br />
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              country: '',
              address: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({ values }) => (
              <Form>
                <label className='mb-2'>First Name</label>
                <br />
                <Field name='firstName' type='text' className='px-5' />
                <CustomErrorMsg name='firstName' />

                <label className='mb-2'>Last Name</label>
                <br />
                <Field name='lastName' type='text' className='px-5' />
                <CustomErrorMsg name='lastName' />

                <label className='mb-2'>Email</label>
                <br />
                <Field name='email' type='email' className='px-5' />
                <CustomErrorMsg name='email' />

                <label className='mb-2'>Phone</label>
                <br />
                <Field name='phone' type='text' className='px-5' />
                <CustomErrorMsg name='phone' />

                <label className='mb-2'>Country</label>
                <br />
                <Field name='country' type='text' className='px-5' />
                <CustomErrorMsg name='country' />

                <label className='mb-2'>Address</label>
                <br />
                <Field name='address' type='text' className='px-5' />
                <CustomErrorMsg name='address' />

                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={() => setshowPaymentForm(true)}
                >
                  &#8594;Next
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
      {showPaymentForm && (
        <>
          <h1 className='fw-bold'>Payment Info</h1>
          <br />
          <Formik
            initialValues={{
              picked: '',
              personName: '',
              cardNumber: '',
              expiry: '',
              cvv: '',
              amount: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({ values }) => (
              <Form>
                <div>
                  <div className='row'>
                    <div className='col-3'>
                      <label className='fw-bold radio'>
                        <Field type='radio' name='picked' value='visa' />
                        <img src='visa.png' width={'10%'} />
                        Pay with Visa
                      </label>
                    </div>
                    <div className='col-3'>
                      <label className='fw-bold radio'>
                        <Field
                          type='radio'
                          name='picked'
                          value='americanexpress'
                        />
                        <img src='americanexpress.png' width={'6%'} />
                        Pay with American Express
                      </label>
                    </div>
                  </div>
                  <br />
                  <div className='row'>
                    <div className='col-3'>
                      <label className='fw-bold radio'>
                        <Field type='radio' name='picked' value='mastercard' />
                        <img src='mastercard.png' width={'10%'} /> Pay With
                        Master
                      </label>
                    </div>
                    <div className='col-3'>
                      <label className='fw-bold radio'>
                        <Field type='radio' name='picked' value='paypal' />
                        <img src='paypal.png' width={'8%'} /> Pay With PayPal
                      </label>
                    </div>
                  </div>
                  <div>Picked: {values.picked}</div>
                </div>

                <br />
                <label className='mb-2'>Person Name</label>
                <br />
                <Field name='personName' type='text' className='px-5' />
                <CustomErrorMsg name='personName' />

                <label className='mb-2'>Card Number</label>
                <br />
                <Field name='cardNumber' type='text' className='px-5' />
                <CustomErrorMsg name='cardNumber' />

                <div className='row'>
                  <div className='col-3'>
                    <label className='mb-2'>Expiry</label>
                    <br />
                    <Field name='expiry' type='date' />
                    <CustomErrorMsg name='expiry' />
                  </div>
                  <div className='col-3'>
                    {' '}
                    <label className='mb-2'>CVV</label>
                    <br />
                    <Field name='cvv' type='text' />
                    <CustomErrorMsg name='cvv' />
                  </div>
                </div>

                <label className='mb-2'>Amount</label>
                <br />
                <Field name='amount' type='number' className='px-3' />
                <CustomErrorMsg name='amount' />

                <label>
                  Do you agree to the terms and conditions
                  <input type='checkbox' className='mx-2' />
                </label>

                <br />
                <button
                  type='submit'
                  className='btn btn-primary'
                  onClick={() => console.log('CheckOut!')}
                >
                  Checkout
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  )
}

export default Donation

// FormFieldComponent.js
import React from 'react';
import { Field, ErrorMessage, Form } from 'formik';

const FormFieldComponent = ({ initialValues, handleSubmit }) => {
  return (
    <Form className="row g-3 p-3 text-white rounded-5">   
      <h1 className='text-center'>Fill The Form </h1>
      <div className="col-md-12">
        <label htmlFor="inputName" className="form-label">Name</label>
        <Field type="text" className="form-control" name='name' id="inputName" placeholder="Enter your name" />
        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
      </div>
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <Field type="email" className="form-control" name='email' id="inputEmail4" placeholder="Enter your email" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <Field type="password" className="form-control" name='password' id="inputPassword4" placeholder="Enter your password" />
        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword5" className="form-label">Confirm Password</label>
        <Field type="password" className="form-control" name='cpassword' id="inputPassword5" placeholder="Confirm your password" />
        <ErrorMessage name="cpassword" component="div" style={{ color: 'red' }}/>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary mt-2">Sign in</button>
      </div>
    </Form>
  );
}

export default FormFieldComponent;

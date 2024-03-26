// FormikForm.js
import { useState } from 'react';
import { Formik } from 'formik';
import validationSchema from './validationSchema';
import FormFieldComponent from './FormFieldComponent';
import SubmittedDataComponent from './SubmittedDataComponent';

const FormikForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setSubmittedData(values);
    setIsSubmitted(true);
    resetForm();
  };

  return (
    <>
      <div className="bgo d-flex justify-content-between align-items-center ">      
        <div className="container">
         
          {!isSubmitted && (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
                <FormFieldComponent initialValues={initialValues} handleSubmit={handleSubmit} />
              )}
            </Formik>
          )}
          <SubmittedDataComponent submittedData={submittedData} />
        </div>
      </div>
    </>
  );
}

export default FormikForm;

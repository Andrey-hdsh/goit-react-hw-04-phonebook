import { Formik, Field} from 'formik';
import { FormStyled, ErrorMsg } from './form.styled';
import * as Yup from 'yup';


export const ContactForm = ({ hundleContact }) => {

  const yupValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must have at least 2 characters')
    .max(25, 'Name must be 25 characters or less')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^[0-9-+]*$/, 'Invalid phone number')
    .min(5, 'Phone number must be at least 5 characters')
    .max(20, 'Phone number must be 20 characters or less')
    .required('Phone number is required'),
});
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
    validationSchema={yupValidation}
      onSubmit={(values, actions) => {
        hundleContact(values);
        actions.resetForm();
      }}
    >
      <FormStyled>
        <label>Name</label>
        <Field type="text" name="name" placeholder='Jack Daniel`s' />
      <ErrorMsg name='name' component='span'/>
        <label>Phone</label>
        <Field type="tel" name="number" placeholder='+380' />
        <ErrorMsg name='number' component='span'/>
        <button type="submit">Add contact</button>
      </FormStyled>
    </Formik>
  );
};

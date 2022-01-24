import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import 'yup-phone';
import { Button } from 'components/Button/Button';
import { FormStyled, Input, Message, LabelStyled } from './ContactFormStyled';
import propTypes from 'prop-types';

const validationSchema = yup.object({
  name: yup.string().required(),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '',
  filter: '',
};

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <Message>{message}</Message>} />;
};

export const ContactForm = ({ contacts, onSubmit }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isNameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contactObj = { id: nanoid(4), name, number };
    onSubmit(contactObj);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete='off'>
        <div>
          <LabelStyled htmlFor='name'>Name</LabelStyled>
          <div>
            <Input name='name' type='text' />
            <FormError name='name' />
          </div>
        </div>
        <div>
          <LabelStyled htmlFor='number'>Number</LabelStyled>
          <div>
            <Input name='number' type='tel' />
            <FormError name='number' />
          </div>
        </div>
        <Button type='submit' text={'Add contact'} />
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { REDUX_FORMS } from '../../constants/redux-forms';

let CreateBoardForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="create-board__form">
      <Field
        type="text"
        name="title"
        placeholder="Add board's title"
        className="create-board__input"
        component="input"
      />
      <Field
        type="text"
        name="description"
        placeholder="Add board's description"
        className="create-board__textarea"
        component="textarea"
      />

      <button type="submit" className="button create-board__button">
        Create board
      </button>
    </form>
  );
};

CreateBoardForm = reduxForm({ form: REDUX_FORMS.CREATE_BOARD_FORM })(CreateBoardForm);

export default CreateBoardForm;

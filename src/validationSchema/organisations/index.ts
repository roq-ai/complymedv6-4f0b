import * as yup from 'yup';

export const organisationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  client_id: yup.string().nullable().required(),
});

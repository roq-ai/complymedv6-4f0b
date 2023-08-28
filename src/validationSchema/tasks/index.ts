import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  type: yup.string().required(),
  status: yup.string().required(),
  client_id: yup.string().nullable().required(),
});

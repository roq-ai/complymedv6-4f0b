import * as yup from 'yup';

export const businessValidationSchema = yup.object().shape({
  name: yup.string().required(),
  tasks_completed: yup.number().integer().required(),
  client_id: yup.string().nullable().required(),
});

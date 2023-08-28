import * as yup from 'yup';

export const auditReportValidationSchema = yup.object().shape({
  report_date: yup.date().required(),
  client_id: yup.string().nullable().required(),
});

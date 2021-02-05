export default function validatedCrm(crmToFormat: string) {
  const regExp = /[0-9]{2}[.][\d]{3}[.][\d]{2}/g;

  const crmValidation = regExp.test(crmToFormat);

  return crmValidation;
}

export default function validatedCrm(crmToFormat: string) {
  const regExp = /^([\d]{2})\.?([\d]{3})\.?([\d]{2})/;

  const crmValidation = regExp.test(crmToFormat);

  if (!regExp.test(crmToFormat)) {
    throw new Error('Insira um CRM Válido, Exemplo: 11.111.11');
  }
  console.log('crmvali', crmValidation);
  if (!crmValidation) {
    throw new Error('Insira um CRM Válido, Exemplo: 11.111.11');
  }

  return crmToFormat;
}

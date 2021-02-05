export default function validatedCep(cepToFormat: string) {
  const regExp = /[0-9]{5}-[\d]{3}/g;

  const cepValidation = regExp.test(cepToFormat);

  return cepValidation;
}

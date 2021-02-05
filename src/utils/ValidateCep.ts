export default function validatedCep(str: string) {
  const re = /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/;

  if (!re.test(str)) {
    throw new Error('Insira um cep Válido, Exemplo: 11.111.11');
  }

  return '';
}

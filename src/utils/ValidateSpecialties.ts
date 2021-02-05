export default function validateSpecialties(specialty: string[]) {
  const specialtiesFiltered = [''];
  const specialties = [
    'ALERGOLOGIA',
    'ANGIOLOGIA',
    'BUCO MAXILO',
    'CARDIOLOGIA CLÍNICA',
    'CARDIOLOGIA INFANTIL',
    'CIRURGIA CABEÇA E PESCOÇO',
    'CIRURGIA CARDÍACA',
    'CIRURGIA DE TÓRAX',
  ];

  specialty.filter((element) => {
    if (specialties.includes(element.toUpperCase())) {
      specialtiesFiltered.push(element.toUpperCase());
    }
  });

  return specialtiesFiltered;
}

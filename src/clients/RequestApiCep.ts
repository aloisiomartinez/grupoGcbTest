// import { AxiosStatic } from 'axios';

// interface ResponseApiCep {
//   cep: string;
//   logradouro: string;
//   complemento: string;
//   bairro: string;
//   localidade: string;
//   uf: string;
//   ibge: string;
//   gia: string;
//   ddd: string;
//   siafi: string;
// }

// class RequestApiCep {
//   // eslint-disable-next-line no-useless-constructor
//   // constructor(protected request: AxiosStatic) {}

//   public async getData(cep: string): Promise<ResponseApiCep> {
//     const response = await this.request.get<ResponseApiCep>(
//       `https://viacep.com.br/ws/${cep}/json`,
//     );

//     const { bairro } = response.data;
//     console.log('bairro', bairro);

//     console.log('Response', response);
//   }
// }

// // async function procuraCep(cepApi: string): Promise<any> {
// //   const respostaApi = await fetch(
// //     `https://viacep.com.br/ws/${cepApi}/json`,
// //   ).then((response) => {
// //     response
// //       .json()
// //       .then((data) => showData(data))
// //       .catch((error) => console.log(error.messa));
// //   });
// //   console.log('Response api', respostaApi);

// //   return respostaApi;
// // }
// export default RequestApiCep;

# Grupo Gcb - Back-end Teste


<div align="center">

</div>

<h3 align="center">
  

</h3>

## :rocket:  Tecnologias

Esse projeto foi desenvolvido utilizando as tecnologias abaixo:
- <a href="https://www.typescriptlang.org/">Typescript</a>
- <a href="https://nodejs.org/en/">Node.JS</a>
- <a href="https://www.docker.com/">Docker</a>
- <a href="https://www.postgresql.org/">PostgreSQL</a>
- <a href="https://typeorm.io/#/">TypeORM</a>

## :information_source:  Como usar

Para utilizar a aplicação, você precisa ter instalado no seu computador o [Node.js](http://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e instalar o container do [Postgre](https://www.postgresql.org/) junto com [Docker](https://www.docker.com).

### Instalar Server (Node.JS) 

```bash
# Clonar repositório
$ git clone https://github.com/aloisiomartinez/grupoGcbTest

# Acessar a pasta
$ cd grupoGcbTest/

# Instalar dependências
$ yarn install ou yarn

# Criar o container junto com o Postgres
$ docker run --name GCBdatabase -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres

# Começar a aplicação
$ yarn dev

# Utilizar Insomnia, Postman ou o navegador para visualizar o projeto
  base_url: http://localhost:3333/
```




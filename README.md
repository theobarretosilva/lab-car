# labCAR

API REST usando [NestJS](https://nestjs.com/)

## Primeiros passos

Para instalar as dependencias é preciso executar o comando **npm**:

```
$ npm install
```

## Comandos

No diretório do projeto, você pode executar:

### **dev**

Executa o aplicativo no modo de desenvolvimento. Que ficará exposto em: http://localhost:3000

```
$ npm run start:dev
```

## Endpoints disponíveis:

## Motoristas

### Listar motoristas:

```
GET: http://localhost:3000/motoristas
ou
GET: http://localhost:3000/motoristas?name=${nomeMotorista}
ou
GET: http://localhost:3000/motoristas?page=${nPagina}&size=${nSize}
```
**Resultado:**

```
{
  "blocked": false,
  "viagens": [],
  "birthDate": "2004-08-25",
  "carModel": "Golf GTI",
  "cpf": "102.227.489-04",
  "licensePlate": "JDAL5555jj",
  "name": "Théo Barreto Silva"
}
```

### Detalhes motoristas:

```
GET: http://localhost:3000/motoristas/:cpfMotorista
```
**Resultado:**

```
{
  "blocked": false,
  "viagens": [],
  "birthDate": "2004-08-25",
  "carModel": "Golf GTI",
  "cpf": "102.227.489-04",
  "licensePlate": "JDAL5555jj",
  "name": "Théo Barreto Silva"
}
```

### Criar um motorista:

```
POST: http://localhost:3000/motoristas
Body: {
	"birthDate": "2004-08-25",
	"carModel": "Golf GTI",
	"cpf": "102.227.489-81",
	"licensePlate": "JDAL5555jj",
	"name": "Mota"
}
```
**Resultado:**

```
{
	"blocked": false,
	"viagens": [],
	"birthDate": "2004-08-25",
	"carModel": "Golf GTI",
	"cpf": "102.227.489-81",
	"licensePlate": "JDAL5555jj",
	"name": "Mota"
}
```

### Atualizar dados do motorista:

```
PUT: http://localhost:3000/motoristas/update/:cpfMotorista
Body: {
	"birthDate": "1999-12-23",
	"carModel": "Golf GTI",
	"cpf": "102.227.489-03",
	"licensePlate": "KDJD524",
	"name": "Jurema da silva prazeres"
}
```
**Resultado:**

```
{
	"blocked": false,
	"viagens": [],
	"birthDate": "1999-12-23",
	"carModel": "Golf GTI",
	"cpf": "102.227.489-03",
	"licensePlate": "KDJD524",
	"name": "Jurema da silva prazeres"
}
```

### Bloquear/desbloquear motorista:

```
PUT: http://localhost:3000/motoristas/blockUnblock/:cpfMotorista
Body: {
	"blocked": true
}
```
**Resultado:**

```
{
	"blocked": true,
	"viagens": [],
	"birthDate": "2004-08-25",
	"carModel": "Golf GTI",
	"cpf": "102.227.489-81",
	"licensePlate": "JDAL5555jj",
	"name": "Mota"
}
```

### Exclusão de motorista:

```
DELETE: http://localhost:3000/motoristas/:cpfMotorista
```

## Passageiros

### Listar passageiros

```
GET: http://localhost:3000/passageiros
ou
GET: http://localhost:3000/passageiros?name=${nomePassageiro}
ou
GET: http://localhost:3000/passageiros?page=${nPagina}&size=${nSize}
```
**Resultado:**

```
{
  "blocked": false,
  "viagens": [],
  "name": "Théo Barreto Silva",
  "birthDate": "1963-08-22",
  "cpf": "102.227.489-90",
  "address": "Rua Cruz e Souza, 537"
}
```

### Detalhes passageiro

```
GET: http://localhost:3000/passageiros/:cpfPassageiro
```
**Resultado:**

```
{
  "blocked": false,
  "viagens": [],
  "name": "Théo Barreto Silva",
  "birthDate": "1963-08-22",
  "cpf": "102.227.489-90",
  "address": "Rua Cruz e Souza, 537"
}
```

### Criar um passageiro

```
POST: http://localhost:3000/passageiros
Body: {
	"name": "Théo Barreto Silva",
	"birthDate": "1963-08-22",
	"cpf": "102.227.489-90",
	"address": "Rua Cruz e Souza, 537"
}
```
**Resultado:**

```
{
  "blocked": false,
  "viagens": [],
  "name": "Théo Barreto Silva",
  "birthDate": "1963-08-22",
  "cpf": "102.227.489-90",
  "address": "Rua Cruz e Souza, 537"
}
```

### Atualizar dados do passageiro

```
PUT: http://localhost:3000/passageiros/:cpfPassageiro
Body: {
	"name": "Mota",
	"birthDate": "1963-08-22",
	"cpf": "628.897.376-04",
	"address": "Rua Cruz e Souza, 585"
}
```
**Resultado:**

```
{
	"blocked": false,
	"viagens": [],
	"name": "Mota",
	"birthDate": "1963-08-22",
	"cpf": "628.897.376-04",
	"address": "Rua Cruz e Souza, 585"
}
```

### Exclusão de passageiro

```
DELETE: http://localhost:3000/passageiros/:cpfPassageiro
```

## Viagens

### Listar viagens

```
GET: http://localhost:3000/viagens
```
**Resultado:**

```
{
  "idPassageiro": "102.227.489-90",
  "enderecoOrigem": "Casa da Segurança - Autorizada Khronos",
  "enderecoDestino": "Rua Cruz e Souza, 537"
}
```

### Solicitar uma viagem

```
POST: http://localhost:3000/viagens
```
**Resultado:**

```
{
  "idPassageiro": "102.227.489-90",
  "enderecoOrigem": "Casa da Segurança - Autorizada Khronos",
  "enderecoDestino": "Rua Cruz e Souza, 537"
}
```

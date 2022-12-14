# Custom Mail

```text
Простое приложение для отправки писем с сайта.
Frontend выполнен на vue js ( quasar framework, pinia, axios, typescript )
Backend на nest js ( swagger, typeorm, sqlite, class-validator, class-transformer )
```

## Frontend

### Описание

```text

Приложение состоит из следующих страниц:
1. Страница со всеми сообщениями
2. Страница с формой для отправки сообщения
3. Страница с информацией о выбранном сообщении
4. Страница со списком отправленных сообщений
5. Страница со списком отложенных сообщений
6. Страница авторизации
7. Страница регистрации

```
Использовались следующие библиотеки:  
[Quasar](https://quasar.dev/) - фреймворк для разработки приложений на vue js  
[Pinia](https://pinia.esm.dev/) для управления состоянием.  
[Vue Router](https://router.vuejs.org/) для роутинга.  
[Vue Axios](https://www.npmjs.com/package/vue-axios) для запросов к backend.  
[Typescript](https://www.typescriptlang.org/) для типизации кода.  

### Запуск

```bash
cd custom_mail_frontend
npm install
npm run debug
```

## Backend

### Описание
```text
Backend имеет следующие модули:
- auth - модуль авторизации ( имеет swagger документацию )
- mail - модуль отправки писем ( имеет swagger документацию )
- user - модуль пользователей 

Все модули имеют свои контроллеры, сервисы, модели, dto, интерфейсы, валидаторы и т.д.
Так - же имеется swagger, в котором находятся обшая информация об API.
Swagger доступен только в режиме разработки.
Доступен по адресу http://localhost:3000/

```
Использовались следующие библиотеки:  
[Nest](https://nestjs.com/) для создания сервера.  
[TypeORM](https://typeorm.io/#/) для работы с базой данных.  
[Class Validator](https://www.npmjs.com/package/@nestjs/class-validator/v/0.13.1) для валидации данных.  
[Class Transformer](https://www.npmjs.com/package/class-transformer) для преобразования данных.  
[Swagger](https://www.npmjs.com/package/@nestjs/swagger) для документации API.  
[Typescript](https://www.typescriptlang.org/) для типизации кода.  
[JWT](https://www.npmjs.com/package/jsonwebtoken) для авторизации.

### Запуск

```bash
cd custom_mail_backend
npm install
npm run test:watch
npm run test:e2e
npm run start:dev
```

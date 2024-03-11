# Описание

Этот репозиторий содержит код для NestJS приложения, в котором реализован единственный сервис - `RequestService`, предназначенный для выполнения HTTP запросов с использованием библиотеки Axios.

## Установка

Перед началом использования убедитесь, что у вас установлен Node.js и npm.

1. Клонируйте репозиторий на свой локальный компьютер:

```bash
git clone github.com/Dmity627/sdk-request-module
```

2. Установите зависимости:

```bash
npm install
```
## Запуск

1. Для запуска development версии:

```bash
npm run start:dev
```

1. Для запуска production версии:

```bash
npm run start
```


## Использование

1. Импортируйте `RequestService` в вашем приложении:

```typescript
import { Injectable } from '@nestjs/common';
import { RequestService } from './request.service';

export class YourService {
  constructor(private readonly requestService: RequestService {}
}
```

2. Вызывайте методы `get`, `post`, `put`, `patch` или `delete` для выполнения соответствующих HTTP запросов:

```typescript
async yourMethod() {
  try {
    const response = await this.requestService.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error.message);
  }
}
```

## Методы

### `get(url: string): Promise<AxiosResponse>`

Выполняет HTTP GET запрос по указанному URL.

### `post(url: string, data: any): Promise<AxiosResponse>`

Выполняет HTTP POST запрос по указанному URL с переданными данными.

### `put(url: string, data: any): Promise<AxiosResponse>`

Выполняет HTTP PUT запрос по указанному URL с переданными данными.

### `patch(url: string, data: any): Promise<AxiosResponse>`

Выполняет HTTP PATCH запрос по указанному URL с переданными данными.

### `delete(url: string): Promise<AxiosResponse>`

Выполняет HTTP DELETE запрос по указанному URL.

## Обработка ошибок

В случае ошибки при выполнении запроса, будет выброшено исключение с описанием ошибки.

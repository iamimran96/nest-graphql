# NestJS GraphQL API

A GraphQL API built with NestJS and TypeScript, featuring user management and settings.

## Description

This project demonstrates a NestJS application with GraphQL integration, implementing queries, mutations, and field resolvers for user management.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## GraphQL API

Once the server is running, access the GraphQL Playground at `http://localhost:3000/graphql`

### Schema

#### Types

**User**
```graphql
type User {
  id: Int!
  username: String!
  displayName: String
  settings: UserSetting
}
```

**UserSetting**
```graphql
type UserSetting {
  userId: Int!
  receiveNotifications: Boolean!
  receiveEmails: Boolean!
}
```

**CreateUserInput**
```graphql
input CreateUserInput {
  username: String!
  displayName: String
}
```

### Queries

**Get all users**
```graphql
query {
  getUsers {
    id
    username
    displayName
  }
}
```

**Get user by ID**
```graphql
query {
  getUserById(id: 1) {
    id
    username
    displayName
  }
}
```

**Get user with settings**
```graphql
query {
  getUsers {
    id
    username
    displayName
    settings {
      userId
      receiveNotifications
      receiveEmails
    }
  }
}
```

### Mutations

**Create a new user**
```graphql
mutation {
  createUser(createUserInput: {
    username: "john"
    displayName: "John Doe"
  }) {
    id
    username
    displayName
  }
}
```

## Project Structure

```
src/
├── graphql/
│   ├── models/
│   │   ├── user.ts              # User GraphQL model
│   │   └── user.setting.ts      # UserSetting GraphQL model
│   ├── inputs/
│   │   └── create.user.input.ts # Input type for creating users
│   └── resolvers/
│       └── UserResolver.ts      # User queries, mutations, and field resolvers
├── _mocks_/
│   ├── users.ts                 # Mock user data
│   └── user.settings.ts         # Mock user settings data
└── app.module.ts                # Main application module
```

## Features

- GraphQL API with NestJS
- Code-first approach using TypeScript decorators
- User management (CRUD operations)
- User settings with field resolvers
- Input types for mutations
- Mock data storage

## Tech Stack

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [GraphQL](https://graphql.org/) - Query language for APIs
- [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start) - GraphQL module for NestJS
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL server

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS GraphQL Documentation](https://docs.nestjs.com/graphql/quick-start)
- [GraphQL Documentation](https://graphql.org/learn/)

## License

This project is [MIT licensed](LICENSE).

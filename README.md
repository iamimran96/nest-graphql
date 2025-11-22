# NestJS GraphQL API

A GraphQL API built with NestJS and TypeScript, featuring user management with PostgreSQL database integration.

## Description

This project demonstrates a NestJS application with GraphQL integration using Apollo Server, implementing queries, mutations, and field resolvers for user management. It uses TypeORM for database operations with PostgreSQL.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- pnpm package manager

## Database Setup

Create a PostgreSQL database with the following configuration (or update [app.module.ts](src/app.module.ts) with your settings):

- **Host:** localhost
- **Port:** 5432
- **Username:** postgres
- **Password:** root
- **Database:** nest-graphql
- **Schema:** public

## Project Setup

```bash
$ pnpm install
```

## Compile and Run the Project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run Tests

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

#### Input Types

**CreateUserInput**
```graphql
input CreateUserInput {
  username: String!
  displayName: String
}
```

**CreateUserSettingsInput**
```graphql
input CreateUserSettingsInput {
  userId: Int!
  receiveNotifications: Boolean!
  receiveEmails: Boolean!
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

**Create user settings**
```graphql
mutation {
  createUserSetting(createUserSettingInput: {
    userId: 1
    receiveNotifications: true
    receiveEmails: false
  }) {
    userId
    receiveNotifications
    receiveEmails
  }
}
```

## Project Structure

```
src/
├── graphql/
│   ├── models/
│   │   ├── user.ts                    # User GraphQL model
│   │   └── user.setting.ts            # UserSetting GraphQL model
│   ├── inputs/
│   │   ├── create.user.input.ts       # Input type for creating users
│   │   └── create.user.setting.ts     # Input type for creating user settings
│   ├── resolvers/
│   │   └── user.setting.resolver.ts   # User settings mutations
│   └── schema.gql                      # Auto-generated GraphQL schema
├── users/
│   ├── user.module.ts                  # Users module
│   ├── user.service.ts                 # User business logic
│   ├── user.resolver.ts                # User queries, mutations, and field resolvers
│   ├── user.setting.service.ts         # User settings business logic
│   └── user.setting.resolver.ts        # User settings resolvers
└── app.module.ts                       # Main application module
```

## Features

- GraphQL API with NestJS
- Code-first approach using TypeScript decorators
- PostgreSQL database integration with TypeORM
- User management (CRUD operations)
- User settings with field resolvers
- Input types for mutations
- Auto-generated GraphQL schema
- Module-based architecture

## Tech Stack

- [NestJS](https://nestjs.com/) - Progressive Node.js framework
- [GraphQL](https://graphql.org/) - Query language for APIs
- [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start) - GraphQL module for NestJS
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL server
- [TypeORM](https://typeorm.io/) - ORM for TypeScript and JavaScript
- [PostgreSQL](https://www.postgresql.org/) - Open source relational database

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS GraphQL Documentation](https://docs.nestjs.com/graphql/quick-start)
- [GraphQL Documentation](https://graphql.org/learn/)
- [TypeORM Documentation](https://typeorm.io/)

## License

This project is [MIT licensed](LICENSE).

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './graphql/resolvers/user.resolver';
import { UserSettingResolver } from './graphql/resolvers/user.setting.resolver';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/graphql/schema.gql",
    }),
  ],
  controllers: [],
  providers: [UserResolver, UserSettingResolver],
})
export class AppModule {}

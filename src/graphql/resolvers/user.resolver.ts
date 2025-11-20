import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { User } from "../models/user";
import { mockUsers } from "src/_mocks_/users";
import { UserSetting } from "../models/user.setting";
import { mockUserSettings } from "src/_mocks_/user.settings";
import { CreateUserInput } from "../inputs/create.user.input";

@Resolver(of => User)
export class UserResolver {
    @Query((returns) => [User])
    getUsers(): User[] {
        return mockUsers;
    }

    @Query((returns) => User, { nullable: true })
    getUserById(@Args("id", { type: () => Int }) id: number): User | undefined {
        return mockUsers.find(user => user.id === id);
    }

    @ResolveField((returns) => UserSetting, { name: "settings", nullable: true })
    getUserSettings(
        @Parent() user: User,
        //@Args("includePrivate", { type: () => Boolean, defaultValue: false }) includePrivate: boolean
    ): UserSetting | undefined {
        const setting = mockUserSettings.find(us => us.userId === user.id);
        return setting;
    }

    @Mutation((returns) => User)
    //createUser(@Args("username") username: string, @Args("displayName", { nullable: true }) displayName?: string): User {
    createUser(@Args("createUserInput") createUserInput: CreateUserInput): User {
        const newUser: User = {
            id: mockUsers.length + 1,
            ...createUserInput
        };
        mockUsers.push(newUser);
        return newUser;
    }
}

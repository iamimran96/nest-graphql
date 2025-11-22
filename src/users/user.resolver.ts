import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { User } from "src/graphql/models/user";
import { CreateUserInput } from "src/graphql/inputs/create.user.input";
import { UserService } from "./user.service";
import { UserSettingService } from "./user.setting.service";

@Resolver(of => User)
export class UserResolver {

    constructor(
        private userService: UserService,
        private userSettingService: UserSettingService,
    ) {}

    @Query((returns) => [User])
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Query((returns) => User, { nullable: true })
    async getUserById(@Args("id", { type: () => Int }) id: number): Promise<User | null> {
        return await this.userService.getUserById(id);
    }

  // @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  // getUserSettings(@Parent() user: User) {
  //   return this.userSettingService.getUserSettingById(user.id);
  // }

  @Mutation((returns) => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
}

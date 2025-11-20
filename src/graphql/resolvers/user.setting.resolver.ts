import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { UserSetting } from "../models/user.setting";
import { mockUserSettings } from "src/_mocks_/user.settings";
import { CreateUserSettingsInput } from "../inputs/create.user.setting";

@Resolver()
export class UserSettingResolver {

    @Mutation((returns) => UserSetting)
    createUserSetting(@Args("createUserSettingInput") createUserSettingInput: CreateUserSettingsInput): UserSetting {
        const newUserSetting: UserSetting = {
            ...createUserSettingInput
        };
        mockUserSettings.push(newUserSetting);
        return newUserSetting;
    }
}

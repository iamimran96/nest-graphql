import { Resolver, Args, ResolveField, Mutation } from "@nestjs/graphql";
import { UserSettingService } from "../../users/user.setting.service";
import { UserSetting } from "../models/user.setting";
import { CreateUserSettingsInput } from "../inputs/create.user.setting";

@Resolver()
export class UserSettingResolver {
    constructor(private userSettingsService: UserSettingService) {}

    @Mutation((returns) => UserSetting)
    async createUserSetting(@Args("createUserSettingInput") createUserSettingInput: CreateUserSettingsInput): Promise<UserSetting> {
        const userSetting = await this.userSettingsService.createUserSettings(createUserSettingInput);
        return userSetting;
    }
}

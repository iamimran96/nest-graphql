import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/user';
import { UserSetting } from 'src/graphql/models/user.setting';
import { UserService } from './user.service';
import { UserSettingService } from './user.setting.service';
import { UserResolver } from './user.resolver';
import { UserSettingResolver } from 'src/graphql/resolvers/user.setting.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([User, UserSetting])],
    controllers: [],
    providers: [UserService, UserSettingService, UserResolver, UserSettingResolver],
})

export class UserModule {}
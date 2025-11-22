import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Entity, Column, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity()
export class UserSetting {
    @PrimaryColumn()
    @Field((type) => Int)
    userId: number;

    @Column({ default: false })
    @Field({ defaultValue: false })
    receiveNotifications: boolean;

    @Column({ default: false })
    @Field({ defaultValue: false })
    receiveEmails: boolean;
}
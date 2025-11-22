import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/graphql/models/user";
import { CreateUserInput } from "src/graphql/inputs/create.user.input";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find({ relations: ["settings"] });
    }

    async getUserById(id: number): Promise<User | null> {
        const sanitizedId = Number(id);
        if (isNaN(sanitizedId)) {
            throw new Error("Invalid ID");
        }
        return await this.userRepository.findOne(
            { where: { id: sanitizedId }, relations: ["settings"] });
    }

    async createUser(createUserData: CreateUserInput): Promise<User> {
        const newUser = this.userRepository.create(createUserData);
        return await this.userRepository.save(newUser);
    }
}
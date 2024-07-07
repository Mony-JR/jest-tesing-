// src/services/userService.ts

import { UserRepo } from "../user Repo/user.repo";
import { UserServicePrams, UserServicetype } from "./type";

export class UserService extends UserRepo  {
    async getUserById(id: string): Promise<UserServicetype | null> {
        return this.getUserById(id)
    }

    async getUsers(): Promise<UserServicetype[]|null> {
        return this.getUsers()
    }

    async createUser(userCreationParams: UserServicePrams): Promise<UserServicetype|null> {
        const newUser = this.createUser(userCreationParams);
        return newUser;
    }

    async updateUser(id: string, userDetails: UserServicePrams): Promise<UserServicetype | null> {
        return this.updateUser(id,userDetails);
    }

    async deleteUser(id: string): Promise<UserServicetype | null> {
        return this.deleteUser(id);
    }
}

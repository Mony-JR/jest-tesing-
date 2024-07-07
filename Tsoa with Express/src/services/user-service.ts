// src/services/userService.ts

import { UserRepo } from "../user Repo/user.repo";
import { UserServicePrams } from "./type";

export class UserService extends UserRepo  {
    private useReop= new UserRepo();
    async getUserById(id: string): Promise<any | null> {
        return this.useReop.getUserById(id)
    }

    async getUsers(page?:number,limit?:number): Promise<any|null> {
        return this.useReop.getUsers(page,limit)
    }

    async createUser(userCreationParams: UserServicePrams): Promise<any|null> {
        const newUser = this.createUser(userCreationParams);
        return newUser;
    }

    async updateUser(id: string, userDetails: UserServicePrams): Promise<any | null> {
        return this.useReop.updateUser(id,userDetails);
    }

    async deleteUser(id: string): Promise<any | null> {
        return this.useReop.deleteUser(id);
    }
}

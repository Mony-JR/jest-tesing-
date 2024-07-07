// src/services/userService.ts

import { User, UserModel, UserCreationParams } from "../Models/user";

export class UserRepo {
    async getUserById(id: string): Promise<User | null> {
        return UserModel.findById(id).exec();
    }

    async getUsers(page?: number, limit?: number): Promise<User[] | null> {
        if (page !== undefined && limit !== undefined) {
            const skip = (page - 1) * limit;
            return await UserModel.find().skip(skip).limit(limit).exec();
        } else {
            return await UserModel.find().exec();
        }

    }

    async createUser(userCreationParams: UserCreationParams): Promise<User | null> {
        const newUser = new UserModel(userCreationParams);
        return newUser.save();
    }

    async updateUser(id: string, userDetails: UserCreationParams): Promise<User | null> {
        return UserModel.findByIdAndUpdate(id, userDetails, { new: true }).exec();
    }

    async deleteUser(id: string): Promise<User | null> {
        return UserModel.findByIdAndDelete(id).exec();
    }
}

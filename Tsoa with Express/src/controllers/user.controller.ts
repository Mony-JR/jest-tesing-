// src/controllers/userController.ts
import { Controller, Route, Post, Get, Body, Put, Path,Delete} from 'tsoa';
import { UserService } from '../services/user-service';
import { UserServicePrams, UserServicetype } from '../services/type';


@Route("/v1/users")
export class UserController extends Controller {
    private userService: UserService = new UserService();

    @Post("/")
    public async createNewUser(@Body() requestBody: UserServicePrams): Promise<UserServicetype |null> {
        return this.userService.createUser(requestBody);
    }

    @Get('/{id}')
    public async getUserById(@Path('id') id: string): Promise<UserServicetype | null> {
        return this.userService.getUserById(id);
    }

    @Put("/{id}")
    public async updateUser(@Path('id') id: string, @Body() requestBody: UserServicePrams): Promise<UserServicetype | null> {
        return this.userService.updateUser(id, requestBody);
    }

    @Get("/")
    public async getUsers(): Promise<UserServicetype[]|null> {
        return this.userService.getUsers();
    }

    @Delete("/{id}")
    public async deleteUser(@Path('id') id: string): Promise<UserServicetype | null> {
        return this.userService.deleteUser(id);
    }
}

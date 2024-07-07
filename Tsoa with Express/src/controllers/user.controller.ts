// src/controllers/userController.ts
import { Controller, Route, Post, Get, Body, Put, Path,Delete} from 'tsoa';
import { UserCreationParams, User } from '../Models/user';
import { UserService } from '../services/user-service';


@Route("/v1/users")
export class UserController extends Controller {
    private userService: UserService = new UserService();

    @Post("/")
    public async createNewUser(@Body() requestBody: UserCreationParams): Promise<User> {
        return this.userService.createUser(requestBody);
    }

    @Get('/{id}')
    public async getUserById(@Path('id') id: string): Promise<User | null> {
        return this.userService.getUserById(id);
    }

    @Put("/{id}")
    public async updateUser(@Path('id') id: string, @Body() requestBody: UserCreationParams): Promise<User | null> {
        return this.userService.updateUser(id, requestBody);
    }

    @Get("/")
    public async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Delete("/{id}")
    public async deleteUser(@Path('id') id: string): Promise<User | null> {
        return this.userService.deleteUser(id);
    }
}

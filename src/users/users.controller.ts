import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get() // Get /users
  findAll() {
    return ['User 1', 'User 2', 'User 3'];
  }

  @Get('nested-url')
  findAllNestedUrl() {
    return ['Nested URL 1', 'Nested URL 2', 'Nested URL 3'];
  }

  @Get('with-query')
  getAllUserWithQuery(@Query('role') role: 'admin' | 'user') {
    return this.userService.findAllWithRole(role);
  }

  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: number) {
    // return `User with ID: ${id}`;
    return this.userService.getUserById(id);
  }

  @Post('create')
  createUser(@Body() user: any) {
    // return {
    //   message: 'User created successfully',
    //   data: user,
    // };
    return this.userService.createUser(user);
  }

  @Patch()
  updateUser(@Param('id') id: number, @Body() user: any) {
    // return {
    //   message: 'User updated successfully',
    //   data: { id, ...user },
    // };
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    // return {
    //   message: 'User deleted successfully',
    //   data: { id },
    // };
    return this.userService.deleteUser(id);
  }
}

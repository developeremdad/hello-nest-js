import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // Get /users
  findAll() {
    return ['User 1', 'User 2', 'User 3'];
  }

  @Get('nested-url')
  findAllNestedUrl() {
    return ['Nested URL 1', 'Nested URL 2', 'Nested URL 3'];
  }

  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: number) {
    return `User with ID: ${id}`;
  }

  @Post('create')
  createUser(@Body() user: any) {
    return {
      message: 'User created successfully',
      data: user,
    };
  }

  @Patch()
  updateUser(@Param('id') id: number, @Body() user: any) {
    return {
      message: 'User updated successfully',
      data: { id, ...user },
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return {
      message: 'User deleted successfully',
      data: { id },
    };
  }
}

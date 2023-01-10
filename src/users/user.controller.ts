import { Controller, Get, Post, Body, Patch, Param, Delete, Put, } from '@nestjs/common';
import { userService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { User } from './entities/user.entity';

@Controller('user')
export class userController {
  constructor(private readonly userService: userService) {}

  @IsPublic()
  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Get(':id')
  findByEmail(@Param('id') id: string) {
    return this.userService.findByEmail(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body()
    userData: { name: string, email: string, password: string }): Promise<User> {
      const {name,email,password} = userData
    return this.userService.updateUser({
      where: {id: id},
      data: {name, email}
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

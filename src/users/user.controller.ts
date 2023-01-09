import { Controller, Get, Post, Body, Patch, Param, Delete, } from '@nestjs/common';
import { userService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

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
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

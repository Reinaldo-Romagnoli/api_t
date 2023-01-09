import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { userService } from './user.service';
import { userController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [userController],
  providers: [userService],
  exports:  [ userService ]
})
export class userModule {}

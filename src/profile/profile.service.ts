import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Profile } from './entities/profile.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const data: Prisma.ProfileCreateInput = {
      ...createProfileDto,
    };

    const createdProfile = await this.prisma.profile.create({ data });

    return {
      ...createdProfile,
    };
  }


  findByCgm(cgm: string) {
    return this.prisma.profile.findUnique({ where: { cgm } });
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}

import { IsString } from 'class-validator';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto extends Profile {
    @IsString()
    cgm: string;
    
    @IsString()
    name_res: string;
  }
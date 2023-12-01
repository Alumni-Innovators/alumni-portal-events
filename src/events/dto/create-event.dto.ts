import { IsBoolean, IsDate, IsString } from 'class-validator';
export class CreateEventDto {
  @IsString()
  name: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsString()
  venue: string;

  @IsBoolean()
  isApproved: boolean;

  @IsString()
  createdBy: string;

  @IsString()
  approvedBy: string;
}

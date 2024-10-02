import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class FrequencyAnalysisDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    text: string
}

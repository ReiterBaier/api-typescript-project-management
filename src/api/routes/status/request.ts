import { IsNotEmpty, IsString } from 'class-validator'


export class statusValitador {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  focus: string
}

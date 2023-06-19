import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    apellidos: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    passwoord: string;

    @IsString()
    sexo: string;

    @IsNumber()
    edad:number;
}

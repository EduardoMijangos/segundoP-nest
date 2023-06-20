import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength} from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsString()
    @IsNotEmpty()
    apellidos: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    sexo: string;

    @IsNumber()
    edad:number;
}

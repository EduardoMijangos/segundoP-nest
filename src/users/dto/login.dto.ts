import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength} from "class-validator";

export class loginDto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}

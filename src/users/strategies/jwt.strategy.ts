import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt'


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository <User>){
            super({
                jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
                SecretOrkey:'secret'});
        }

        async validate(payload: {id:number, name: string, apellidos: string}):Promise<User>{
            const{id} = payload;
            const user = await this.userRepo.findOneBy({id});
            if(!user){
                throw new UnauthorizedException('Token no valido');
            }
            if(!user.estate){
                throw new UnauthorizedException('No activo');
            }
            return user;
        }

}
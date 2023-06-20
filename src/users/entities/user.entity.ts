import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')

export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    apellidos: string;

    @Column('text',{unique: true})
    email: string;

    @Column('text', {select: false})
    password: string;
    
    @Column('bool', {default: true})
    estate: boolean;

    @Column('text')
    sexo: string;

    @Column('int', {nullable: true})
    edad: number;
}

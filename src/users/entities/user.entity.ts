import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')

export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    apellidos: string;

    @Column('text')
    email: string;

    @Column('text')
    passwoord: string;
    
    @Column('bool', {default: false})
    estate: boolean;

    @Column('text')
    sexo: string;

    @Column('text')
    edad: string;
}

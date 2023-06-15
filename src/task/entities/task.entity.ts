import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')


export class Task {

@PrimaryGeneratedColumn()
id: number;

@Column('text')
title: string;

@Column('text')
description: string;

@Column('bool',{default: false})
estate: boolean

@Column()
important: number;
}



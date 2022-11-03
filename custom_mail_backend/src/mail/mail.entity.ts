import {Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('mail')
export class Mail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sender: string

    @Column()
    receiver: string

    @Column()
    title: string;

    @Column()
    message: string;
}
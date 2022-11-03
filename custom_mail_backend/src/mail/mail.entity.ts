import {Entity, Column, PrimaryGeneratedColumn } from "typeorm"

export interface MailCreationAttributes {
    sender: string;
    receiver: string;
    title: string;
    message: string;
}

@Entity('mail')
export class Mail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    sender: string

    @Column({ nullable: false })
    receiver: string

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    message: string;
}
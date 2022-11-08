import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    mail: string;

    @Column({ nullable: false })
    password: string;
}
import { Column, DataType, ForeignKey, IsUUID, Model, PrimaryKey, Sequelize, Table } from "sequelize-typescript";
import { STRING, TEXT } from "sequelize";
import { Director } from "./Director";

@Table({tableName:'film', timestamps:false})
export class Film extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()')
    })
    id!:string;

    @Column({
        type:STRING,
        field:'title'
    })
    title:string;

    @Column({
        type:TEXT,
        field:'description'
    })
    description:string;

    @Column({
        type:TEXT,
        field:'review'
    })
    review:string;

    @ForeignKey(() => Director)
    @Column({
        field: 'director_id',
        type: DataType.UUID,
    })
    directorId!: string;

}
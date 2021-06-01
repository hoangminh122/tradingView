import { IsUUID } from "class-validator";
import { Column, DataType, Model, PrimaryKey, Sequelize, Table } from "sequelize-typescript";
import { STRING } from "sequelize";

@Table({tableName:'genre',timestamps:false})
export class Genre extends Model {
    @PrimaryKey
    @IsUUID(4)
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()')
    })
    id!:string;

    @Column({
        type:STRING,
        field:'type_film'
    })
    type:string;

}
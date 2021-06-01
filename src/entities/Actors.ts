
import { IsUUID, Model, PrimaryKey, Table, Sequelize } from 'sequelize-typescript';
import { NUMBER, STRING, UUID, UUIDV4 } from 'sequelize';
import { Column } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { GenderEnum } from 'src/shared/enum/gender.enum';
import { DATE } from 'sequelize';


@Table({tableName:'actor' , timestamps:false})
export class Actor extends Model{
    
    @IsUUID(4)
    @PrimaryKey
    @Column({
        type:DataType.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()')
    })
    id!:string;

    @Column({
        type:STRING,
        field:'name'
    })
    name:string;

    @Column({
        type:STRING,
        field:'name'
    })
    gender:GenderEnum;

    @Column({
        type: NUMBER,
        field:'name'
    })
    age:number;

    @Column({
        type: DATE,
        field:'name'
    })
    dob:Date



}
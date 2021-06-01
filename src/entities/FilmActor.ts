import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Actor } from "./Actors";
import { Film } from "./Film";

@Table({tableName:'film_actor',timestamps:false})
export class FilmActor extends Model {
    @ForeignKey(()=>Film)
    @Column({
        field:'film_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    filmId!:string;

    @ForeignKey(()=>Actor)
    @Column({
        field:'actor_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    actorId!:string
}
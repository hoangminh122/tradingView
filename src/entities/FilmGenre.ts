import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Film } from "./Film";
import { Genre } from "./Genre";

@Table({tableName:'film_genre',timestamps:false})
export class FilmGenre extends Model {
    @ForeignKey(()=>Film)
    @Column({
        field:'film_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    filmId!:string;

    @ForeignKey(()=>Genre)
    @Column({
        field:'genre_id',
        primaryKey:true,
        type:DataType.STRING(50)
    })
    genreId!:string
}
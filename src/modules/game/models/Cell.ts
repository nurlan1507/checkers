import { Colors } from "../constants/Colors";
import { Checker } from "./Checher";
import {Board} from './Board'

export class Cell{
    readonly x:number;
    readonly y: number;
    readonly color: Colors;
    checker: Checker | null;
    board:Board;
    available:Boolean; //can move there?
    id:number //reack key   


    constructor(board:Board,x:number, y:number,color:Colors, checker: Checker | null ){
        this.x = x
        this.y = y 
        this.color = color
        this.board = board
        this.checker = checker
        this.available = false
        this.id = Math.random()
    }
}
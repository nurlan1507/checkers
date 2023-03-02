import { Colors } from "../constants/Colors"
import { Cell } from "./Cell"
import img from '../assets/blue-pawn.png'

export enum FIGURE_NAMES{
    KING = "DAMKA",
    PAWN = "PAWN"
}
   

export class Checker{
    color:Colors
    logo: typeof img | null
    cell: Cell    
    id:number
    
    constructor(color:Colors, cell:Cell){
        this.cell = cell
        this.cell.checker = this
        this.color = color
        this.logo = null
        this.id = Math.random()
    }



    canMove(cell:Cell):Boolean{
        return true
    }

    moveFigure(target:Cell){
        this.cell = target
    }


}
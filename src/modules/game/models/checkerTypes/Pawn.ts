import { Checker } from "../Checher"
import {Colors} from "../../constants/Colors"
import {Cell} from "../Cell"

import blackPawn from "../../assets/blue-pawn.png"
import whitePawn from "../../assets/red-pawn.png"


export class Pawn extends Checker{

    constructor(color:Colors, cell:Cell){
        super(color,cell)
        if(color === Colors.BLACK){
            this.logo = blackPawn
        }
        else if(color = Colors.WHITE){
            this.logo = whitePawn
        }
    }

    canMove(cell: Cell): Boolean {
        return true
    }

    moveFigure(target: Cell): void {
        this.cell = target
    }



}
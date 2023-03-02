import { Checker } from "../Checher";
import {Colors} from "../../constants/Colors"
import {Cell} from "../Cell"


import blackKing from "../../assets/blue-king.png"
import whiteKing from "../../assets/red-king.png"


export class King extends Checker{


    constructor(color:Colors, cell:Cell){
        super(color,cell)
        if(color === Colors.BLACK){
            this.logo = blackKing 
        }
        else if(color = Colors.WHITE){
            this.logo = whiteKing
        }
    }

    canMove(cell: Cell): Boolean {
        return true
    }

    moveFigure(target: Cell): void {
        this.cell = target
    }

}
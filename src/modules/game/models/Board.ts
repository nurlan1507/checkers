import {Cell} from './Cell'
import {Colors} from '../constants/Colors'
import { Pawn } from './checkerTypes/Pawn'
import {King} from './checkerTypes/King'
export class Board{
    cells: Cell[][] = []


    public initCells(){
        for(let i = 0 ; i < 8 ; i++){
            const row:Cell[] = []
            for(let j = 0; j <8; j++){
                if((i+j) % 2 !== 0){
                    const newCell = new Cell(this,i, j,Colors.BLACK, null ) //black cells
                    row.push(newCell)
                }else{
                    const newCell = new Cell(this, i, j, Colors.WHITE, null)  //white cells
                    row.push(newCell)
                }
                
            }
            this.cells.push(row)
        }
    }

    public addCheckers(){
        new Pawn(Colors.WHITE, this.cells[0][1])
        new Pawn(Colors.WHITE, this.cells[0][3])
        new Pawn(Colors.WHITE, this.cells[0][5])
        new Pawn(Colors.WHITE, this.cells[0][7])
        new Pawn(Colors.WHITE, this.cells[1][0])
        new Pawn(Colors.WHITE, this.cells[1][2])
        new Pawn(Colors.WHITE, this.cells[1][4])
        new Pawn(Colors.WHITE, this.cells[1][6])
        new Pawn(Colors.WHITE, this.cells[2][1])
        new Pawn(Colors.WHITE, this.cells[2][3])
        new Pawn(Colors.WHITE, this.cells[2][5])
        new Pawn(Colors.WHITE, this.cells[2][7])



        new Pawn(Colors.BLACK, this.cells[7][0])
        new Pawn(Colors.BLACK, this.cells[7][2])
        new Pawn(Colors.BLACK, this.cells[7][4])
        new Pawn(Colors.BLACK, this.cells[7][6])
        new Pawn(Colors.BLACK, this.cells[6][1])
        new Pawn(Colors.BLACK, this.cells[6][3])
        new Pawn(Colors.BLACK, this.cells[6][5])
        new Pawn(Colors.BLACK, this.cells[6][7])
        new Pawn(Colors.BLACK, this.cells[5][0])
        new Pawn(Colors.BLACK, this.cells[5][2])
        new Pawn(Colors.BLACK, this.cells[5][4])
        new Pawn(Colors.BLACK, this.cells[5][6])
    }


}
import { FC, useEffect, useState } from "react";
import { CellComponent } from "../components/CellComponent";
import {Board} from '../models/Board'
import styles from './board.module.css'
import { Cell } from "../models/Cell";
import React from 'react'
import { log } from "console";
export const Game : FC= ()=>{

    const [board, setBoard] = useState(new Board())
 

    const restart =()=>{
        const newBoard = new Board()
        newBoard.initCells()
        newBoard.addCheckers()
        setBoard(newBoard)
    }

    useEffect(()=>{
        restart()
    },[])

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)


    function onCellClick(cell:Cell){
        setSelectedCell(cell)
        alert(cell.x + " " +    cell.y)
    }
    return (
        <div className={styles.board}>
            {board.cells.map((row, index)=>
               <React.Fragment key={index}>
                    {row.map(cell=><CellComponent 
                        Cell={cell}
                        selected={selectedCell?.x == cell.x && selectedCell.y == cell.y}
                        click = {onCellClick}
                        />
                    )}
               </React.Fragment>
            )}
        </div>
    )
}
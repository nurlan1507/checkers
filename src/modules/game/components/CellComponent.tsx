import { FC } from "react";
import { Cell } from "../models/Cell";
import {Colors} from "../constants/Colors"
import styles from "../ui/board.module.css"

interface CellProps{
    Cell:Cell,
    selected:Boolean,
    click: (cell:Cell)=>void
}


export const CellComponent:FC<CellProps>=( {Cell, selected,click} )=>{
    if(Cell.color == Colors.WHITE ){
        return(
            <div className={`${styles.cell} ${styles.white} ${styles.selectedCell}`} onClick={()=>click(Cell)}>
                {Cell.checker?.logo && <img src={Cell.checker.logo} className={styles.checker}/>}
            </div>
        )
    }
    return <div className={`${styles.cell} ${styles.black} ${selected?styles.selectedCell:''}`} onClick={()=>click(Cell)}>
         {Cell.checker?.logo && <img src={Cell.checker.logo} className={styles.checker}/>}
    </div>
   
    
}
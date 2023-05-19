import React, {useState} from "react";
import styles from './FilterContainer.module.css'
// import { VisibilityIcon, VisibilityOffIcon } from '@mui/icons-material/Visibility';

export default function FilterContainer({children, className, filter, onClick}) {

    // console.log(filter)
    return (
        <div className={styles.filter} onClick={onClick}>
        { !filter &&
            <div className="d-flex align-items-center h6"><box-icon name="low-vision" class="me-2"></box-icon> Ocultar Completados</div>        
        }
        {filter && 
            <div className="d-flex align-items-center h6"><box-icon name="revision" class="me-2"></box-icon>Mostrar Completados</div> 
        }
        </div>
    )
}
import React from "react";
import styles from './Bar.module.css'
import { LinearProgress } from "@mui/material";

export default function Bar ({children, progress}) {
    return (
        <LinearProgress variant="determinate" value={progress} sx={{height: 12, borderRadius: 12, width: "85%", margin: "auto"}}></LinearProgress>
    )
}
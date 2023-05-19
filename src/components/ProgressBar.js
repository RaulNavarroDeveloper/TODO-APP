import React,  {useState} from "react";
import ProgressContainer from "./ProgressContainer";
import TasksLeft from "./TasksLeft";
import Bar from "./Bar";
import PercentageProgress from "./PercentageProgress";
import { LinearProgress } from "@mui/material";
export default function ProgressBar ({children, quantity, amountCompleted, loading}) {
    const progress = quantity == 0 ? 0 : Math.round(amountCompleted / quantity * 100);
    return (
        <ProgressContainer className="">
            <TasksLeft className="mt-2 h5 text-center"><b>{!loading && quantity - amountCompleted}</b>{loading && "..."} {quantity - amountCompleted == 1 ? "Tarea Restante" : "Tareas Restantes"}</TasksLeft>
            <Bar progress={progress}></Bar>
            <PercentageProgress className="p-0 m-0 h6 text-center mt-2">{!loading && <b>{progress}%</b>}{loading && "..."} Completado</PercentageProgress>
        </ProgressContainer>
    )
}
"use client"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"



export default function ProgressBar({percentage}: {percentage: number}) {
    return (
        <div className="flex justify-center p-10">
            <div className="w-72 h-72">
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage >= 100 ? "#dc2626" : "#f59e0b",
                        trailColor: "#7f7979cf",
                        textColor: percentage >= 100 ? "#dc2626" : "#f59e0b",
                        textSize: 8
                    })}
                    value={percentage}
                    text={`${percentage}% Gastado`}
                />
            </div>
        </div>
    )
}

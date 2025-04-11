"use client"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"



export default function ProgressBar() {
    return (
        <div className="flex justify-center p-10">
            <div className="w-72 h-72">
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: "#f59e0b",
                        trailColor: "#7f7979cf",
                        textColor: "#f59e0b",
                        textSize: 8
                    })}
                    value={50}
                    text={`${50}% Gastado`}
                />
            </div>
        </div>
    )
}

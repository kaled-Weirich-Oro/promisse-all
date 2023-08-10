'use client'
import { useState } from "react";
import Timer from "../components/Timer";

function Page() {
    const [timers, setTimers] = useState([0, 2]);// useState([0,1,2,3]);
    // console.log("main timers", timers)
    return (
        <Timer timers={timers} setTimers={setTimers} />
    )
}
export default Page;
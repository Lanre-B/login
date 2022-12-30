import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function Dashboard() {
    const nav = useNavigate();
    const location = useLocation()
    const [greeting, setGreeting] = useState("")
    useEffect(() => {
        const d = new Date()
        const hour = d.getHours()
        if (hour < 12) {
            setGreeting("morning")
        } else if (hour < 18) {
            setGreeting("afternoon")
        } else {
            setGreeting("evening")
        }
    }, [])

    useEffect(() => {
        if (!localStorage.getItem("authenticated")) {
            nav("/login");
        }
    }, []);


    return (
        <div>
            <p>Good {greeting} {location.state.name} and welcome to your Dashboard </p>
        </div>
    );
}

export default Dashboard;

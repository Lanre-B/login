import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function Dashboard() {

    const nav = useNavigate();
    const location = useLocation()
    const [greeting, setGreeting] = useState("")
    const [personName, setPersonName] = useState("")
    const d = new Date()
    const hour = d.getHours()
    useEffect(() => {
        if (!localStorage.getItem("authenticated")) {
            nav("/login");
        } else {
            setPersonName(location.state.name)
        }
    }, []);
    useEffect(() => {
        if (hour < 12) {
            setGreeting("morning")
        } else if (hour < 18) {
            setGreeting("afternoon")
        } else {
            setGreeting("evening")
        }
    }, []);


    return (
        <div>
            <p>Good {greeting} {personName.charAt(0).toUpperCase() + personName.slice(1)} and welcome to your
                Dashboard </p>
        </div>
    );
}

export default Dashboard;

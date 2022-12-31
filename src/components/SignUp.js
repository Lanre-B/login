import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsers({name: name, password: password, email: email})
        const account = users.find((user) => user.email === email)
        localStorage.setItem('authenticated', true);
        navigate("/", {state: {name: account.name}})
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <h1>Signup Form</h1>


        </form>

    </div>)

}

export default SignUp;

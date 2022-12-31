import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const navigate = useNavigate();

    const user = [{email: "admin@admin.co", password: "lanre.", name: "lanre"}];

    const handleSubmit = (e) => {
        e.preventDefault();
        const account = user.find((user) => user.email === email)
        if (account && (password === account.password)) {
            localStorage.setItem('authenticated', true);
            navigate("/", {state: {name: account.name}})
        } else {
            setError("Username or password incorrect!");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="email-input"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    ></input>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="password-input"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    ></input>
                </div>

                <input type={"submit"} value="login"></input>
            </form>
            {error !== "" ? <p>{error}</p> : ""}
        </div>
    );
}

export default LoginForm;
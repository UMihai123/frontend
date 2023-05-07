export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
    };

    return (
        <>
            <div className="container w-25 d-flex align-items-center justifiy-content-center" style={{marginTop: "200px" }}> 
                <form className="my-auto">
                    <div className="mb-3">
                        <label for="username" className="form-label">Username:</label>
                        <input type="text" className="form-control" name="username"></input>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password:</label>
                        <input type="password" className="form-control" name="password"></input>
                    </div>
                    <div className = "d-flex justify-content-center">
                        <input type = "submit" className="btn btn-success" value="Login"></input>
                    </div>
                </form>
            </div>
        </>
    );
}
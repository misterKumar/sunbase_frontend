
import './styles.css'; 

const Login = () => {
    return (
        <>
            <div >
                <div className="card-container">
                    <div className="card-header">
                        <h3>Login Page</h3>
                    </div>
                    
                    <div className="card-body">
                        <label htmlFor="loginId">Login Id</label>
                        <input type="text" id="loginId" className="input-lg" />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="input-lg" />
                    </div>
                    <div className="card-footer">
                        <button className="submit-btn">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

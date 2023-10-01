import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserProvider";


const Login = () => {
    const {signIn,signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
     
    signIn(email,password)
    .then(result =>{
        console.log(result.user)
        e.target.reset();
        navigate('/')
    })
    .catch(error =>{
        console.error(error)
    })

   
    }
    const handleGoogleBtn=() =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
   
    }
    return (
        <div className="flex justify-center items-center mt-8">
             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">Please Login Here</h2>
                           <form onSubmit={handleLogin}>

                          
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                           </form>
                           <p>Are you new? please <Link to='/register'><button className="btn btn-link">Register</button></Link></p>
                           <div>
                            <p>Login with google</p>
                           <p className=""><button onClick={handleGoogleBtn} className="btn btn-ghost">Google</button></p>
                           </div>
                        </div>
                    </div>
        </div>
    );
};

export default Login;
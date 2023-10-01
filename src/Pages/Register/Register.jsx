import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserProvider";



const Register = () => {

    const {createUser} = useContext(AuthContext)
    
    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email= e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
         .catch(error => {
            console.error(error)
         })
    }
    return (
        
        <div className="flex justify-center items-center mt-8">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                   <div className="card-body">
                       <h2 className="text-center text-2xl font-bold">Please Register Here</h2>
                      <form onSubmit={handleRegister}>

                      <div className="form-control">
                           <label className="label">
                               <span className="label-text">Name</span>
                           </label>
                           <input type="text" placeholder="name" className="input input-bordered" name="name" required/>
                       </div>
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
                           <button className="btn btn-primary">Register</button>
                       </div>
                      </form>
                      <p>Have An Account? please <Link to='/login'>
                      <button className="btn btn-link">Login</button></Link></p>
                   </div>
               </div>
   </div>
    );
};

export default Register;
import React , { useEffect,  }from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContex";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();
  
  useEffect(()=>{
      if(isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]);
  
  const onSubmit = handleSubmit(async (values) => {
    signin(values)
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, index) => (
          <div key={index} className="bg-red-500 p-2 text-white my-2">
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 px-4 py-2 text-white rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 px-4 py-2 text-white rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            type="submit"
            className="px-4 py-2 text-white my-2 border-2 border-amber-50 w-full"
          >
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          Don't have an account? <Link to='/register' className="text-sky-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

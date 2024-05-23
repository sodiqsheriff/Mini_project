import React, {useState} from 'react'
import { Link } from 'react-router-dom';
export default function Reset (){
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const validate =()=>{
        let tempErrors = {};
        if(!email) tempErrors.email = "Email is required";
    };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()){
          console.log("Form is valid");
        }
      }

     
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 lg:p-8 lg:shadow-lg w-full max-w-[45rem]">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-[#434343]">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange= {(e)=> setEmail(e.target.value)}
            className="mt-2 block w-full px-4 placeholder:text-[#434343] py-3 bg-white bg-opacity-20 text-[#434343] rounded border border-[#D3D3D3] focus:ring focus:ring-opacity-50"
            placeholder="Enter your email address "
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="flex items-center justify-between">
        <nav className="">
          <Link to="/" className='flex items-center gap-1 lg:gap-3 text-sm lg:text-lg font-medium text-[#434343] cursor-pointer hover:underline' >Already a user? <h1 className='text-[#5B5AFB] font-bold'>Sign in</h1></Link>
        </nav>
        <button
          type="submit"
          className="w-2/5 py-4 transition ease-out duration-300 transform hover:bg-blue-700 hover:scale-105 text-md md:text-lg bg-[#5B5AFB]  text-white font-bold rounded-md shadow-md"
        >
          Reset Password
        </button>
        </div>
        
      </form>
    </div>
  </div>
  );
}

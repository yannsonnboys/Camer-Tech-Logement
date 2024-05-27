'use client';

import { ChangeEvent, useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const defaultFormData = {
    name: '',
    email: '',
    password: '',
};

const Auth = () => {
    const [formData, setFormData] = useState(defaultFormData);

    const inputStyles = 'border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none';

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    };


    const {data: session } = useSession();
    // console.log(session);
    const router = useRouter();

    useEffect(() => {
        if (session) router.push("/");
    }, [router, session]);

    const loginHandler = async () => {
      try {
        await signIn();
        // Push the user to the home page
        router.push("/");
      } catch (error) {
        // console.log(error);
        toast.error("Something went wrong.");
      }  
    };


    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // console.log(formData);
            const user = await signUp(formData);
            if (user) {
                toast.success('SignUp Success. Please sign in now.');
            }
        } catch (error) {
            // console.log(error);
            toast.error("Something went wrong");
        } finally {
            setFormData(defaultFormData);
        }
    };
    
    return (
        <section className='container mx-auto'>
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto'>
                    <div className='flex mb-8 flex-col md:flex-row items-center justify-between'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl'>
                            Create an account
                        </h1>
                        <p>OR</p>
                        <span className='inline-flex items-center'>
                            <AiFillGithub onClick={loginHandler} className='mr-3 text-4xl cursor-pointer text-black dark:text-white' /> {' '}
                            |
                            <FcGoogle onClick={loginHandler} className='ml-3 text-4xl cursor-pointer' />
                        </span>
                    </div>

                    <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            name='name'
                            placeholder='Your Name'
                            required
                            className={inputStyles}
                            value={formData.name}
                            onChange={handleInputChange}
                        />

                        <input 
                            type='email' 
                            name='email'
                            placeholder='Your Email'
                            required
                            className={inputStyles}
                            value={formData.email}
                            onChange={handleInputChange}
                        />

                        <input 
                            type='password' 
                            name='password'
                            placeholder='Your Password'
                            required
                            minLength={6}
                            className={inputStyles}
                            value={formData.password}
                            onChange={handleInputChange}
                        />

                        <button type='submit' className='w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                            Sign Up
                        </button>
                    </form>

                    <button onClick={loginHandler} className='text-blue-700 underline'>Login Here!</button>
                </div>
        </section>
    );
};

export default Auth;
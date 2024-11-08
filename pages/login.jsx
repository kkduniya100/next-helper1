import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/slices/authSlice';
import { loginUser } from '../utils/api';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const loginRes = await loginUser(password, email); // Assume loginUser function is defined
      if (loginRes.token) {
        localStorage.setItem('token', loginRes.token);
        localStorage.setItem('user', JSON.stringify(loginRes.user));
        dispatch(setCredentials({ token: loginRes.token, user: loginRes.user }));
        router.push('/dashboard');
      } else {
        throw new Error('Login failed: No token received.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='block w-full max-w-[30%]'>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
          <h1 className='text-center'>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              id="email"
              className={`bg-gray-50 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              id="password"
              className={`bg-gray-50 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

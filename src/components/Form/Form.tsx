import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { FC, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { ThreeDots } from 'react-loader-spinner';
import { checkEmail, checkPassword } from '@/utils/validation';
import { loginUser, registerNewUser } from '@/utils/firebase';
import { changePage, selectPage, setUser } from '@/store/slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

interface FormComponentProps {
  headerTitle: string;
  buttonTitle: string;
}

interface SubmitData {
  email: string;
  password: string;
}

enum PageEnum {
  Registration = 'Registration',
  Login = 'Login',
}

export const FormComponent: FC<FormComponentProps> = ({
  headerTitle,
  buttonTitle,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitData>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const authorizationText = useSelector(selectPage);

  const onSubmit: SubmitHandler<SubmitData> = async (data) => {
    setLoading(true);
    const authData =
      authorizationText === PageEnum.Registration
        ? await registerNewUser(data.email, data.password)
        : await loginUser(data.email, data.password);

    if (authData instanceof Error) {
      toast(authData.message);
      setLoading(false);
    } else {
      const userData = {
        email: authData.user.email,
        token: authData.user.refreshToken,
        id: authData.user.uid,
      };
      dispatch(setUser(userData));
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/');
    }
  };

  return (
    <section className="form relative flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-4 text-base_green">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-base_green">
          {headerTitle}
        </h2>
      </div>
      <Tooltip
        id="my-tooltip"
        style={{ fontSize: '1rem', width: '100%', textAlign: 'center' }}
      />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__item">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              <p className="block text-sm text-gray-900 dark:text-base_white">
                Email:
              </p>
              <input
                {...register('email', {
                  required: 'Input Email',
                  validate: checkEmail,
                })}
                id="email"
                name="email"
                type="email"
                className="text-md mb-1 mt-1 block w-full rounded-md border-0 bg-base_white p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </label>
            {errors.email && (
              <div className=" text-sm text-red-500 xs:w-11/12 xs:text-xs">
                {errors.email.message}.{' '}
                <span
                  className="cursor-pointer underline hover:text-base_green_light"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Valid domain: gmail.com, yahoo.com, hotmail.com, yandex.ru, mail.ru"
                  data-tooltip-place="top"
                >
                  Example
                </span>
              </div>
            )}
          </div>
          <div className="form__item my-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              <p className="block text-sm text-gray-900 dark:text-base_white">
                Password:
              </p>
              <input
                {...register('password', {
                  required: 'Input Password',
                  validate: checkPassword,
                })}
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                className="text-md block w-full rounded-md border-0 bg-base_white p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </label>
            {errors.password && (
              <div className="text-sm text-red-500 sm:w-10/12 sm:text-xs xs:text-xs">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="mt-8">
            {authorizationText === PageEnum.Registration ? (
              <div className="text-sm flex flex-start text-black">
                <div>Already have an account?</div>
                <button
                  type="button"
                  className="underline ml-1"
                  onClick={() => dispatch(changePage(PageEnum.Login))}
                >
                  Sign In
                </button>
              </div>
            ) : (
              <div className="text-sm flex flex-start text-black">
                <div>Create account</div>
                <button
                  type="button"
                  className="underline ml-1"
                  onClick={() => dispatch(changePage(PageEnum.Registration))}
                >
                  Sign Up
                </button>
              </div>
            )}
            {loading ? (
              <div className="mt-2 flex w-full justify-center rounded-md bg-base_green p-2 px-3 text-sm font-semibold leading-6 text-white shadow-sm  transition delay-75 ease-in-out">
                <ThreeDots
                  height="24"
                  width="100%"
                  radius="10"
                  color="#fff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  visible
                />
              </div>
            ) : (
              <button
                type="submit"
                className="mt-2 flex w-full justify-center rounded-md bg-base_green p-2 px-3 text-sm font-semibold leading-6 text-white shadow-sm transition delay-75 ease-in-out hover:cursor-pointer hover:shadow-yellow-300/60 active:scale-[95%]"
              >
                {buttonTitle}
              </button>
            )}
          </div>
        </form>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: 'border border-base_yellow p-2 text-sm',
        }}
      />
    </section>
  );
};

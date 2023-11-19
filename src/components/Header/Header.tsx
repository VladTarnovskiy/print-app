import Logo from '@/assets/logo.svg';
import {
  changeUserName,
  selectUserName,
  setUser,
} from '@/store/slices/UserSlice';
import { auth } from '@/utils/firebase';
import { Button } from '@material-tailwind/react';
import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ProfileImg from '@/assets/profile.svg';
import { useAuthState } from 'react-firebase-hooks/auth';

export const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = (event.target as HTMLInputElement).value;
    dispatch(changeUserName(inputValue));
  };
  const userName = useSelector(selectUserName);

  const signOut = () => {
    dispatch(
      setUser({
        email: null,
        token: null,
        id: null,
      })
    );
    localStorage.removeItem('user');
    navigate('/auth');
  };

  return (
    <header className="flex h-16 items-center justify-between px-2 mb-6">
      <div className="flex justify-start items-center">
        <Link to="/">
          <img className="h-16 w-16" src={Logo} alt="Logo" />
        </Link>
      </div>
      {user && (
        <div className="flex">
          <div className="flex items-center mr-9">
            <input
              type="text"
              className="max-w-[200px] w-full py-1 px-2 text-right"
              defaultValue="UserName"
              value={userName}
              onChange={handleUserName}
            />
            <button className="h-10 rounded-md w-10 text-white text-md text-center ml-1">
              <img src={ProfileImg} alt="profile" className="w-10 h-10" />
            </button>
          </div>
          <Link to="/auth" className="flex-shrink-0">
            <Button color="cyan" size="sm" onClick={signOut}>
              Sign out
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

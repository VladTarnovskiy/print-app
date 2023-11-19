import Logo from '@/assets/logo.svg';
import { logout } from '@/utils/firebase';
import { Button } from '@material-tailwind/react';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Header: FC = () => {
  const navigate = useNavigate();

  const signOut = () => {
    logout();
    navigate('/auth');
  };

  return (
    <header className="flex h-16 items-center justify-between px-2 mb-6">
      <div className="flex justify-start items-center">
        <Link to="https://unsplash.com">
          <img className="h-16 w-16" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link to="/auth">
          <Button color="cyan" size="sm" onClick={signOut}>
            Sign out
          </Button>
        </Link>
      </div>
    </header>
  );
};

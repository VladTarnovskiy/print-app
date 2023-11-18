import Logo from '@/assets/logo.svg';
import { Button } from '@material-tailwind/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className="flex h-16 items-center justify-between px-2 mb-6">
      <div className="flex justify-start items-center">
        <Link to="https://unsplash.com">
          <img className="h-16 w-16" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <Button color="cyan" size="sm">
          Sign out
        </Button>
      </div>
    </header>
  );
};

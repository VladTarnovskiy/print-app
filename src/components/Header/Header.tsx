import Logo from '@/assets/logo.svg';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between px-2">
      <div className="flex justify-start items-center">
        <Link to="https://unsplash.com">
          <img className="h-16 w-16" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <Button color="blue" size="sm">
          Sign out
        </Button>
      </div>
    </header>
  );
};

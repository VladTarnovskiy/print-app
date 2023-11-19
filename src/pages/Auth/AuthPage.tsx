import { useSelector } from 'react-redux';
import { FormComponent } from '@/components/Form/Form';
import { selectPage } from '@/store/slices/UserSlice';

enum PageEnum {
  Registration = 'Registration',
  Login = 'Login',
}

export default function AuthorizationPage() {
  const authorizationText = useSelector(selectPage);

  return (
    <div
      className="m-auto max-w-[600px] text-2xl text-teal-500"
      data-testid="authorization-element"
    >
      {authorizationText === PageEnum.Registration ? (
        <FormComponent headerTitle="Registration" buttonTitle="Registration" />
      ) : (
        <FormComponent headerTitle="Login" buttonTitle="Login" />
      )}
    </div>
  );
}

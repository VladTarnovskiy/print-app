import style from './mainPage.module.scss';
import { CustomCard } from '@/components/Card/Card';
import { IPicture } from '@/types/types';
import { FC, ReactNode } from 'react';
import uniqid from 'uniqid';
import { CustomSpinner } from '@/components/Spinner/Spinner';
import { useGetPicturesQuery } from '@/store/slices/ApiSlice';

export const MainPage: FC = () => {
  const {
    data: pictures,
    isLoading,
    isSuccess,
    isError,
  } = useGetPicturesQuery(null);

  let content: ReactNode;

  if (isLoading) {
    content = (
      <div className="flex justify-center mt-72">
        <CustomSpinner />
      </div>
    );
  } else if (isSuccess) {
    content = pictures.map((picture: IPicture) => (
      <CustomCard key={uniqid()} picture={picture} />
    ));
  } else if (isError) {
    content = (
      <div className="flex justify-center mt-72">Something went wrong.</div>
    );
  }

  return <div className={style.pictures__container}>{content}</div>;
};

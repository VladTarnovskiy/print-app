import styles from './mainPage.module.scss';
import { CustomCard } from '@/components/Card/Card';
// import { CustomSpinner } from '@/components/Spinner/Spinner';
import { CardType } from '@/types/types';
import { FC, useEffect, useState } from 'react';
import { getPictures } from '@/services/getPictures';
import uniqid from 'uniqid';

export const MainPage: FC = () => {
  const [pictures, setPictures] = useState<CardType[]>([]);

  // const searchProducts = useCallback(
  //   async (value: string) => {
  //     try {
  //       setContent(false, true);
  //       const characterInfo: CharacterInfo = await getCharactersInfo(
  //         value,
  //         page
  //       );
  //       setTimeout(() => {
  //         const character = characterInfo.results;
  //         setPages(characterInfo.info.pages);
  //         setCharacter(character);
  //         setContent(true, false);
  //       }, 3000);
  //     } catch {
  //       setContent(false, false);
  //     }
  //   },
  //   [page]
  // );

  useEffect(() => {
    getPictures().then((pics) => setPictures(pics));
  }, []);

  return (
    <ul className={styles.pictures__container}>
      {/* {!pictures.length && !loading && 'Nothing found.'} */}
      {/* {loading ? (
      <CustomSpinner />
    ) : ( */}
      {/* <> */}
      {pictures.map((picture: CardType) => (
        <CustomCard key={uniqid()} picture={picture} />
      ))}
      {/* </> */}
      {/* )} */}
    </ul>
  );
};

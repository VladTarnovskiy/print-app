import { CardType } from '@/types/types';
import axios from 'axios';

export const getPictures = async (): Promise<CardType[]> => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://woolen-slime-boater.glitch.me/photos`,
      // params: {
      //   query: search,
      //   page: page,
      //   per_page: 20,
      //   order_by: sort,
      //   client_id: 'sP8YdBsJSg8cHVqUXc7g4K4Ts3fEzyCZeQv4KDu2fR8',
      // },
    });
    console.log(response.data);
    return response.data;
  } catch {
    throw new Error('Unsplash error.');
  }
};

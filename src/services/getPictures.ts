import { CardType, IComment } from '@/types/types';
import axios from 'axios';

const baseUrl = 'https://wry-sly-yogurt.glitch.me';

export const getPictures = async (): Promise<CardType[]> => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/photos`,
      // params: {
      //   query: search,
      //   page: page,
      //   per_page: 20,
      //   order_by: sort,
      //   client_id: 'sP8YdBsJSg8cHVqUXc7g4K4Ts3fEzyCZeQv4KDu2fR8',
      // },
    });
    return response.data;
  } catch {
    throw new Error('Unsplash error.');
  }
};

export const getPicture = async (id: string): Promise<CardType[]> => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/photos/${id}`,
    });
    console.log(response.data);
    return response.data;
  } catch {
    throw new Error('Unsplash error.');
  }
};

export const changeComment = async (
  id: string,
  comments: IComment[]
): Promise<CardType> => {
  try {
    const response = await axios({
      method: 'patch',
      url: `${baseUrl}/photos/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        comments: comments,
      },
    });
    return response.data;
  } catch {
    throw new Error('Unsplash error.');
  }
};

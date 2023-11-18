export interface CardType {
  id: string;
  alt_description: string;
  description: string;
  likes: number;
  created_at: string;
  tags: { title: string }[];
  links: {
    download: string;
  };
  urls: {
    small: string;
    full: string;
  };
  comments: IComment[];
}

export interface IComment {
  userName: string;
  comment: string;
  id: string;
}

// interface SearchResponse {
//   results: Card[];
//   total: number;
//   total_pages: number;
// }

// interface RequestProps {
//   search: string;
//   page?: number;
//   sort?: string;
// }

// interface MyUser {
//   email: string;
//   password: string;
// }

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
  };
  comments: Comment[];
}
interface Comment {
  userName: string;
  comment: string;
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

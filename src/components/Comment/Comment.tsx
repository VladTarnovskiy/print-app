import ProfileImg from '@/assets/profile.svg';
import { FC } from 'react';
import { IComment } from '@/types/types';

interface Props {
  commentData: IComment;
  removeCommentData: (id: string) => void;
}
export const Comment: FC<Props> = ({ commentData, removeCommentData }) => {
  return (
    <div className="comment flex flex-row mb-2">
      <img src={ProfileImg} alt="profile" className="w-8 h-8 mr-1" />
      <div className="comment__des flex-row justify-start w-full">
        <div className="flex justify-between w-full">
          <div className="comment__name text-black">{commentData.userName}</div>
          <button
            onClick={() => {
              removeCommentData(commentData.id);
            }}
          >
            ✖
          </button>
        </div>
        <div className="comment__text">{commentData.comment}</div>
      </div>
    </div>
  );
};

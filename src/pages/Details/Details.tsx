import { FC, ReactNode, useState } from 'react';
import { CustomSpinner } from '../../components/Spinner/Spinner';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Chip,
  CardBody,
  Typography,
  Input,
} from '@material-tailwind/react';
import { IComment } from '@/types/types';
import BackImg from '@/assets/arrow-sm-left.svg';
import SentImg from '@/assets/sent.svg';
import uniqid from 'uniqid';
import { Comment } from '../../components/Comment/Comment';
import {
  useGetPictureQuery,
  useUpdatePictureMutation,
} from '@/store/slices/ApiSlice';

export const Details: FC = () => {
  const { detailsId } = useParams();
  const {
    data: picture,
    isLoading,
    isSuccess,
    isError,
    refetch,
  } = useGetPictureQuery(detailsId!);
  const navigate = useNavigate();
  const [commentValue, setCommentValue] = useState('');

  const [updatePicture] = useUpdatePictureMutation();

  const onClose = () => {
    navigate('/', { replace: false });
  };

  const addNewComment = async (pictureId: string, comments: IComment[]) => {
    const newComment = {
      userName: 'John',
      comment: commentValue,
      id: uniqid(),
    };
    const newComments = [...comments, newComment];
    await updatePicture({ id: pictureId, comments: newComments });
  };

  const removeComment = async (commentId: string) => {
    if (picture !== undefined) {
      const newComments = picture.comments.filter(
        (item) => item.id !== commentId
      );
      await updatePicture({ id: detailsId!, comments: newComments });
      refetch();
    }
  };

  let content: ReactNode;

  if (isLoading) {
    content = (
      <div className="w-full flex justify-center mt-72">
        <CustomSpinner />
      </div>
    );
  } else if (isSuccess) {
    content = (
      <Card className="mt-6 max-w-[1000px] w-full m-auto">
        <CardHeader color="blue-gray" className="relative">
          <Link to={`details/${picture.id}`}>
            <div className="relative">
              <img
                src={picture.urls.full}
                alt="card-image"
                className="hover:scale-105"
              />
            </div>
          </Link>
        </CardHeader>
        <div className="tags flex flex-wrap justify-start px-6 mt-1">
          {picture.tags.map((item) => (
            <div
              key={item.title}
              className="hover:cursor-pointer hover:scale-105"
            >
              <Chip
                variant="ghost"
                color="cyan"
                value={item.title}
                className="w-fit font text-[12px] p-1 m-1 "
              />
            </div>
          ))}
        </div>
        <CardBody className="pt-3">
          <Typography className="mb-1 text-sm flex justify-between">
            <span className="flex">
              <HeartIcon strokeWidth={2} className="h-5 w-5 mr-1" />
              <span>{picture.likes}</span>
            </span>
            <span>{picture.created_at.split('T')[0]}</span>
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-4 text-sm">
            {picture.alt_description}
          </Typography>
          <Typography className="text-sm mb-1">Comments:</Typography>
          <div className="comment__add flex mb-4">
            <Input
              type="text"
              placeholder="comment"
              value={commentValue}
              onChange={(el) => setCommentValue(el.target.value)}
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden',
              }}
              crossOrigin={undefined}
            />
            <button
              onClick={() => {
                addNewComment(picture.id, picture.comments);
                setCommentValue('');
              }}
            >
              <img src={SentImg} alt="arrow" className="w-10 h-10" />
            </button>
          </div>
          <div className="comments__container">
            {picture.comments.map((comment) => (
              <Comment
                key={comment.id}
                commentData={comment}
                removeCommentData={removeComment}
              />
            ))}
          </div>
        </CardBody>
        <button
          onClick={onClose}
          className="close absolute left-[-42px] w-10 h-10 bg-transparent rounded-l-md shadow-md hover:shadow-base_green"
        >
          <img src={BackImg} alt="arrow" className="w-10 h-10" />
        </button>
      </Card>
    );
  } else if (isError) {
    content = (
      <div className="w-full flex justify-center mt-72">
        Something went wrong.
      </div>
    );
  }

  return <div>{content}</div>;
};

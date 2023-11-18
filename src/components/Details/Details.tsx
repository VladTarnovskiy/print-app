import { FC, Suspense } from 'react';
import { CustomSpinner } from '../Spinner/Spinner';
import {
  Await,
  Link,
  LoaderFunction,
  defer,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Chip,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import uniqid from 'uniqid';
import { CardType } from '@/types/types';
import { getPicture } from '@/services/getPictures';
import { Button } from '@material-tailwind/react';

interface LoaderParams {
  detailsId: string;
}

interface CharacterLoader {
  picture: CardType;
}

const Details: FC = () => {
  const { picture } = useLoaderData() as CharacterLoader;
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const onClose = () => {
    navigate('/', { replace: false });
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="title text-teal-500 text-center text-2xl font-thin mb-2">
        Details
      </div>
      <Suspense
        fallback={
          <div className="w-[350px] flex justify-center">
            <CustomSpinner />
          </div>
        }
      >
        <Await resolve={picture}>
          {(resolvedPicture: CardType) => (
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <Link to={`details/${resolvedPicture.id}`}>
                  <div className="relative h-[224px] w-[352px]">
                    <img
                      src={resolvedPicture.urls.small}
                      alt="card-image"
                      className="hover:scale-105"
                    />
                  </div>
                </Link>
              </CardHeader>
              <div className="tags flex flex-wrap justify-start px-6 mt-1">
                {resolvedPicture.tags.map((item) => (
                  <div
                    key={uniqid()}
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
                    <span>{resolvedPicture.likes}</span>
                  </span>
                  <span>{resolvedPicture.created_at.split('T')[0]}</span>
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-sm"
                >
                  {resolvedPicture.alt_description}
                </Typography>
                <Typography className=" text-sm">
                  {resolvedPicture.description ?? 'No description'}
                </Typography>
              </CardBody>
              <Button onClick={onClose}>Close</Button>
            </Card>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const detailsLoader: LoaderFunction<LoaderParams> = async ({ params }) => {
  const id = params.detailsId;

  return defer({ picture: getPicture(String(id)) });
};

export { detailsLoader, Details };

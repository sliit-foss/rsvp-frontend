import Link from 'next/link'
import Button from './Button'
import NextImage from './NextImage'
import { PostProps } from '../pages/event'

interface PostCardProps {
  post: PostProps
  picture: StaticImageData
}

const Post = ({ post, picture }: PostCardProps): JSX.Element => {
  const { title, body, id } = post

  return (
    <div className="flex flex-col max-w-xs mx-auto bg-white shadow-lg rounded-lg h-full">
      <Link href={`/event/${id}`}>
        <a>
          <NextImage
            classnames="max-w-xs overflow-hidden rounded-lg mb-5"
            src={picture}
            alt="dummy pic"
            width={300}
            height={200}
            layout="responsive"
            placeholder="blur"
          />
        </a>
      </Link>

      <div className="px-3 mb-4 flex flex-col flex-grow justify-between">
        <div>
          <Link href={`/event/${id}`}>
            <a className="text-xl sm:text-2xl font-semibold text-blue hover:text-gradientPurple transition ease-in">
              <h3 className="mb-4">{title.slice(0, 40)}</h3>
            </a>
          </Link>
          <p className="mb-5">{body.slice(0, 100)}</p>
        </div>

        {/* TODO: add a button callback function */}
        <div className="flex-grow flex items-end">
          <Link href={`/event/${id}`}>
            <a>
              <Button value="RSVP" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post

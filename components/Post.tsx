import Button from './Button'
import NextImage from './NextImage'
import { PostProps } from '../pages/event'

interface PostCardProps {
  post: PostProps
  picture: StaticImageData
}

const Post = ({ post, picture }: PostCardProps): JSX.Element => {
  const { title, body } = post
  return (
    <div className="flex flex-col max-w-xs mx-auto bg-white shadow-lg rounded-lg h-full">
      <NextImage
        classnames="max-w-xs overflow-hidden rounded-lg mb-5"
        imgStyles="rounded-lg transform hover:scale-105 transition easa-in"
        src={picture}
        alt="dummy pic"
        width={300}
        height={200}
        layout="responsive"
        placeholder="blur"
      />
      <div className="px-3 mb-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-blue mb-4">
            {title.slice(0, 40)}
          </h3>
          <p className="mb-5">{body.slice(0, 100)}</p>
        </div>

        {/* TODO: add a button callback function */}
        <div className="flex-grow flex items-end">
          <Button value="RSVP" buttonStyles="text-white" />
        </div>
      </div>
    </div>
  )
}

export default Post

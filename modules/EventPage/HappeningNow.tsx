// components
import Post from '../../components/Post'

// icons
import { HiArrowRight } from 'react-icons/hi'

// types
import { SectionProps } from '../../pages/event'

const HappeningNow = ({ posts, picture }: SectionProps): JSX.Element => {
  return (
    <section className="sm:py-14 py-10">
      <div className="inline-flex items-center space-x-2 mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold">Happening Now </h2>
        <span>
          <HiArrowRight className="h-6 w-6" />
        </span>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 gap-8 place-content-center">
        {posts.slice(0, 4).map((post) => (
          <Post key={post.id} post={post} picture={picture} />
        ))}
      </div>
    </section>
  )
}

export default HappeningNow

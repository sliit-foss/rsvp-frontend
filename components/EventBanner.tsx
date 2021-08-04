import { useRouter } from 'next/router'
import Container from './Layout/Container'
import Button from './Button'
import { HiArrowRight } from 'react-icons/hi'

interface BannerProps {
  id: string
  title: string
  description: string
  category: string
  startTime: number
  status: string
  tags: Array<string>
}

export default function EventBanner({
  id,
  title,
  description,
  category,
  startTime,
  status,
  tags,
}: BannerProps): JSX.Element {
  const router = useRouter()

  tags = tags.slice(0, 2)

  return (
    <Container>
      <section className="text-white grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-6 md:py-44 py-20">
        <div className="md:col-span-1 flex flex-col justify-center">
          <p className="inline-flex items-center font-medium text-2xl sm:text-3xl mb-8 animate-pulse">
            {status}
            <span>
              <HiArrowRight className="ml-3" />
            </span>
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl mb-5 text-left leading-snug">
            {title}
          </h1>
          <div className="inline-flex items-center space-x-2">
            <p className="font-medium">{category}</p>
            {tags.map((tag, index) => (
              <div
                className="text-gray-default text-xs sm:text-base bg-gray-light py-1 px-3 rounded-2xl shadow-md cursor-default filter hover:brightness-105 transition ease-in duration-200"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col justify-center items-start ml-0 md:ml-32">
          <p className="text-2xl sm:text-3xl font-medium mb-6">Join us on</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            {new Date(startTime)
              .toLocaleString('en-US', {
                month: 'long',
                day: '2-digit',
              })
              .replaceAll(',', ' ')}
          </h2>
          <p className="mb-6 max-w-lg text-left">{description}</p>
          <button
            onClick={() => {
              router.push({
                pathname: '/events/' + id,
                query: {
                  name: title,
                },
              })
            }}
          >
            <Button value={'View'} />
          </button>
        </div>
      </section>
    </Container>
  )
}

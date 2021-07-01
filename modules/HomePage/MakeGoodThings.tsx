import Container from '../../components/Layout/Container'
import NextImage from '../../components/NextImage'

import makeGoodThings from '../../public/make-good-things.svg'

const MakeGoodThings = (): JSX.Element => {
	return (
		<Container>
			<section className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-6 md:py-24 py-16">
				<NextImage
					classnames="md:col-span-1 flex items-center justify-center max-w-lg lg:w-auto sm:w-80 w-64 mx-auto my-8"
					src={makeGoodThings}
					alt="make good things"
					layout="intrinsic"
					quality={90}
				/>
				<div className="md:col-span-1 flex flex-col justify-center">
					<h2 className="text-4xl sm:text-5xl font-bold text-blue md:text-left text-center leading-snug mb-6">
						Make Good Things Together
					</h2>
					<p className="md:text-left text-center text-gray-default max-w-lg md:mx-0 mx-auto mb-5">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
						reprehenderit voluptates nihil id harum molestias, perferendis minus
						voluptatem ex autem enim facilis voluptatibus excepturi inventore
						consequatur animi ipsa sed veniam.
					</p>
					<div className="inline-flex justify-center md:justify-start space-x-2">
						<div className="text-gray-default text-xs bg-gray-light py-1 px-3 rounded-2xl shadow-md">
							#SLIITFOSS
						</div>
						<div className="text-gray-default text-xs bg-gray-light py-1 px-3 rounded-2xl shadow-md">
							#MSCLUBOFSLIIT
						</div>
						<div className="text-gray-default text-xs bg-gray-light py-1 px-3 rounded-2xl shadow-md">
							#SLIITFCSC
						</div>
					</div>
				</div>
			</section>
		</Container>
	)
}

export default MakeGoodThings

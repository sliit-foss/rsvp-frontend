import Image from 'next/image'

interface ImageProps {
  src: StaticImageData
  alt: string
  quality?: number
  layout?: 'fixed' | 'responsive' | 'intrinsic' | 'fill'
  width?: number
  height?: number
  placeholder?: 'blur' | 'empty'
  classnames?: string
  nextImgClassnames?: string
}

const NextImage = ({
  src,
  alt,
  quality,
  layout,
  width,
  height,
  placeholder,
  classnames,
  nextImgClassnames,
}: ImageProps): JSX.Element => {
  return (
    <div className={classnames}>
      <Image
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        quality={quality}
        placeholder={placeholder}
        className={nextImgClassnames}
      />
    </div>
  )
}

export default NextImage

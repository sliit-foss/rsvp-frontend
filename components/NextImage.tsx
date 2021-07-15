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
<<<<<<< HEAD
  imgStyles?: string
=======
>>>>>>> 746312e927b8929bd7d9fc65926c65a79dad881a
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
<<<<<<< HEAD
  imgStyles,
=======
>>>>>>> 746312e927b8929bd7d9fc65926c65a79dad881a
}: ImageProps): JSX.Element => {
  return (
    <div className={classnames}>
      <Image
<<<<<<< HEAD
        className={imgStyles}
=======
>>>>>>> 746312e927b8929bd7d9fc65926c65a79dad881a
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        quality={quality}
        placeholder={placeholder}
      />
    </div>
  )
}

export default NextImage

import Image from 'next/image'

const CoverImage = ({ title, src, height, width }) => {
  return (
    <div className='mb-6'>
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        layout='responsive'
        width={width}
        height={height}
        objectFit='cover'
        objectPosition='center'
        className='rounded-md'
      />
    </div>
  )
}

export default CoverImage

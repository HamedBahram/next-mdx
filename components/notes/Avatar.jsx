const Avatar = ({ name, src }) => {
  return (
    <img
      src={src}
      className='w-10 h-10 sm:w-8 sm:h-8 rounded-full mr-4'
      alt={name}
    />
  )
}

export default Avatar

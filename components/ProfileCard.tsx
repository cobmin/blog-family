import React from 'react'
import Image from 'next/image'

interface ProfileCardProps {
  name: string
  description: string
  imgSrc: string
  altText: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, imgSrc, altText }) => {
  return (
    <div className="mb-4 flex flex-col items-center space-y-4 text-center md:flex-row md:space-x-6 md:space-y-0 md:text-left">
      <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-lg md:h-40 md:w-40">
        <Image src={imgSrc} alt={altText} layout="fill" className="rounded-lg object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <strong>{name}:</strong>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default ProfileCard

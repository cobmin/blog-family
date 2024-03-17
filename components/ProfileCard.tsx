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
    <div className="mb-4 flex items-center space-x-4">
      <Image
        src={imgSrc}
        alt={altText}
        width={160}
        height={160}
        className="rounded-full object-cover"
      />
      <div>
        <strong>{name}:</strong> {description}
      </div>
    </div>
  )
}

export default ProfileCard

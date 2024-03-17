import React from 'react';

interface ProfileCardProps {
  name: string;
  description: string;
  imgSrc: string;
  altText: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, imgSrc, altText }) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <img src={imgSrc} alt={altText} className="rounded-full w-40 h-40 object-cover" />
      <div>
        <strong>{name}:</strong> {description}
      </div>
    </div>
  );
};

export default ProfileCard;

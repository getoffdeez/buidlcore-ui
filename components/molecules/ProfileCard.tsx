import Image from 'next/image';
import SocialIcon from '../atoms/SocialIcon';
import Button from '../atoms/Button';

import { CSSProperties } from "react";

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatar,
  buttonLabel,
  onButtonClick,
  socialIcons,
  name,
  bio
}) => {
  return (
    <div className="bg-slate-950 shadow-lg rounded-lg p-6 gap-2 flex flex-col items-center border-t-8 border-blue-600 relative">
        <div className='bg-blue-900 w-full h-[80px] absolute top-0'></div>
        <div className='flex justify-between items-center w-full'>
            <p className='text-white mt-12'>Identity</p>
            <Image src={avatar} alt={`${name}'s avatar`} width={100} height={100} className='z-10'/>
            <div className='mt-12'><Button variant="tertiary" size="medium" onClick={onButtonClick}>{buttonLabel}</Button></div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <h2 className="text-lg font-bold mt-2 text-gray-50">{name}</h2>
            <p className="text-sm text-gray-300">{bio}</p>
        </div>
      <div className="flex space-x-4 my-2">
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} iconPath={icon.iconPath} link={icon.link} />
        ))}
      </div>
      <p className='text-blue-300 text-xs'>Powered by Web3</p>
    </div>
  );
};

export default ProfileCard;

import Image from 'next/image';
import SocialIcon from '../atoms/SocialIcon';
import Button from '../atoms/Button';

import { CSSProperties } from "react";

const ProfileCardVerticle: React.FC<ProfileCardVerticleProps> = ({
  avatar,
  buttonLabel,
  onButtonClick,
  socialIcons,
  name,
  bio
}) => {
  return (
    <div className="bg-slate-950 shadow-lg rounded-lg gap-2 flex items-center border-t-8 border-blue-600 w-[460px]">
      <Image src={avatar} alt={`${name}'s avatar`} width={100} height={100} className='h-full w-[200px] object-cover' />
      <div className='p-6'>
      <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mt-2 text-gray-50">{name}</h2>
          <div className='flex gap-4'>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} iconPath={icon.iconPath} link={icon.link} />
            ))}
          </div>
          <p className="text-sm text-gray-300">{bio}</p>
          <div className='flex gap-2 items-center justify-between'>
            <p className="text-sm text-gray-300">kames.eth</p>
            <p className="text-sm text-gray-300">did:pkh:414...525</p>
          </div>
        </div>
        <p className='text-blue-300 text-xs mt-4'>Powered by Web3</p>
        </div>
    </div>
  );
};

export default ProfileCardVerticle;

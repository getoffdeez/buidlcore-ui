// components/AccountBadge.tsx
import Image from 'next/image';

const AccountBadge: React.FC<AccountBadgeProps> = ({
  avatar,
  name,
  socialLogo,
  socialUsername,
  bondNumber,
  bondText
}) => {
  return (
    <div className="flex items-center space-x-8 bg-neutral-950 p-6 rounded-lg shadow-md">
        <div className='flex items-center space-x-2'>
            <Image src={avatar} alt="User Avatar" width={56} height={56} className="rounded-full" />
        <div>
            <h3 className="font-bold text-white text-lg">{name}</h3>
        <div className="flex items-center gap-2">
            <Image src={socialLogo} alt="Social Logo" width={18} height={18} />
            <span className='text-neutral-100 text-md'>{socialUsername}</span>
        </div>
      </div>
    </div>
      <div className="flex flex-col text-sm items-center text-gray-200">
          <span className='text-4xl font-bold'>{bondNumber}</span>
          <span>{bondText}</span>
        </div>
    </div>
  );
};

export default AccountBadge;

// components/DiscoResolver.tsx
import React from 'react';
import Image from 'next/image';

const DiscoResolver: React.FC<DiscoResolverProps> = ({ title, supportingText, networkIcon }) => {
  return (
    <div className="flex items-center space-x-3 bg-neutral-950 p-6 rounded-lg shadow-lg">
      <div>
        <h3 className="text-lg font-bold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-300">{supportingText}</p>
      </div>
      <Image src={networkIcon} alt="User Avatar" width={56} height={56} className="rounded-full" />
    </div>
  );
};

export default DiscoResolver;

"use client"
import AccountBadge from "@/components/AccountBadge";
import DiscoResolver from "@/components/DiscoResolver";
import SocialIcon from "@/components/atoms/SocialIcon";
import ProfileCard from "@/components/molecules/ProfileCard";
import Image from "next/image";

export default function Home() {
  const socialIcons = [
    { iconPath: '/icons/lens.svg', link: 'https://twitter.com' },
    { iconPath: '/icons/farcaster.svg', link: 'https://facebook.com' },
    { iconPath: '/icons/disco.svg', link: 'https://instagram.com' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProfileCard
        avatar="/dylan.png"
        name="Dylan Desrosier"
        bio="Building the future of savings at PoolTogether" 
        buttonLabel={"Edit"} 
        onButtonClick={function (): void {
          throw new Error("Function not implemented.");
        }} 
        socialIcons={socialIcons} 
      />
      <AccountBadge 
        avatar="/avatar-evin.png" 
        name={"Proven Authority"} 
        socialLogo={"/icons/disco.svg"} 
        socialUsername={"@provenauthority"} 
        bondNumber={3} 
        bondText={"bond"} 
      />
      <DiscoResolver 
        title={"Disco Resolver"} 
        supportingText={"Supports:  did:3, did:pkh, did:web, and did:ethr"} 
        networkIcon={"/disco.svg"} 
      />
    </main>
  );
}

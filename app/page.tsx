"use client"
import AccountBadge from "@/components/AccountBadge";
import DiscoResolver from "@/components/DiscoResolver";
import SocialIcon from "@/components/atoms/SocialIcon";
import ProfileCard from "@/components/molecules/ProfileCard";
import ProfileCardVerticle from "@/components/molecules/ProfileCardVerticle";
import Image from "next/image";

export default function Home() {
  const socialIcons = [
    { iconPath: '/icons/lens.svg', link: 'https://twitter.com' },
    { iconPath: '/icons/farcaster.svg', link: 'https://facebook.com' },
    { iconPath: '/icons/disco.svg', link: 'https://instagram.com' },
  ];
  const socialIcons2 = [
    { iconPath: '/icons/lens.svg', link: 'https://twitter.com' },
    { iconPath: '/icons/farcaster.svg', link: 'https://facebook.com' },
    { iconPath: '/icons/disco.svg', link: 'https://instagram.com' },
  ];

  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24 gap-2">
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
      <ProfileCardVerticle
        avatar="/kames.png"
        name="Kames Geraghty"
        bio="Building the future of savings at PoolTogether" 
        buttonLabel={"Edit"} 
        onButtonClick={function (): void {
          throw new Error("Function not implemented.");
        }} 
        socialIcons={socialIcons2} 
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

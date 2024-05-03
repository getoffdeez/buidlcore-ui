

// Button.tsx

interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'small' | 'medium' | 'large';
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
}

// SocialIcon.tsx

interface SocialIconProps {
    iconPath: string;
    link: string;
    
  }

  // AccountBadge.tsx
  
interface AccountBadgeProps {
    avatar: string;
    name: string;
    socialLogo: string;
    socialUsername: string;
    bondNumber: number;
    bondText: string;
}

  // DiscoResolver.tsx

  interface DiscoResolverProps {
    title: string;
    supportingText: string;
    networkIcon: string;
  }

  // ProfileCard.tsx

  interface ProfileCardProps {
    avatar: string;
    buttonLabel: string;
    onButtonClick: () => void;
    socialIcons: {
      iconPath: string;
      link: string;
    }[];
    name: string;
    bio: string;
  }

  // ProfileCardVerticle.tsx

  interface ProfileCardVerticleProps {
    avatar: string;
    buttonLabel: string;
    onButtonClick: () => void;
    socialIcons: {
      iconPath: string;
      link: string;
    }[];
    name: string;
    bio: string;
  }
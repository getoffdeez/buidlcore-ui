
const SocialIcon: React.FC<SocialIconProps> = ({ iconPath, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
      <img src={iconPath} alt="Social Icon" className="w-7 h-7" />
    </a>
  );
  
  export default SocialIcon;
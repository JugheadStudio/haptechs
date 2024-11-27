import React from "react";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface SocialIconsProps {
  justifyCenter?: boolean;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ justifyCenter = true }) => {
  return (
    <div className={`flex gap-5 ${justifyCenter ? 'md:justify-center' : ''} justify-start`}>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] rounded-md hover:bg-pink transition"
      >
        <LinkedInIcon className="text-white text-xl" />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] rounded-md hover:bg-pink transition"
      >
        <InstagramIcon className="text-white text-xl" />
      </a>

      <a
        href="https://www.x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] rounded-md hover:bg-pink transition"
      >
        <XIcon className="text-white text-xl" />
      </a>

      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] rounded-md hover:bg-pink transition"
      >
        <YouTubeIcon className="text-white text-xl" />
      </a>
    </div>
  );
};

export default SocialIcons;

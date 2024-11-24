import React from "react";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialIcons = () => {
  return (
    <div className="flex gap-5 md:justify-center justify-start">

      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] rounded-md hover:bg-gray-700 transition"
      >
        <LinkedInIcon className="text-white text-xl" />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] rounded-md hover:bg-gray-700 transition"
      >
        <InstagramIcon className="text-white text-xl" />
      </a>

      <a
        href="https://www.x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] rounded-md hover:bg-gray-700 transition"
      >
        <XIcon className="text-white text-xl" />
      </a>

      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1E1E1E] rounded-md hover:bg-gray-700 transition"
      >
        <YouTubeIcon className="text-white text-xl" />
      </a>
    </div>
  );
};

export default SocialIcons;

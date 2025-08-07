import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 px-4 border-t border-gray-300'>
      <img src={assets.logo} alt="Logo" width={150} />

      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        © SairamKonda.dev | All rights reserved.
      </p>

      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt="Facebook" width={35} />
        <img src={assets.twitter_icon} alt="Twitter" width={35} />
        <img src={assets.instagram_icon} alt="Instagram" width={35} />
      </div>
    </div>
  );
};

export default Footer;

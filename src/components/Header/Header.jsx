import React from 'react';
import avatar from '../../assets/imges/profile.jpg'

const Header = () => {
    return (
        <div className='p-10 flex justify-between items-center border-b-2'>
            <h1 className='text-4xl font-bold text-[#111111] font-serif'>Knowledgepedia</h1>
            <div className='w-14 h-14 '> <img className='rounded-full'  src={avatar} alt="" /></div>
            
        </div>
    );
};

export default Header;
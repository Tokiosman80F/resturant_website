import React from 'react';

const SectionTitle = ({subTitle,mainTitle}) => {
    return (
        <div className='text-center w-[500px] mx-auto py-5 font-sans mt-20 mb-10'>  
            <div className='text-[#D99904]  mb-2 text-xl'>{subTitle}</div>
            <div className='uppercase text-[40px] py-2 border-gray-300 border-t-4 border-b-4 '>{mainTitle}</div>

        </div>
    );
};

export default SectionTitle;
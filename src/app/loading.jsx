import React from 'react';

const Loading = () => {
    return (
        <div className='flex gap-2 h-[85vh] items-center justify-center'>
            <p> Loading</p>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    );
};

export default Loading;
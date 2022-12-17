import React from 'react'

function Loading() {
    return (
        <div className="my-8 transition-all ease-in-out flex items-center justify-center space-x-2">
            <div className="spinner-grow inline-block w-12 text-second h-12 bg-current rounded-full opacity-0" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;
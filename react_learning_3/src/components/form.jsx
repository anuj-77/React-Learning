import React from "react";

function Card({myObj,btnClickMe,btnVisitMe}) { 

    console.log(myObj) 

    return (
        <>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
                <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="mt-6 mb-2">
                    <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                        {myObj.name}
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
                </div>
                <p className="text-gray-300">
                    
                    {btnClickMe}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
                    amet
                    
                    {btnVisitMe}
                </p>
            </div>
        </>
    )
}
export default Card;
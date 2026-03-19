import React from "react";

const Title = ({ text1, text2 }) => {
    return (
        <div className="text-center py-10">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            {text1}{" "}
            <span className="text-black font-bold">
            {text2}
            </span>
        </h2>

        {/* Underline Divider */}
        <div className="w-16 h-0.5 bg-black mx-auto mt-4"></div>

        </div>
    );
};

export default Title;
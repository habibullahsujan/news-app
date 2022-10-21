import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriters = () => {
  return (
    <div className="flex">
      <h3 className="text-4xl ">
        Welcome to News-Time. Here you see 
       <span className="text-emerald-400">
       <Typewriter
          options={{
            strings: ["Breaking News", "Regular News","International News", "Sports News", "Entertainment", 'Culture', 'Arts'],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
          />
        </span> 
      
      </h3>
    </div>
  );
};

export default TypeWriters;

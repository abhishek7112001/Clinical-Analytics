import React from 'react';

const Home = () => {
  return (
    <div className="flex h-screen w-full text-black font-semibold">
      {/* Parent Div 1 - Flex with specific width and height */}
      <div className="flex flex-col bg-blue-500 w-[30%] p-4"> {/* 30% width */}
        <div className="flex-1 bg-blue-400 m-1 rounded-lg shadow-lg flex items-center justify-center">
          <h1 className="text-lg">Total no. of Countries:</h1>
        </div>
        <div className="flex-1 bg-blue-300 m-1 rounded-lg shadow-lg flex items-center justify-center">
          <h1 className="text-lg">Additional Info</h1>
        </div>
      </div>

      {/* Parent Div 2 - Flex with specific width and height */}
      <div className="flex flex-col bg-green-500 w-[70%] p-4"> {/* 70% width */}
        <div className="h-[33%] bg-green-400 rounded-lg shadow-lg m-1 flex items-center justify-center">
          <h1 className="text-lg">Content Area</h1>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2 m-1">
          <div className="aspect-[1/1] bg-green-300 rounded-lg shadow-lg flex items-center justify-center">
            <h1 className="text-lg">Box 1</h1>
          </div>
          <div className="aspect-[1/1] bg-green-200 rounded-lg shadow-lg flex items-center justify-center">
            <img height="100%" width="100%" src='/globe.png' alt="Globe" className="object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

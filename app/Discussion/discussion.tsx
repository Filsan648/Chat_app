import Image from 'next/image';
import Freinds from "../Freinds/freinds";

function Discu() {
  return (
    <div className='w-[20%] min-w-[250px] bg-white shadow-lg rounded-lg overflow-hidden'>
      {/* Header */}
      <div className='flex flex-row justify-between items-center p-4 border-b border-gray-100'>
        <h2 className='text-lg font-semibold text-gray-800'>Connections</h2>
        <button className='p-1 rounded-full hover:bg-gray-100 transition-colors'>
          <Image 
            src="/icons/search.png"
            alt='Search icon'  
            width={16}
            height={16}
          />
        </button>
      </div>

      {/* Friends List */}
      <div className="flex flex-col p-2 overflow-y-auto max-h-[calc(100vh-100px)]">
        {Freinds.map((freind, index) => (
          <div 
            key={index}
            className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors'
          >
            <div className='relative'>
              <Image 
                src={freind.Image}
                className='rounded-full object-cover'
                alt={`${freind.Name}'s profile`}
                width={50}
                height={50}
              />
              
              {freind.isOnline && (
                <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white'></div>
              )}
            </div>

            <div className='flex-1 min-w-0'>
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-gray-800 truncate'>{freind.Name}</h3>
                <span className='text-xs text-gray-500 whitespace-nowrap'>
                  {freind.Lasttime}
                </span>
              </div>
              <p className='text-sm text-gray-500 truncate mt-1'>
                {freind.Lastmessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discu;
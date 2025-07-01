import Link from 'next/link';
import Image from 'next/image';
function Sidebar (){
return(<div className="w-[5%] border-x-[0.5px] border-x-gray-400/60 ">
  
   <div className='  mt-12  justify-center items-center    flex flex-col gap-10 '>
        <Image src="/icons/Home.png"
         alt='dashboar'  
         width={20}
        height={20}/> 
           
          <Image src="/icons/discussion.png"
         alt='dashboar'  
         width={20}
        height={20}/> 
         <Image src="/icons/like.png"
         alt='dashboar'  
         width={20}
        height={20}/> 
          <Image src="/icons/noti.png"
         alt='dashboar'  
         width={20}
        height={20}/>
    </div>
    </div>)
}
export default Sidebar;
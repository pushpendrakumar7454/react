import React from 'react';
import {Bookmark} from 'lucide-react'


const Card = (props) => {
  return (
    <div >
        <div className="w-93 p-5 shadow-2xl rounded-4xl flex flex-col gap-3">
            <div class="flex justify-between">
                <div className='w-20 h-20 border-1 rounded-full overflow-hidden border-gray-600 p-1'>
                    <div className="book1"><img src={props.img}alt="Amojon"className="img w-full h-full object-cover  "/></div>
                </div>
                <div className="book" >
                    <button className="btn border-2 border-slate-500 text-slate-500 text-3xl rounded-lg w-30 flex justify-center items-center gap-2"><span>Save</span><Bookmark size={30} />
                    </button>
                </div>
            </div>
            <div class="child2">
                <div>
                    <div className="flex items-center">
                        <h1 className="text-3xl text-black/70 font-bold">{props.name}</h1>
                        <p className="text-sm text-gray-400 pt-5 pl-1">{props.days}</p>
                    </div>
                    <div className='mt-3'>
                        <h1 className="text-3xl text-black font-bold ui">{props.level}</h1>
                    </div>
                    <div className='mt-2'>
                        <button className="bg-slate-300 text-black text-2xl rounded-lg font-semibold time cursor-pointer p-1.5 ">{props.part}</button>
                        <button className="bg-slate-300 text-black text-2xl rounded-lg font-semibold level p-1.5 ml-3">{props.remote}</button>
                    </div>
                </div>
            </div>
            <div className="w-84 h-[2px] bg-black/50 line"></div>
            <div>
                <div className="flex justify-between hr">
                    <div className="text-2xl font-semibold flex flex-col">{props.rupeye}<span className="text-lg text-gray-500 font-normal">{props.location}</span></div>
                    <div className='mt-1'><button className="bg-black text-xl text-white w-30 rounded-sm now text-center p-1.5">Apply Now</button></div>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Card;

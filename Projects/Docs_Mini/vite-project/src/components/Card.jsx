import React from 'react'
import { FaRegFile } from "react-icons/fa6";
import { TfiDownload } from "react-icons/tfi";
import { MdOutlineClose } from "react-icons/md";
import { motion, scale } from 'framer-motion';


function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 300 }}
            className='relative flex-shrink-0 w-60 h-72 bg-slate-900 text-white p-10 px-5 overflow-hidden rounded-[30px]' >
            <FaRegFile />

            <p className='text-xs leading-tight mt-5 font-semibold'>
                {data.desc}
            </p>

            <div className='absolute bottom-0 left-0 w-full'>

                <div className='flex items-center justify-between py-3 px-8'>
                    <h5>{data.filesize}</h5>
                    <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close
                            ? <MdOutlineClose size='.7em' color='#000' />
                            : <TfiDownload size='.7em' color='#000' />
                        }
                    </span>
                </div>

                {data.tag.isOpen && (
                    <div className={`w-full py-2 px-5 flex justify-center items-center ${data.tag.tagColor} rounded-tl-[30px] rounded-br-[30px] cursor-pointer  hover:scale-105 transition-all  duration-300`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )}

            </div>
        </motion.div >
    )
}

export default Card

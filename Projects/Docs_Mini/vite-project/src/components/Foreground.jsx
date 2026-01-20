import React from 'react'
import Card from './Card'


function Foreground() {
    const ref = React.useRef(null);

    const data = [
        {
            desc: 'This is the background Color of the card that will be displayed.',
            filesize: '.4mb',
            close: true,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-green-600' }
        },
        {
            desc: 'This is the background Color of the card that will be displayed.',
            filesize: '.4mb',
            close: true,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-green-600' }
        },
        {
            desc: 'This is the background Color of the card that will be displayed.',
            filesize: '.4mb',
            close: true,
            tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-green-600' }
        },
    ]

    return (
        <div ref={ref} className='fixed top-0 left-0 z-10 w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground

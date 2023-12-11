import React from 'react'

function NewsItem({title,urlToImage,url}) {
  return (
    <div style={{alignItem: "center"}} className='bg-white'>
        <div className="news-app flex justify-center m-7 w-[60%] mx-auto">
            <div class="max-w-2/4 rounded overflow-hidden shadow-lg ">
                <img class="w-full" src={urlToImage} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{title}</div>
                    </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={url}>Read more</a></button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default NewsItem
import React from 'react'

const Refresh = (props) => {
  return (
    <div className="refresh flex text-center flex-col justify-center h-[100vh] items-center ">
        <h1 className="text-center bg-slate-100 w-[300px] p-2 rounded-md my-2 border-2 border-black border-dashed font-sans font-bold text-lg mx-auto absolute top-0">
            Plan With Love
          </h1>
        <h2 className='text-center bg-slate-100 w-[300px] p-8 rounded-md my-2  font-sans font-bold text-xl mx-auto shadow-md'>No Tour Plans Left </h2>
        <button className="text-center bg-red-200 w-[10%] p-1 rounded-md my-2 border-2 border-black border-dashed font-sans font-semibold text-lg mx-auto" onClick={() => props.setTour(props.data)}>
            Refresh
        </button>
    </div>
  )
}

export default Refresh;
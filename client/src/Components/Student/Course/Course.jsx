import Search from 'antd/es/input/Search'
import React from 'react'
import CustomDropdown from '../../Common/CustomDropdown'

const Course = () => {
  // const filter
  return (
    <main className='h-4/5 w-full bg-black'>
      <div className='grid grid-flow-col p-2 gap-2'>
        <Search/>
        <CustomDropdown/>
      </div>
      <div>2</div>
    </main>
  )
}

export default Course
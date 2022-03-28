import React from 'react'

const SortAndFilterButtons = ({handleSort}) => {
  return (
    <div className='sortButtons'>
        <button onClick={()=> {handleSort('asc', 'title')}}>Sort by title Asc</button>
        <button onClick={()=> {handleSort('desc', 'title')}}>Sort by title Desc</button>
        <button onClick={()=> {handleSort('asc', 'price')}}>Sort price Asc</button>
        <button onClick={()=> {handleSort('desc', 'price')}}>Sort price Desc</button>
    </div>
  )
}

export default SortAndFilterButtons
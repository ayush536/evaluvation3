import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import '../Home/home.css'
import BookCard from '../BookCard/BookCard'
import SortAndFilterButtons from '../SortAndFilterButtons/SortAndFilterButtons'
const Section = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    const getData = async () =>{
      
        try {
            let getting = await axios.get('http://localhost:8080/books');
            let final = getting.data;
            let ff = [];
            for(let i = 0; i<final.length; i++) {
                if(final[i].section === id){
                    ff.push(final[i])
                }
            }
            setData(ff);
        }
        catch(err){
            console.log(err.message)
        }
    } 
    useEffect(()=>{
      getData();
    }, [id])
    const [change, setChange] = useState(false);
    const handleSort = (sort, value) =>{
      if(sort === 'asc' && value==='title'){
        data.sort((a,b)=> {
          if(a.title>b.title){
            return 1;
          } else {
            return -1;
          }
        })
        setChange(!change)
      }
      if(sort === 'desc' && value==='title'){
        data.sort((a,b)=> {
          if(a.title<b.title){
            return 1;
          } else {
            return -1;
          }
        })
        setChange(!change)
  
      }
      if(sort === 'asc' && value==='price'){
        data.sort((a,b)=> a.price-b.price)
        setChange(!change)
      }
      if(sort === 'desc' && value==='price'){
        data.sort((a,b)=> b.price-a.price)
        setChange(!change)
  
      }
    }
    useEffect(()=>{}, [change])
    return (
        <>
        <div style={{ padding : '2% 0 2% 0'}}>
        <SortAndFilterButtons handleSort={handleSort} />
        </div>
        <div style={{ textAlign : 'center', fontWeight : 'bolder', padding : '1% 0 2% 0' }}>Section {id}</div>
        <div className='sectionContainer'>
            {data.map(({title,price,imageUrl, id}) => {
                return <BookCard key={id} title={title} imageUrl={imageUrl} price={price} id={id} />
            })}
        </div>
        </>
    )
}

export default Section

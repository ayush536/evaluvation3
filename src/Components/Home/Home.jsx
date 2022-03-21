import axios from "axios";
import { useEffect, useState } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from 'styled-components';

export const Home = () => {
  const[books,setBooks] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/books").then((res)=>{
      setBooks(res.data)
      console.log(res.data)
    })
  },[])

  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div`
  //  background : red;
    
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">

{/*         
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card. */}
       
       {books.map((e) => {
         return(
           <div style={{border: "3px solid black"}} key={e.id} >
             <img src={e.imageUrl} alt="" />
             <p>Title: {e.title}</p>
             <p>Price: {e.price}</p>
             <p>Discription: {e.description}</p>
           </div>
         )
       })}
       </Main>
    </div>
  );
};

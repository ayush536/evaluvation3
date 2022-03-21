import { Link } from "react-router-dom";
// import styled from "styled-components";
import {useState, useEffect} from 'react';
import axios from 'axios'

export const BookCard = () => {
  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then(({data}) => {
      setData(data);
      console.log(data)
    })
  }, [])

  return (
    <>
    <div style = {{
            display: "grid",
            gap: "40px",
            gridTemplateColumns: "auto auto auto auto",
            alignItems: "center",
            height: "200px",
            width: "200px",
            marginLeft: "16%"
          }}>
      {data.map((el) => {
        return (
          <>
          <div>
            <Link to={`/books/${el.id}`} key = {el.id}>
            <img src={el.imageUrl} height="150px" width="150px"/>
            <h2 className="title" key = {el.id}>{el.title}</h2>
            <h2 className="price" key = {el.id}>{el.price}</h2>
            </Link>
          </div>
          </>
        )
      })}
    </div>
    </>
  )
};
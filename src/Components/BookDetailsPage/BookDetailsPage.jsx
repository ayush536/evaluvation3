import {useParams} from "react-router"
import {useState, useEffect} from "react"
import axios from "axios"


export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const [data, setData] = useState([])
  const {title} = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8080/books/${title}`).then((el) => {
      setData(el.data)
    })
  }, [title])

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{data.title}
        </h2>
        <img className="image" src={data.imageUrl} alt="#" />
        <div className="author">{data.author}</div>
        <div className="description">{data.description}</div>
        <div className="price">{data.price}</div>
        <div className="section">{data.section}</div>
        <div className="isbnNumber">{data.ISBN_Number}</div>
        <ul className="reviews">
        {data.review}
        </ul>
      </div>
    </>
  );
};
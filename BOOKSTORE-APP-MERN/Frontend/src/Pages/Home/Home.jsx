import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Spinner from "../../Components/Spinner/Spinner";
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    axios.get('http://localhost:5555/books')
    .then(res => {
      setBooks(res.data.books);
      console.log(books);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
    })
  },[])
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to='/Books/CreateBook'>
        <MdOutlineAddBox className="text-sky-800 text-4xl"/>
        </Link>
      </div>
      {loading?(
        <Spinner />
      ):(
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
            <th className="border border-slate-600 rounded-md">
                No
              </th>
              <th className="border border-slate-600 rounded-md">
                Title
              </th>
              <th className="border border-slate-600 rounded-md">
                Author
              </th>
              <th className="border border-slate-600 rounded-md">
                publishyear
              </th>
              <th className="border border-slate-600 rounded-md">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book,index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1 }
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title }
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.author }
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.publishyear }
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/Books/ShowBook/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800"></BsInfoCircle>
                    </Link>
                    <Link to={`/Books/EditBook/${book._id}`}>
                    <MdOutlineAddBox className="text-2xl text-red-600"></MdOutlineAddBox>
                    </Link>
                    <Link to={`/Books/DeleteBook/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600"></MdOutlineDelete>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
      }
    </div>
  );
}

export default Home;

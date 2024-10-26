import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Components/Spinner/Spinner';
import BackButton from '../../Components/BackButton/BackButton';
import { enqueueSnackbar, useSnackbar } from 'notistack';

function EditBook() {
  const { id } = useParams(); // Get the book ID from the URL
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishyear, setPublishyear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then(res => {
        const bookData = res.data.book;
        setTitle(bookData.title);
        setAuthor(bookData.author);
        setPublishyear(bookData.publishyear);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        enqueueSnackbar("Error fetching book data", {variant:"error"} )
      });
  }, [id]);

  const handleSaveBook = () => {
    const data = { title, author, publishyear,updatedAt: new Date().toISOString() };
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edit successfully", {variant:"success"} )
        navigate('/');
      })
      .catch(error => {
        setLoading(false);
        enqueueSnackbar("Error editing book", {variant:"error"} )
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year:</label>
          <input
            type="text"
            value={publishyear}
            onChange={(e) => setPublishyear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  );
}

export default EditBook;

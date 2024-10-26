import React,{useState} from 'react'
import BackButton from '../../Components/BackButton/BackButton'
import Spinner from '../../Components/Spinner/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'


function DeleteBook() {
  const navigate = useNavigate()
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  
  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
     .then(() => {
        navigate('/')
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
        setLoading(false);
      })
     .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error deleting book', { variant: 'error' });
      });
  }
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading? <Spinner/> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <div className="text-2xl">
          <p className='p-4'>Are you sure you want to delete this book?</p>
          <button onClick={handleDeleteBook} className="bg-red-500 hover:bg-red-700 text-white w-full rounded-xl p-4">Yes,Delete it</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteBook
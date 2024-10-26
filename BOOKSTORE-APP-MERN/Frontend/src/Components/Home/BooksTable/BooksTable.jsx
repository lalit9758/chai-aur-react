import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';

function BooksTable({books}) {
  return (
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

export default BooksTable
import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

function BookModal({ book, onClose }) {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center books-center"
      onClick={onClose}>
      <div className="w-[600px] max-w-full h-[400] bg-white rounded-xl p-4 flex flex-col relative">
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="absolute top-6 right-20 px-4 py-1 bg-red-300 rounded-lg">
          {book.publishyear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start books-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start books-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          animi sit soluta dolores libero nam consequuntur cupiditate esse
          nesciunt enim alias accusamus ipsam, recusandae vel delectus et
          repellendus aspernatur veritatis?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptas quaerat illum nemo harum earum
          vel molestiae sunt deserunt! Repellat expedita necessitatibus
          aspernatur cupiditate, neque repellendus accusantium magni quibusdam
          porro ipsum.
        </p>
      </div>
    </div>
  );
}

export default BookModal;

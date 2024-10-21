import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

router.post('/', async(request, response)=>{
    try{
        const {title,author,publishyear} =request.body;
        if(!title ||!author || !publishyear)
        {
            return response.status(400).json({
                message: 'send all required field : title,author, publishyear',
            });
        }
        const newBook = {title,author,publishyear};
        const book =await Book.create(newBook);
        response.status(200).json({message: 'Book saved'})

        
    }catch(error)
    {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
});

router.get('/', async(request, response)=>{
    try{
        const books = await Book.find();
        response.status(200).json(books);
    }catch(error)
    {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
})
router.get('/:id', async(request, response)=>{
    try{
        
        const book = await Book.findById(request.params.id);
        response.status(200).json(book);
    }catch(error)
    {
        console.log(error.message);
        response.status(500).json({message: error.message});
    }
})
router.delete('/:id', async(request, response)=>{
        try{
            const book = await Book.findByIdAndDelete(request.params.id);
            if(!book)
            {
                return response.status(404).json({message: 'Book not found'})
            }
            response.status(200).json({message: 'Book deleted'})
        }catch(error)
        {
            console.log(error.message);
            response.status(500).json({message: error.message});
        }
    }
)
router.put( '/:id', async(request, response)=>{
        try{
            const {title,author,publishyear} =request.body;
            if(!title ||!author ||!publishyear)
            {
                return response.status(400).json({
                    message: 'send all required field : title,author, publishyear',
                });
            }
            const book = await Book.findByIdAndUpdate(request.params.id,request.body,{new:true});
            if(!book)
            {
                return response.status(404).json({message: 'Book not found'})
            }
            response.status(200).json(book);
        }catch(error)
        {
            console.log(error.message);
            response.status(500).json({message: error.message});
        }
    }
)


export default router;
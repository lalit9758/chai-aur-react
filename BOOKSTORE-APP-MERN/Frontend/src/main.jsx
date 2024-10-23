import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import CreateBook from './Pages/CreateBook/CreateBook.jsx'
import ShowBooks from './Pages/ShowBooks/ShowBooks.jsx'
import DeleteBook from './Pages/DeleteBook/DeleteBook.jsx'
import EditBook from './Pages/EditBook/EditBook.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='/Books/CreateBook' element={<CreateBook />}/>
      <Route path='/Books/DeleteBook/:id' element={<DeleteBook />}/>
      <Route path='/Books/EditBook/:id' element={<EditBook />}/>
      <Route path='/Books/ShowBook/:id' element={<ShowBooks />}/>
      {/* <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} 
      /> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

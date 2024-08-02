import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { GetElement } from './utils/getElement'
import { Home } from './components/custom/home'
import { Auth } from './components/custom/auth'
import { JoinChat } from './components/custom/joinchat'
import { CreateChat } from './components/custom/createchat'
import { AnimatePresence } from 'framer-motion'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GetElement />,
      children: [{
        index: true,
        element: <Home />
      },{
        path: 'v1',
        children: [{
          path: 'newChat',
          element: <CreateChat />
        },{
          path: 'joinChat',
          element: <JoinChat />
        },{
          path: 'auth',
          element: <Auth />
        },{
          path: 'roomchat/:room',
          element: /*<ChatRoom />*/<p>a</p>
        }]
      }]
    },{
      path: '*',
      element: /*<PageNotFound />*/<p>a</p>
    }
  ])

  return (
    <AnimatePresence mode='wait'>
      <RouterProvider router={router} key={location.pathname}/>
    </AnimatePresence>
  )
}

export default App

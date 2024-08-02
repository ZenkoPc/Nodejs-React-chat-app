import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { GetElement } from './utils/getElement'
import { Home } from './components/custom/home'

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
          element: /*<NewChat />*/<p>a</p>
        },{
          path: 'joinChat',
          element: /*<JoinChat />*/<p>a</p>
        },{
          path: 'auth',
          element: /*<Login />*/<p>a</p>
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
    <RouterProvider router={router} />
  )
}

export default App

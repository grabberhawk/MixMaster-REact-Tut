import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { loader as landingLoader } from './Pages/Landing'
import { loader as singleCocktailPageLoader } from './Pages/Cocktail'
import { action as formDataAction } from './Pages/Newsletter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
import {
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  HomeLayout,
  SinglePageError,
} from './Pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, //to make this as the default page

        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      {
        path: '/cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailPageLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: '/newsletter',
        action: formDataAction,
        element: <Newsletter />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
export default App

import { RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import { router } from './routes/AppRoutes';

function App() {
  return <RouterProvider router={router} />;
}
export default App;

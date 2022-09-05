import { BrowserRouter } from 'react-router-dom'
import '../configs/network/interceptors';
import AppRoutes from '../configs/routers/AppRoutes';

//disable logs .
console.warn = () => { };
console.info = () => { };
console.error = () => {};
console.log = () => {};
console.trace = () => {};


export const App :React.FC<any> = ()=> {
  return (
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}

export default App;

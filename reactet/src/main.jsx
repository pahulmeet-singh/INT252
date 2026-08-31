import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// index.html is the only file that is not a react component. It is a normal html file. It is the entry point of the application. It is the file that is loaded first when the application is run. It is the file that contains the root div where the react application will be mounted. It is also the file that contains the script tag that loads the main.jsx file which is the entry point of the react application.
// and the main.jsx file is the file that contains the code that renders the react application to the root div in the index.html file. It is the file that contains the code that creates the root of the react application and renders the App component to it. The App component is the main component of the application. It is the component that contains all the other components of the application. It is the component that is rendered to the root div in the index.html file.
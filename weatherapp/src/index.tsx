import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

//import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import './index.css'

import App from './App'

// export const theme = createTheme({
//     palette: {
//         primary: {
//             light: '#90caf9',
//             main: '#fff',
//             dark: '#42a5f5',
//             // contrastText: will be calculated to contrast with palette.primary.main
//         },
//         secondary: {
//             light: '#0066ff',
//             main: '#16478b',
//             // dark: will be calculated from palette.secondary.main,
//             contrastText: '#ffcc00',
//         },
//         // Used by `getContrastText()` to maximize the contrast between
//         // the background and the text.
//         contrastThreshold: 3,
//         // Used by the functions below to shift a color's luminance by approximately
//         // two indexes within its tonal palette.
//         // E.g., shift from Red 500 to Red 300 or Red 700.
//         tonalOffset: 0.2,
//     }
// });

ReactDOM.render(
  
  <Provider store={store}>
    
      <App />
    
  </Provider>
 ,
  document.getElementById('root')
)

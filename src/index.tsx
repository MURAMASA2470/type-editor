import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Routes from './routes'
import reportWebVitals from './reportWebVitals'

const loading = (): JSX.Element => <p>Loading...</p>

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={loading}>
        <BrowserRouter>
            <Switch>
              {Routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
              <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

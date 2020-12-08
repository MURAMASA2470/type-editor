import React from 'react'

const Dashbord = React.lazy(() => import('./pages/App'))

const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashbord },
]

export default routes
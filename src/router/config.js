import * as routes from './links'
import Home from '../pages/Home'
import NotFound from '../pages/404'

export default [
  {
    path: routes.HOME,
    component: Home,
    auth: false,
    nav: true
  },
  {
    path: routes.NOT_FOUND,
    component: NotFound,
    auth: false,
    nav: false
  },
]
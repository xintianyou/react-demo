import Home from './views/Home'
import Game from './views/Game'
import News from './views/News'
import Product from './views/Product'

const routes = [
	{
	  path: '/',
	  component: Home,
	  exact: true
	},
	{
	  path: '/game',
	  component: Game
	},
	{
	  path: '/news',
	  component: News
	},
	{
	  path: '/product',
	  component: Product
	}
]
export default routes;
import BasicDemo from './pages/BasicDemo'
import CustomInlineButtonDemo from './pages/CustomInlineButtonDemo'
import MultipleEditorsDemo from './pages/MultipleEditorsDemo'
import RawContentDemo from './pages/RawContentDemo'

const routes = [
  {
	  path: 'basic',
	  component: BasicDemo,
	},
  {
	  path: 'custom-inline-button',
	  component: CustomInlineButtonDemo,
	},
	{
	  path: 'multiple-editors-test',
	  component: MultipleEditorsDemo,
	},
	{
	  path: 'raw-content-test',
	  component: RawContentDemo,
	},
]

export default routes
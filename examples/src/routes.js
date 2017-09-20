import BasicDemo from './pages/BasicDemo'
import CustomInlineButtonDemo from './pages/CustomInlineButtonDemo'
import MultipleEditorsDemo from './pages/MultipleEditorsDemo'
import RawContentDemo from './pages/RawContentDemo'
import CustomBlockButtonDemo from './pages/CustomBlockButtonDemo'
import CustomBlockButtonDraftApiDemo from './pages/CustomBlockButtonDraftApiDemo'
import CustomMenu from './pages/CustomMenu'
import CustomSideControl from './pages/CustomSideControl'

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
	{
		path: 'custom-block-button',
		component: CustomBlockButtonDemo,
	},
	{
		path: 'custom-block-button-draft-api',
		component: CustomBlockButtonDraftApiDemo,
	}, 
	{
		path: 'custom-menu',
		component: CustomMenu
	},
	{
		path: 'side-control',
		component: CustomSideControl
	}
]

export default routes
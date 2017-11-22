import React  from 'react'
import HeaderOneButton from './HeaderOneButton'
import HeaderTwoButton from './HeaderTwoButton'
import UnorderedListItemButton from './UnorderedListItemButton'
import OrderedListItemButton from './OrderedListItemButton'
import BlockQuoteButton from './BlockQuoteButton'
import CodeBlockButton from './CodeBlockButton'

export default [
  <HeaderOneButton key="header-one-button" />,
  <HeaderTwoButton key="header-two-button" />,
  <UnorderedListItemButton key="unordered-list-button" />,
  <OrderedListItemButton key="ordered-list-button" />,
  <BlockQuoteButton key="block-quote-button" />,
  <CodeBlockButton key="code-block-button" />,
]
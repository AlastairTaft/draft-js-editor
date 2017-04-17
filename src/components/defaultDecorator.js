import React from 'react'
import { Entity, CompositeDecorator } from 'draft-js'

function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        (Entity.get(entityKey).getType() === 'LINK'
          // For backward compatibility
          || Entity.get(entityKey).getType() === 'link')
      );
    },
    callback
  );
}

const Link = (props) => {
  const {href} = Entity.get(props.entityKey).getData();
  return (
    <a href={href}>
      {props.children}
    </a>
  );
};

const decorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
]);

export default decorator
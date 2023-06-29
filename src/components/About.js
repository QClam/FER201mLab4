import React, { useContext } from 'react';
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize';
export default function About() {
    return (
<Collapsible accordion>
  <CollapsibleItem
    expanded={false}
    header="Hello"
    icon={<Icon>filter_drama</Icon>}
    node="div"
  >
    This website contains 9 films to test.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Nation"
    icon={<Icon>place</Icon>}
    node="div"
  >
    USA, Japan.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Welcome"
    icon={<Icon>whatshot</Icon>}
    node="div"
  >
    Welcome to my website
  </CollapsibleItem>
</Collapsible>
    )
}
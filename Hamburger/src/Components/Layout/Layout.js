import React from 'react';

import Aux from '../../Hoc/Aux';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawe, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;

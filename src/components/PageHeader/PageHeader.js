import React from 'react';
import { Link } from 'react-router-dom';

import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import {
  Header,
  HeaderName,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';

class PageHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Header">
              <SkipToContent />
              <HeaderName element={Link} to="/" prefix="AAAI 2023">
                Bridge Program
              </HeaderName>
            </Header>
          </>
        )}
      />
    );
  }
}

export default PageHeader;

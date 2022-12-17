import React from 'react';
import { Link } from 'react-router-dom';

import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import {
  Header,
  HeaderName,
  SkipToContent,
  HeaderNavigation,
  HeaderMenuItem,
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
              }
              <HeaderNavigation aria-label="Tools">
                <HeaderMenuItem
                  element={Link}
                  to="/tools"
                  className="pink-diminish">
                  Tools
                </HeaderMenuItem>
                <HeaderMenuItem
                  element={Link}
                  to="/posters"
                  className="blue-diminish">
                  Posters
                </HeaderMenuItem>
                <HeaderMenuItem
                  element={Link}
                  to="/program"
                  className="green-diminish">
                  Program
                </HeaderMenuItem>
              </HeaderNavigation>
            </Header>
          </>
        )}
      />
    );
  }
}

export default PageHeader;

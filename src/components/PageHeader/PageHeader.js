import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderContainer,
  SkipToContent,
  HeaderNavigation,
  HeaderMenuItem,
} from '@carbon/react';

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
              <HeaderName as={Link} to="/" prefix="AAAI 2023">
                Bridge Program
              </HeaderName>
              <HeaderNavigation aria-label="Tools">
                <HeaderMenuItem as={Link} to="/tools" className="pink-diminish">
                  Tools
                </HeaderMenuItem>
                <HeaderMenuItem
                  as={Link}
                  to="/posters"
                  className="blue-diminish">
                  Posters
                </HeaderMenuItem>
                <HeaderMenuItem
                  as={Link}
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

import React from 'react';
import { shuffleArray } from '../../components/Info';
import { Tools } from '../LandingPage/data/Tools';
import { DocumentVideo, LogoGithub, Home } from '@carbon/icons-react';
import {
  Theme,
  Grid,
  Column,
  Tile,
  Button,
  ButtonSet,
  Link,
  ToastNotification,
} from '@carbon/react';

const ToolsShuffled = shuffleArray(Tools);
const link_to_slack =
  'https://urldefense.proofpoint.com/v2/url?u=https-3A__join.slack.com_t_ai4bpm_shared-5Finvite_zt-2D1hcar007m-2D97CUY2F4PUK5BCmVddYZHg&d=DwMFaQ&c=jf_iaSHvJObTbx-siA1ZOg&r=lxDocy3Tofo6h1mjeOs7RQ&m=4otHwQCA9jC8-O_Cq5AWV1Bz1HI-VfVACocnpxf3VsbZgZl3LfCqtmY3BkMKWzF3&s=S9wWtM_n638mI8yiHJNBPVJzgYNlhNGY2fDIiKr_SP8&e=';

const Tool = props => (
  <Column lg={4} md={4} sm={4} style={{ padding: 0, margin: 10 }}>
    <Tile className={`${props.props.name ? 'tool' : ''}`}>
      <h6 className="text-blue">{props.props.name}</h6>
      <p className={`${props.props.name ? '' : 'text-blue'}`}>
        {props.props.description}
      </p>

      <div className="tool-links">
        <ButtonSet>
          {props.props.code && (
            <Button
              size="sm"
              className="button-diminish"
              href={props.props.code}
              target="_blank"
              hasIconOnly
              renderIcon={LogoGithub}
              iconDescription="GitHub"
              kind="ghost"
            />
          )}

          {props.props.home && (
            <Button
              size="sm"
              className="button-diminish"
              href={props.props.home}
              target="_blank"
              hasIconOnly
              renderIcon={Home}
              iconDescription="Home"
              kind="ghost"
            />
          )}

          {props.props.video && (
            <Button
              size="sm"
              className="button-diminish"
              href={props.props.video}
              target="_blank"
              hasIconOnly
              renderIcon={DocumentVideo}
              iconDescription="Video"
              kind="ghost"
            />
          )}
        </ButtonSet>
      </div>
    </Tile>
  </Column>
);

class ToolsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Theme theme="g10" style={{ minHeight: '100vh' }}>
        <br />
        <Grid>
          {ToolsShuffled.map((item, key) => (
            <React.Fragment key={key}>
              <Tool props={item} />
            </React.Fragment>
          ))}
        </Grid>
        <br />
      </Theme>
    );
  }
}

export default ToolsPage;

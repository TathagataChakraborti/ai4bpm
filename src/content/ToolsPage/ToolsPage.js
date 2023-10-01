import React from 'react';
import { shuffleArray } from '../../components/Info';
import { Tools } from '../LandingPage/data/Tools';
import { DocumentVideo, LogoGithub, Home } from '@carbon/icons-react';
import {
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
  <div
    className="bx--col-lg-4"
    style={{ display: 'inline-table', paddingRight: '0' }}>
    <Tile className={`${props.props.name ? 'tool' : ''}`}>
      <div className="bx--row" style={{ position: 'relative' }}>
        <div className="bx--col-lg-12">
          <h6 className="text-blue">{props.props.name}</h6>
          <p className={`${props.props.name ? '' : 'text-blue'}`}>
            {props.props.description}
          </p>
        </div>
      </div>

      <div className="tool-links">
        <ButtonSet>
          {props.props.code && (
            <Button
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
  </div>
);

class ToolsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bx--row">
        <div className="bx--col-lg-16">
          <div
            className="bx--grid bx--grid--full-width container"
            style={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            <br />
            <br />

            <div className="bx--row">
              {ToolsShuffled.map((item, key) => (
                <React.Fragment key={key}>
                  <Tool props={item} />
                </React.Fragment>
              ))}

              <div className="bx--col-lg-4" style={{ paddingRight: 0 }}>
                <ToastNotification
                  lowContrast
                  kind="info"
                  style={{ width: '100%', margin: 0 }}
                  caption={
                    <Link href={link_to_slack} target="_blank">
                      Join Slack
                    </Link>
                  }
                  iconDescription="close button"
                  subtitle={
                    <span>
                      Spotted a new tool? Please leave a link in our community
                      on Slack and we will add it here upon review.{' '}
                      <span role="img" aria-label="hugging face emoji">
                        &#x1f917;
                      </span>
                    </span>
                  }
                  timeout={0}
                  title="New Additions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolsPage;

import React from 'react';
import { ReferenceList } from './data/References';
import { InvitedList } from './data/Speakers';
import { TeamList } from './data/Team';
import { SisterVenues } from './data/SisterVenues';
import { Timeline } from 'react-twitter-widgets';
import {
  Reference,
  Instructor,
  Resource,
  shuffleArray,
} from '../../components/Info';

import { Theme, Grid, Column, Button, StructuredListBody } from '@carbon/react';

const DEFAULT_MODE = 'in-person';
const link_to_slack =
  'https://urldefense.proofpoint.com/v2/url?u=https-3A__join.slack.com_t_ai4bpm_shared-5Finvite_zt-2D1hcar007m-2D97CUY2F4PUK5BCmVddYZHg&d=DwMFaQ&c=jf_iaSHvJObTbx-siA1ZOg&r=lxDocy3Tofo6h1mjeOs7RQ&m=4otHwQCA9jC8-O_Cq5AWV1Bz1HI-VfVACocnpxf3VsbZgZl3LfCqtmY3BkMKWzF3&s=S9wWtM_n638mI8yiHJNBPVJzgYNlhNGY2fDIiKr_SP8&e=';
const link_to_database =
  'https://ai4bmpback.smdmweo62qh.us-east.codeengine.appdomain.cloud';

const TeamListShuffled = shuffleArray(TeamList);
const ExtendedSpeakerList = shuffleArray(TeamList).filter(item => item.speaker);

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      registered: false,
      register_count: 0,
      email: '',
      mode: DEFAULT_MODE,
      data: [],
      options: {
        height: '50px',
        meter: {
          proportional: {
            total: 0,
            unit: 'registrations',
          },
        },
        color: {
          pairing: {
            option: 1,
          },
        },
        toolbar: {
          enabled: false,
        },
      },
    };
  }

  updateData = data => {
    const new_data = [
      {
        group: 'In person',
        value: data['entries']['in-person'],
      },
      {
        group: 'Online',
        value: data['entries']['hybrid'],
      },
      {
        group: 'Not sure yet',
        value: data['entries']['dont-know'],
      },
    ];

    this.setState({
      ...this.state,
      register_count: data['count'],
      data: new_data,
      options: {
        ...this.state.options,
        meter: {
          ...this.state.options.meter,
          proportional: {
            ...this.state.options.meter.proportional,
            total: data['count'],
          },
        },
      },
    });
  };

  componentDidMount = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    async function fetchData() {
      var response = await fetch(link_to_database + '/fetch', requestOptions);
      return response.json();
    }

    fetchData()
      .then(data => {
        if (data.success) {
          this.updateData(data);
        }
      })
      .catch(error => {});
  };

  handleSelectionChange = e => {
    this.setState({
      ...this.state,
      mode: e,
    });
  };

  handleInputChange = e => {
    this.setState({
      ...this.state,
      email: e.target.value,
    });
  };

  addNewItem = e => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        mode: this.state.mode,
      }),
    };

    async function register() {
      var response = await fetch(
        link_to_database + '/register',
        requestOptions
      );
      return response.json();
    }

    register()
      .then(data => {
        this.setState({
          ...this.state,
          message: data.info,
          registered: true,
        });

        if (data.success) this.updateData(data);
      })
      .catch(error => {});
  };

  render() {
    return (
      <Theme theme="g10">
        <Grid>
          <Column lg={10} md={8} sm={4}>
            <Theme theme="g10" style={{ paddingBottom: '50px' }}>
              <div style={{ paddingTop: '50px' }}>
                <h1 className="text-blue">AAAI 2023 Bridge Program on</h1>
                <h1 className="title">
                  Artificial Intelligence and Business Process Management
                </h1>

                <br />

                <h6>Feb 7-8, 2023. Washington DC, USA.</h6>
                <br />

                <p>
                  The AI4BPM Bridge at AAAI 2023 brings together academics and
                  industry professionals working at the intersection of
                  artificial intelligence and business process management under
                  the same roof. The event will include invited talks, poster
                  sessions, tutorials, student outreach, meet and mingle
                  opportunities, hands-on system demonstrations, and much more!
                </p>

                <br />
                <br />
                <Button
                  className="call-button"
                  href="/#/program"
                  kind="secondary"
                  size="sm">
                  Program
                </Button>

                <br />
                <br />
                <Button
                  className="call-button"
                  target="_blank"
                  href={link_to_slack}
                  size="sm"
                  kind="danger">
                  Join on Slack
                </Button>

                <br />
                <br />
                <br />
                <br />
                <h4>Speakers</h4>
                <hr />

                <Grid>
                  {InvitedList.map((item, key) => (
                    <React.Fragment key={key}>
                      <Instructor props={item} />
                    </React.Fragment>
                  ))}
                  {ExtendedSpeakerList.map((item, key) => (
                    <React.Fragment key={key}>
                      <Instructor props={item} />
                    </React.Fragment>
                  ))}
                </Grid>

                <h4 style={{ marginTop: '100px' }}>Organizing Team</h4>
                <hr />
                <Grid>
                  {TeamListShuffled.map((item, key) => (
                    <React.Fragment key={key}>
                      <Instructor props={item} />
                    </React.Fragment>
                  ))}
                </Grid>
              </div>
            </Theme>
          </Column>

          <Column lg={6} md={8} sm={4}>
            <Theme
              theme="white"
              style={{ height: '100%', paddingBottom: '50px' }}>
              <Column lg={16} md={8} sm={4}>
                <img
                  style={{ padding: '30px' }}
                  src="/logo.png"
                  alt="logo"
                  width="90%"
                />

                <StructuredListBody>
                  {ReferenceList.map((item, key) => (
                    <React.Fragment key={key}>
                      <Reference props={item} />
                    </React.Fragment>
                  ))}
                </StructuredListBody>

                <br />
                <br />

                {SisterVenues.map((item, key) => (
                  <React.Fragment key={key}>
                    <Resource props={item} />
                  </React.Fragment>
                ))}

                <br />
                <br />
              </Column>

              <Column lg={16} md={8} sm={4} style={{ padding: '10px' }}>
                <Timeline
                  dataSource={{
                    sourceType: 'url',
                    url:
                      'https://twitter.com/tchakra2/lists/1582753808479883265?ref_src=twsrc%5Etfw',
                  }}
                  options={{
                    height: '2000',
                  }}
                />
                <p className="disclaimer">
                  This list of AI4BPMers gets larger as and when{' '}
                  <a
                    href="https://twitter.com/tchakra2"
                    target="_blank"
                    rel="noopener noreferrer">
                    tchakra2
                  </a>{' '}
                  finds one on Twitter. If you want yourself to be added to it,
                  send him a DM.
                  <br />
                  <br />
                  The new Twitter or "X" under Elon has issues with embedding.
                  If you are unable to see tweets here, click "View on Twitter"
                  to view it on Twitter.
                </p>
              </Column>
            </Theme>
          </Column>
        </Grid>
      </Theme>
    );
  }
}

export default LandingPage;

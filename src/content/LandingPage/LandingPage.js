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

import '@carbon/charts/styles.css';
import { MeterChart } from '@carbon/charts-react';
import {
  ButtonSet,
  Button,
  TextInput,
  FormGroup,
  RadioButtonGroup,
  RadioButton,
  StructuredListBody,
} from 'carbon-components-react';

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
  to;

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
      <div className="bx--row">
        <div
          className="bx--col-lg-10"
          style={{ backgroundColor: '#f4f4f4', paddingRight: '0' }}>
          <div
            className="bx--grid bx--grid--full-width container"
            style={{ paddingTop: '50px' }}>
            <h1 className="text-blue">AAAI 2023 Bridge Program on</h1>
            <h1 className="title">
              Artificial Intelligence and Business Process Management
            </h1>

            <br />

            <h6>Feb 7-8, 2023. Washington DC, USA.</h6>
            <br />

            <div className="bx--row">
              <div className="bx--col-lg-12">
                <p>
                  The AI4BPM Bridge at AAAI 2023 brings together academics and
                  industry professionals working at the intersection of
                  artificial intelligence and business process management under
                  the same roof. The event will include invited talks, poster
                  sessions, tutorials, student outreach, meet and mingle
                  opportunities, hands-on system demonstrations, and much more!
                </p>
              </div>
            </div>

            <br />
            <br />
            <Button
              className="call-button"
              href="/program"
              kind="secondary"
              size="sm">
              Program
            </Button>

            <br />
            <br />
            <Button
              className="call-button"
              target="_blank"
              href="https://aaai.org/Conferences/AAAI-23"
              kind="primary"
              size="sm">
              Attending AAAI
            </Button>

            <br />
            <br />
            <Button
              className="call-button"
              target="_blank"
              href="https://aaai.org/Conferences/AAAI-23/covid-19-policy"
              kind="tertiary"
              size="sm">
              COVID Policy
            </Button>

            <br />
            <br />
            <br />
            <br />

            <div className="bx--row">
              <div className="bx--col-lg-8">
                <TextInput
                  light
                  helperText={
                    <>
                      {this.state.registered && (
                        <span className="text-blue">{this.state.message} </span>
                      )}
                      {this.state.register_count > 0 && (
                        <>
                          <span className="text-blue">
                            {this.state.register_count}
                          </span>{' '}
                          AI and BPM enthusiasts have expressed interest
                          already!
                        </>
                      )}
                    </>
                  }
                  id="email"
                  labelText="Help us plan by registering your interest here. This email will be used ONLY to contact you when the event goes life, and nothing else."
                  placeholder="Register with your contact email"
                  value={this.state.email}
                  onChange={this.handleInputChange.bind(this)}
                  disabled={this.state.registered}
                />

                <br />
                <br />
                {this.state.data && this.state.data.length > 0 && (
                  <>
                    <MeterChart
                      data={this.state.data}
                      options={this.state.options}></MeterChart>
                  </>
                )}

                <br />
                <br />

                <FormGroup legendText="How do you plan to attend the conference?">
                  <RadioButtonGroup
                    onChange={this.handleSelectionChange.bind(this)}
                    defaultSelected={DEFAULT_MODE}
                    legend="How do you plan to attend the conference?"
                    name="radio-hybrid"
                    valueSelected={this.state.mode}
                    orientation="horizontal"
                    labelPosition="right">
                    <RadioButton
                      id="radio-1"
                      labelText="In person"
                      value="in-person"
                    />
                    <RadioButton
                      id="radio-2"
                      labelText="Online"
                      value="hybrid"
                    />
                    <RadioButton
                      id="radio-3"
                      labelText="Not sure yet"
                      value="dont-know"
                    />
                  </RadioButtonGroup>
                </FormGroup>

                <ButtonSet>
                  <Button
                    className="call-button"
                    kind="primary"
                    size="sm"
                    onClick={this.addNewItem.bind(this)}
                    disabled={
                      this.state.email.length === 0 || this.state.registered
                    }>
                    Register
                  </Button>

                  <Button
                    className="call-button"
                    target="_blank"
                    href={link_to_slack}
                    size="sm"
                    kind="danger">
                    Join on Slack
                  </Button>
                </ButtonSet>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <h4>Speakers</h4>
            <hr />

            <div className="bx--row">
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
            </div>

            <h4 style={{ marginTop: '100px' }}>Organizing Team</h4>
            <hr />
            <Button
              target="_blank"
              href="mailto::ai4bpm-aaai@easychair.org"
              size="sm"
              kind="primary">
              Contact
            </Button>
            <br />
            <br />

            <div className="bx--row">
              {TeamListShuffled.map((item, key) => (
                <React.Fragment key={key}>
                  <Instructor props={item} />
                </React.Fragment>
              ))}
            </div>
          </div>

          <img
            src="/images/bridge.png"
            style={{ marginTop: '1250px' }}
            width="100%"
            alt="bridge"
          />
        </div>

        <div className="bx--col-lg-6">
          <div
            className="bx--grid bx--grid--full-width container"
            style={{
              paddingTop: '50px',
              backgroundColor: 'white',
              position: 'relative',
              height: '100%',
            }}>
            <img src="/logo.png" alt="logo" width="90%" />

            <div style={{ marginTop: '50px', marginBottom: '50px' }}>
              <StructuredListBody>
                {ReferenceList.map((item, key) => (
                  <React.Fragment key={key}>
                    <Reference props={item} />
                  </React.Fragment>
                ))}
              </StructuredListBody>

              {SisterVenues.map((item, key) => (
                <React.Fragment key={key}>
                  <Resource props={item} />
                </React.Fragment>
              ))}
            </div>

            <div className="bx--col-lg-16">
              <Timeline
                dataSource={{
                  sourceType: 'url',
                  url:
                    'https://twitter.com/tchakra2/timelines/1582756937313456128?ref_src=twsrc%5Etfw',
                }}
                options={{
                  height: '2500',
                }}
              />
            </div>

            <img
              style={{
                marginTop: '150px',
                marginBottom: '50px',
                marginLeft: '10px',
                position: 'absolute',
                bottom: '0',
              }}
              src="/images/ibm.png"
              alt="IBM Research"
              width="50%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

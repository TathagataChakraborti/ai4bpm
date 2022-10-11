import React from 'react';
import { ReferenceList } from './data/References';
import { InvitedList } from './data/Speakers';
import { TeamList } from './data/Team';
import { SisterVenues } from './data/SisterVenues';
import { Tools } from './data/Tools';
import {
  Reference,
  Instructor,
  Resource,
  Tool,
  shuffleArray,
} from '../../components/Info';

import '@carbon/charts/styles.css';
import { MeterChart } from '@carbon/charts-react';
import {
  StructuredListBody,
  Tile,
  ButtonSet,
  Button,
  Link,
  TextInput,
  ProgressStep,
  ProgressIndicator,
  ToastNotification,
  FormGroup,
  RadioButtonGroup,
  RadioButton,
  UnorderedList,
  ListItem,
} from 'carbon-components-react';

const DEFAULT_MODE = 'in-person';
const link_to_database =
  'https://ai4bmpback.smdmweo62qh.us-east.codeengine.appdomain.cloud';

const TeamListShuffled = shuffleArray(TeamList);
const ToolsShuffled = shuffleArray(Tools.splice(0, Tools.length - 1));

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
        title: 'Interest gauge',
        height: '125px',
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
          style={{ paddingBottom: '100px', backgroundColor: '#f4f4f4' }}>
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
            <br />

            <div className="bx--row">
              <div className="bx--col-lg-12">
                <p>
                  The AI4BPM Bridge at AAAI 2023 hopes to bring together
                  academics and industry professionals working at the
                  intersection of artificial intelligence and business process
                  management under the same roof. The event will include
                  invitied talks, contributed talks, poster sessions, student
                  outreach, meet and mingle opportunities, hands-on system
                  demonstrations, tutorials, and much more! Learn more about the
                  first ever bridge program at AAAI{' '}
                  <Link
                    href="https://aaai.org/Conferences/AAAI-23/bridge-program-call"
                    target="_blank">
                    here
                  </Link>
                  .
                </p>

                <br />
                <br />

                <div className="bx--col-lg-12">
                  <TextInput
                    light
                    helperText={
                      <>
                        {this.state.registered && (
                          <span className="text-blue">
                            {this.state.message}{' '}
                          </span>
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
                    placeholder="Contact email"
                    value={this.state.email}
                    onChange={this.handleInputChange.bind(this)}
                    disabled={this.state.registered}
                  />

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

                  <Button
                    kind="primary"
                    size="sm"
                    onClick={this.addNewItem.bind(this)}
                    disabled={
                      this.state.email.length === 0 || this.state.registered
                    }>
                    Register
                  </Button>
                </div>
              </div>
            </div>

            <div className="bx--row" style={{ marginTop: '50px' }}>
              <div className="bx--col-lg-10" style={{ padding: '10px' }}>
                <fieldset className="toolbox">
                  <legend className="text-blue" style={{ margin: '10px' }}>
                    Call for Contributions
                  </legend>

                  <div className="bx--col-lg-16">
                    We welcome three types of contributions from interested
                    participants:
                    <div className="bx--col-lg-16">
                      <UnorderedList>
                        <ListItem style={{ marginTop: '10px' }}>
                          <strong>Contributed posters:</strong> Participants are
                          encouraged to submit 2-page abstracts on their work to
                          participate in the extended poster and meet-and-greet
                          session. This can be about recently published or
                          ongoing (or under review) work.
                        </ListItem>
                        <ListItem style={{ marginTop: '10px' }}>
                          <strong>System demonstrations:</strong> The poster
                          session will also feature live system demonstrations
                          of tools and softwares that are useful to both AI and
                          BPM communities. Treat this as a demonstration
                          submission to a conference, but specifically on the AI
                          x BPM topic.
                        </ListItem>
                        <ListItem style={{ marginTop: '10px' }}>
                          <strong>Student contributions:</strong> Students
                          working at the intersection of AI and BPM are
                          encouraged to submit 2-page abstracts summarizing
                          their work. Students will be given an opportunity to
                          present their work as posters and will also be paired
                          with mentors for dedicated mentoring sessions. Treat
                          this as a doctoral consortium submission to a
                          conference, but specifically on the AI x BPM topic.
                        </ListItem>
                      </UnorderedList>
                    </div>
                    <ButtonSet style={{ marginTop: '30px' }}>
                      <Button
                        disabled
                        target="_blank"
                        href=""
                        size="sm"
                        kind="secondary"
                        className="call-button">
                        Read the Full Call
                      </Button>
                      <Button
                        disabled
                        target="_blank"
                        href=""
                        size="sm"
                        kind="primary"
                        className="call-button">
                        Submit on EasyChair
                      </Button>
                    </ButtonSet>
                  </div>

                  <br />
                </fieldset>
              </div>
              <div className="bx--col-lg-6">
                <ProgressIndicator
                  vertical
                  currentIndex={1}
                  style={{ marginTop: '15px' }}>
                  <ProgressStep
                    current
                    label="Call for Contributions"
                    secondaryLabel={
                      <>
                        <span style={{ color: 'Blue' }}>Coming soon</span>
                      </>
                    }
                  />
                  <ProgressStep
                    label="Submissions Due"
                    secondaryLabel="Nov 18, 2022"
                  />
                  <ProgressStep
                    label="Author Notifications"
                    secondaryLabel="Dec 2, 2022"
                  />
                  <ProgressStep
                    label="AI4BPM at AAAI 2023"
                    secondaryLabel="Feb 7-8, 2023"
                  />
                </ProgressIndicator>
              </div>
            </div>

            <hr />

            <div className="bx--row">
              <div className="bx--col-lg-10">
                <div style={{ marginBottom: '50px' }}>
                  <ToastNotification
                    lowContrast
                    kind="info"
                    style={{ width: '100%' }}
                    caption={
                      <Link
                        href="https://twitter.com/tsitsulin_/status/1571082786181894146"
                        target="_blank">
                        Learn more
                      </Link>
                    }
                    iconDescription="close button"
                    subtitle={
                      <span>
                        We stand with the global AI community and recognize that
                        most of the world cannot attend conferences in Europe
                        and the USA. This disproportionately affects our black
                        and brown colleagues. While we hope that you can attend
                        in person if you can, in conversations with AAAI 2023,
                        we commit to a hybrid format, until such time
                        conferences can find more friendly hosts.
                      </span>
                    }
                    timeout={0}
                    title="Event Format"
                  />
                </div>
              </div>
              <div className="bx--col-lg-6" style={{ paddingTop: '20px' }}>
                {this.state.data && this.state.data.length > 0 && (
                  <>
                    <MeterChart
                      data={this.state.data}
                      options={this.state.options}></MeterChart>
                    <br />
                    <br />
                    <Button
                      target="_blank"
                      href="https://urldefense.proofpoint.com/v2/url?u=https-3A__join.slack.com_t_ai4bpm_shared-5Finvite_zt-2D1hcar007m-2D97CUY2F4PUK5BCmVddYZHg&d=DwMFaQ&c=jf_iaSHvJObTbx-siA1ZOg&r=lxDocy3Tofo6h1mjeOs7RQ&m=4otHwQCA9jC8-O_Cq5AWV1Bz1HI-VfVACocnpxf3VsbZgZl3LfCqtmY3BkMKWzF3&s=S9wWtM_n638mI8yiHJNBPVJzgYNlhNGY2fDIiKr_SP8&e="
                      size="sm"
                      kind="danger">
                      Join us on Slack
                    </Button>
                  </>
                )}
              </div>
            </div>

            <h4 style={{ marginTop: '100px' }}>Tentative Schedule</h4>
            <hr />

            <div className="bx--row">
              <div className="bx--col-lg-16">
                <Tile
                  style={{ backgroundColor: '#fafafa', marginBottom: '20px' }}>
                  <p>
                    More details of the program, including new speakers,
                    tutorials, and featured tools for system demonstrations,
                    will be announced in due course. Make sure to register your
                    interest above, to get a notification when the event is
                    confirmed.
                  </p>
                </Tile>
              </div>
            </div>

            <fieldset className="bx--col-lg-12 toolbox">
              <legend className="text-blue">
                Featured Tools and System Demonstrations
              </legend>

              <div className="bx--row">
                <div className="bx--col-lg-14">
                  <div className="bx--row">
                    {ToolsShuffled.map((item, key) => (
                      <React.Fragment key={key}>
                        <Tool props={item} />
                      </React.Fragment>
                    ))}
                    <React.Fragment key={Tools.length}>
                      <Tool props={Tools[0]} />
                    </React.Fragment>
                  </div>
                </div>
              </div>
            </fieldset>

            <h4 style={{ marginTop: '100px' }}>Confirmed Speakers</h4>
            <hr />

            <div className="bx--row">
              {InvitedList.map((item, key) => (
                <React.Fragment key={key}>
                  <Instructor props={item} />
                </React.Fragment>
              ))}
            </div>

            <h4 style={{ marginTop: '100px' }}>Organizing Team</h4>
            <hr />

            <div className="bx--row">
              {TeamListShuffled.map((item, key) => (
                <React.Fragment key={key}>
                  <Instructor props={item} />
                </React.Fragment>
              ))}
            </div>
          </div>
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

            <div style={{ marginTop: '50px', marginBottom: '150px' }}>
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

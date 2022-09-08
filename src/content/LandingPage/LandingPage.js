import React from 'react';
import { ReferenceList } from './data/References';
import { TeamList } from './data/Team';
import { SisterVenues } from './data/SisterVenues';
import {
  Reference,
  Instructor,
  Resource,
  shuffleArray,
} from '../../components/Info';

import {
  StructuredListBody,
  Button,
  Link,
  TextInput,
  ProgressStep,
  ProgressIndicator,
} from 'carbon-components-react';

const TeamListShuffled = shuffleArray(TeamList);
const SisterVenuesShuffled = shuffleArray(SisterVenues);
const link_to_database = 'http://localhost:3456/';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      registered: false,
      register_count: 0,
      email: '',
    };
  }

  componentDidMount = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    async function fetchData() {
      var response = await fetch(link_to_database + 'fetch', requestOptions);
      return response.json();
    }

    fetchData()
      .then(data => {
        if (data['success'])
          this.setState({
            ...this.state,
            register_count: data['info'],
          });
      })
      .catch(error => {});
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
      }),
    };

    async function register() {
      var response = await fetch(link_to_database + 'register', requestOptions);
      return response.json();
    }

    register()
      .then(data => {
        if (data.success) {
          this.setState({
            ...this.state,
            message: data.info,
            registered: true,
            register_count: this.state.register_count + 1,
          });
        } else {
          console.log(data);
          this.setState({
            ...this.state,
            message: data.info,
            registered: true,
          });
        }
      })
      .catch(error => {});
  };

  render() {
    return (
      <div className="bx--row">
        <div className="bx--col-lg-10" style={{ backgroundColor: '#f4f4f4' }}>
          <div
            className="bx--grid bx--grid--full-width container"
            style={{ paddingTop: '50px' }}>
            <h1 className="text-blue">AAAI 2023 Bridge on</h1>
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
                            {this.state.message}
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
                  <Button
                    kind="primary"
                    size="sm"
                    onClick={this.addNewItem.bind(this)}
                    disabled={
                      this.state.email.length === 0 || this.state.registered
                    }>
                    Register
                  </Button>

                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>

              <div className="bx--col-lg-4">
                <ProgressIndicator vertical currentIndex={1}>
                  <ProgressStep
                    current
                    label={
                      <>
                        <span style={{ color: 'Blue' }}>Planning Stage </span>
                      </>
                    }
                  />
                  <ProgressStep
                    label={
                      <>
                        <span style={{ color: 'Blue' }}>Submissions Due </span>
                      </>
                    }
                    secondaryLabel="Nov 18, 2022"
                  />
                  <ProgressStep
                    label="Author Notifications"
                    secondaryLabel="Dec 2, 2022"
                  />
                  <ProgressStep
                    label="AAAI 2023"
                    secondaryLabel="Feb 7-8, 2022"
                  />
                </ProgressIndicator>
              </div>
            </div>

            <h4 style={{ marginTop: '100px' }}>Organizing Team</h4>
            <hr />

            <div className="bx--row">
              {TeamListShuffled.map((item, key) => (
                <React.Fragment key={key}>
                  <Instructor props={item} />
                </React.Fragment>
              ))}

              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="bx--col-lg-6">
          <div
            className="bx--grid bx--grid--full-width container"
            style={{ paddingTop: '50px', backgroundColor: 'white' }}>
            <img src="/logo.png" alt="logo" width="90%" />

            <br />
            <br />
            <br />
            <br />

            <StructuredListBody>
              {ReferenceList.map((item, key) => (
                <React.Fragment key={key}>
                  <Reference props={item} />
                </React.Fragment>
              ))}
            </StructuredListBody>

            {SisterVenuesShuffled.map((item, key) => (
              <React.Fragment key={key}>
                <Resource props={item} />
              </React.Fragment>
            ))}

            <img
              style={{
                marginTop: '150px',
                marginBottom: '50px',
                marginLeft: '10px',
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

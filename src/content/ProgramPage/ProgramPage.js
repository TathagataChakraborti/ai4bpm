import React from 'react';
import {
  Tile,
  Button,
  ButtonSet,
  Link,
  ProgressStep,
  ProgressIndicator,
  ToastNotification,
  UnorderedList,
  ListItem,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
} from 'carbon-components-react';

const link_to_call = '/shared/call.pdf';

class ProgramPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <div
            className="bx--grid bx--grid--full-width container"
            style={{ minHeight: '100vh' }}>
            <br />
            <div className="bx--row">
              <div className="bx--col-lg-4">
                <ToastNotification
                  lowContrast
                  kind="error"
                  iconDescription="close button"
                  subtitle={
                    <span>
                      This page is under construction. Missing details will be
                      filled in soon after the conference logistics are more
                      settled.
                    </span>
                  }
                  timeout={0}
                  title="Under Construction"
                />
              </div>
            </div>

            <h4 style={{ marginTop: '50px' }}>Tentative Schedule</h4>
            <hr />

            <div className="bx--row">
              <div className="bx--col-lg-16">
                <Tile
                  style={{ backgroundColor: '#fafafa', marginBottom: '20px' }}>
                  <p>
                    The following is a{' '}
                    <span style={{ color: 'red' }}>tentative</span> schedule.
                    More details, including speakers, tutorials, and featured
                    tools for system demonstrations, will be announced soon.
                    Make sure to register your interest{' '}
                    <Link href="/">here</Link>, to get a notification when the
                    event is confirmed.
                  </p>
                </Tile>
              </div>
            </div>

            <div className="bx--row">
              <div className="bx--col-lg-16">
                <StructuredListWrapper ariaLabel="Structured list">
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Day 1</StructuredListCell>
                      <StructuredListCell head>Feb 7, 2023</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    <StructuredListRow>
                      <StructuredListCell>8:00 - 15:00 EST</StructuredListCell>
                      <StructuredListCell>Half-Day Tutorial</StructuredListCell>
                      <StructuredListCell>
                        Topics on Artificial Intelligence and Business Process
                        Management, Process Modeling, Process Mining and
                        Discovery, Prediction, and Conformance Checking, with
                        applications to Robotic Process Automation, Web Service
                        Composition, and so on.
                      </StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                      <StructuredListCell>15:30 - 17:00 EST</StructuredListCell>
                      <StructuredListCell>
                        Poster and Demo Session
                      </StructuredListCell>
                      <StructuredListCell>
                        Extended meet-and-greet session around contributed
                        posters, student contributions, and highlighted tools
                        and software for AI4BPM practitioners.
                      </StructuredListCell>
                    </StructuredListRow>
                  </StructuredListBody>
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Day 2</StructuredListCell>
                      <StructuredListCell head>Feb 8, 2023</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    <StructuredListRow>
                      <StructuredListCell>8:00 - 14:30 EST</StructuredListCell>
                      <StructuredListCell>Invited Talks</StructuredListCell>
                      <StructuredListCell>
                        Final list of speakers will be announced soon.
                      </StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                      <StructuredListCell>15:00 - 16:00 EST</StructuredListCell>
                      <StructuredListCell>Breakout Sessions</StructuredListCell>
                      <StructuredListCell>
                        This will be an activity session with the audience
                        exploring topics of interest, blindspots, limitations,
                        and challenge tasks on the AI4BPM theme.
                      </StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                      <StructuredListCell>16:00 - 17:00 EST</StructuredListCell>
                      <StructuredListCell>Panel Discussion</StructuredListCell>
                      <StructuredListCell>
                        Panelists will continue the discussion from the breakout
                        sessions and conclude with calls to action for the
                        AI4BPM community on exciting research opportunities
                        ahead.
                      </StructuredListCell>
                    </StructuredListRow>
                  </StructuredListBody>
                </StructuredListWrapper>
              </div>
            </div>

            <div className="bx--row" style={{ paddingBottom: '50px' }}>
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
                          of tools and software that are useful to both AI and
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
                      <div style={{ lineHeight: 'normal', marginTop: '10px' }}>
                        Submissions should use the AAAI style files available{' '}
                        <Link
                          href="https://www.aaai.org/Publications/Templates/AnonymousSubmission23.zip"
                          target="_blank">
                          here
                        </Link>
                        . Submissions may be single-blind. References and
                        acknowledgements do not count within the 2-page limit.
                      </div>
                    </div>
                    <ButtonSet style={{ marginTop: '20px' }}>
                      <Button
                        target="_blank"
                        href="https://easychair.org/my/conference?conf=ai4bpm0"
                        size="sm"
                        kind="primary"
                        className="call-button"
                        disabled>
                        Submit on EasyChair
                      </Button>
                      <Button
                        target="_blank"
                        href={link_to_call}
                        size="sm"
                        kind="secondary"
                        className="call-button">
                        Read the Full Call
                      </Button>
                    </ButtonSet>
                    <br />
                    <div className="bx--row">
                      <div
                        className="bx--col-lg-12"
                        style={{ fontSize: 'smaller', lineHeight: 'normal' }}>
                        Submissions are now closed. View accepted posters{' '}
                        <Link href="/posters">here</Link>.
                      </div>
                    </div>
                  </div>

                  <br />
                </fieldset>
              </div>
              <div className="bx--col-lg-6">
                <ProgressIndicator
                  vertical
                  currentIndex={3}
                  style={{ marginTop: '15px' }}>
                  <ProgressStep
                    invalid
                    label="Call for Contributions"
                    secondaryLabel="Closed"
                  />
                  <ProgressStep
                    invalid
                    label="Submissions Due"
                    secondaryLabel="Nov 28, 2022"
                  />
                  <ProgressStep
                    label="Author Notifications"
                    secondaryLabel="Dec 2, 2022"
                  />
                  <ProgressStep
                    current
                    label="AI4BPM at AAAI 2023"
                    secondaryLabel="Feb 7-8, 2023"
                  />
                </ProgressIndicator>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgramPage;

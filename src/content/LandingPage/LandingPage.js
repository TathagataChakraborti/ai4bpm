import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import {
  Reference,
  Instructor,
  Resource,
  shuffleArray,
} from '../../components/Info';

import { Theme, Grid, Column, StructuredListBody } from '@carbon/react';

let ReferenceList = require('./data/References.json');
let InvitedList = require('./data/Speakers.json');
let TeamList = require('./data/Team.json');
let SisterVenues = require('./data/SisterVenues.json');

const TeamListShuffled = shuffleArray(TeamList);
const ExtendedSpeakerList = shuffleArray(TeamList).filter(item => item.speaker);

const LandingPage = props => {
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
                industry professionals working at the intersection of artificial
                intelligence and business process management under the same
                roof. The event will include invited talks, poster sessions,
                tutorials, student outreach, meet and mingle opportunities,
                hands-on system demonstrations, and much more!
              </p>

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
                src={`${process.env.PUBLIC_URL}/logo.png`}
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
                The new Twitter or "X" under Elon has issues with embedding. If
                you are unable to see tweets here, click "View on Twitter" to
                view it on Twitter.
              </p>
            </Column>
          </Theme>
        </Column>
      </Grid>
    </Theme>
  );
};

export default LandingPage;

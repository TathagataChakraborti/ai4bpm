import React from 'react';
import { shuffleArray } from '../../components/Info';
import { PostersList } from '../LandingPage/data/Posters';

import {
  Tag,
  Tile,
  Button,
  ButtonSet,
  ToastNotification,
} from 'carbon-components-react';

const PostersListShuffled = shuffleArray(PostersList);

const Poster = props => (
  <Tile className="bx--col-lg-3" style={{ padding: 0, margin: 10 }}>
    <img src="/images/placeholder.png" width="100%" alt="thumbnail" />

    <div className="poster" style={{ padding: 15 }}>
      <div className="bx--row">
        <div className="bx--col-lg-16">
          <Tag type="blue" title="Abstract" className="poster-tag">
            {' '}
            Abstract{' '}
          </Tag>

          {props.props.Track === 'AI4BPM Demos' && (
            <Tag type="green" title="Abstract" className="poster-tag">
              {' '}
              Demo{' '}
            </Tag>
          )}
          {props.props.Track === 'AI4BPM DC' && (
            <Tag type="magenta" title="Abstract" className="poster-tag">
              {' '}
              Student{' '}
            </Tag>
          )}
        </div>
      </div>

      <br />
      <div className="bx--row">
        <div className="bx--col-lg-16">
          <h6 className="text-blue">{props.props.Title}</h6>
          <br />
          <p style={{ fontSize: 'small', lineHeight: '1.25rem' }}>
            {props.props.Authors}
          </p>
        </div>
      </div>

      <div className="poster-links">
        <ButtonSet>
          <Button
            disabled
            className="button-diminish"
            size="sm"
            target="_blank"
            kind="primary">
            Read
          </Button>

          <Button
            disabled
            className="button-diminish"
            target="_blank"
            kind="secondary"
            size="sm">
            Poster
          </Button>
        </ButtonSet>
      </div>
    </div>
  </Tile>
);

class PostersPage extends React.Component {
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

            <div className="bx--row">
              <div className="bx--col-lg-4">
                <ToastNotification
                  lowContrast
                  kind="error"
                  iconDescription="close button"
                  subtitle={
                    <span>
                      This page is under construction. Missing details will be
                      filled in soon after the final versions of the papers are
                      in.
                    </span>
                  }
                  timeout={0}
                  title="Under Construction"
                />
              </div>
            </div>

            <br />

            <div className="bx--row">
              {PostersListShuffled.map((item, key) => (
                <React.Fragment key={key}>
                  <Poster props={item} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostersPage;

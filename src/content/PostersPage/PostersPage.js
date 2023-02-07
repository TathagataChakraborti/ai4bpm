import React from 'react';
import { PostersList } from '../LandingPage/data/Posters';
import {
  shuffleArray,
  generatePDFUrl,
  generatePosterImageUrl,
} from '../../components/Info';
import { Tag, Tile, Button, ButtonSet } from 'carbon-components-react';

const PostersListShuffled = shuffleArray(PostersList);

const Poster = props => (
  <Tile className="bx--col-lg-3" style={{ padding: 0, margin: 10 }}>
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
            className="button-diminish"
            size="sm"
            href={generatePDFUrl(props.props['#'])}
            target="_blank"
            kind="secondary">
            Read
          </Button>

          {props.props['video'] && (
            <Button
              className="button-diminish"
              href={props.props['video']}
              target="_blank"
              kind="primary"
              size="sm">
              Watch
            </Button>
          )}

          {props.props['poster'] && (
            <Button
              className="button-diminish"
              href={generatePosterImageUrl(props.props['#'])}
              target="_blank"
              kind="tertiary"
              size="sm">
              Poster
            </Button>
          )}
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

import React from 'react';
import { PostersList } from '../LandingPage/data/Posters';
import { DocumentPdf, Ppt, DocumentVideo } from '@carbon/icons-react';
import {
  shuffleArray,
  generatePDFUrl,
  generatePosterImageUrl,
} from '../../components/Info';
import {
  Theme,
  Grid,
  Column,
  Tag,
  Tile,
  Button,
  ButtonSet,
} from '@carbon/react';

const PostersListShuffled = shuffleArray(PostersList);

const Poster = props => (
  <Column lg={3} md={4} sm={4} style={{ padding: 0, margin: 10 }}>
    <Tile className="poster">
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

      <br />
      <br />
      <h6 className="text-blue">{props.props.Title}</h6>
      <br />
      <p style={{ fontSize: 'small', lineHeight: '1.25rem' }}>
        {props.props.Authors}
      </p>

      <div className="poster-links">
        <ButtonSet>
          <Button
            size="sm"
            className="button-diminish"
            href={generatePDFUrl(props.props['#'])}
            target="_blank"
            hasIconOnly
            renderIcon={DocumentPdf}
            iconDescription="Abstract"
            kind="ghost"
          />

          {props.props['video'] && (
            <Button
              size="sm"
              className="button-diminish"
              href={props.props['video']}
              target="_blank"
              hasIconOnly
              renderIcon={DocumentVideo}
              iconDescription="Video"
              kind="ghost"
            />
          )}

          {props.props['poster'] && (
            <Button
              size="sm"
              className="button-diminish"
              href={generatePosterImageUrl(props.props['#'])}
              target="_blank"
              hasIconOnly
              renderIcon={Ppt}
              iconDescription="Poster"
              kind="ghost"
            />
          )}
        </ButtonSet>
      </div>
    </Tile>
  </Column>
);

class PostersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Theme theme="g10">
        <br />
        <Grid>
          {PostersListShuffled.map((item, key) => (
            <React.Fragment key={key}>
              <Poster props={item} />
            </React.Fragment>
          ))}
        </Grid>
        <br />
      </Theme>
    );
  }
}

export default PostersPage;

import React from 'react';
import Document32 from '@carbon/icons-react/lib/document/32';
import {
  StructuredListRow,
  StructuredListCell,
  Tile,
  Link,
  Button,
  ClickableTile,
} from 'carbon-components-react';

function generatePDFUrl(id) {
  return `${process.env.PUBLIC_URL}/posters/AI4BPM_paper_${id}.pdf`;
}

function generatePosterImageUrl(id) {
  return `${process.env.PUBLIC_URL}/posters/Poster-${id}.pdf`;
}

function generateImageUrl(imageUrl) {
  return `${process.env.PUBLIC_URL}/images/${imageUrl}.png`;
}

function shuffleArray(array) {
  var newArray = [...array];
  let i = newArray.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

const Reference = props => {
  return (
    <StructuredListRow>
      {props.props.link && (
        <StructuredListCell className="vertial-align-middle">
          <Link href={props.props.link} target="_blank">
            <Document32 />
          </Link>
        </StructuredListCell>
      )}

      {!props.props.link && (
        <StructuredListCell className="vertial-align-middle">
          <Document32 />
        </StructuredListCell>
      )}

      <StructuredListCell>
        <strong>{props.props.title}</strong> by {props.props.authors}.{' '}
        {props.props.venue && <>In: {props.props.venue}.</>}
        {props.props.secondarylink && (
          <>
            <br />
            <Link
              style={{ marginTop: '10px' }}
              href={props.props.secondarylink}
              target="_blank">
              {props.props.secondarytext}
            </Link>
          </>
        )}
      </StructuredListCell>
    </StructuredListRow>
  );
};

const Instructor = props => {
  return (
    <div
      className="bx--col-lg-4"
      style={{ marginTop: '10px', marginBottom: '10px' }}>
      <Tile style={{ padding: '0', height: '100%', backgroundColor: 'white' }}>
        {props.props.contact && (
          <Button
            style={{ height: '1.5rem', width: '5rem', minHeight: '1rem' }}
            href="mailto:tchakra2@ibm.com"
            kind="primary"
            size="sm">
            Contact
          </Button>
        )}

        <div style={{ padding: '1rem' }}>
          <div className="bx--col-sm-2 bx--offset-sm-1 bx--col-lg-14 bx--offset-lg-1">
            <img
              style={{
                marginTop: '20px',
                marginBottom: '20px',
                borderRadius: '50%',
                maxWidth: '100%',
              }}
              src={generateImageUrl(props.props.image)}
              alt="Instructor"
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            {props.props.link && (
              <Link href={props.props.link} target="_blank">
                {props.props.name}
              </Link>
            )}

            {!props.props.link && <span>{props.props.name}</span>}
            {props.props.affiliation && <h6>{props.props.affiliation}</h6>}
          </div>
        </div>
      </Tile>
    </div>
  );
};

const Resource = props => (
  <div className="bx--col-lg-16" style={{ padding: '15px' }}>
    <ClickableTile
      style={{ minHeight: '75px' }}
      className="resource-tile"
      href={props.props.link}
      target="_blank">
      <div className="bx--row">
        <div className="bx--col-lg-12">{props.props.text}</div>
        <div className="bx--col-lg-4" style={{ textAlign: 'center' }}>
          <img
            style={{
              height: '40px',
            }}
            src={generateImageUrl(props.props.image)}
            alt="Logo"
          />
        </div>
      </div>
    </ClickableTile>
  </div>
);

export {
  Instructor,
  Reference,
  Resource,
  shuffleArray,
  generatePosterImageUrl,
  generatePDFUrl,
  generateImageUrl,
};

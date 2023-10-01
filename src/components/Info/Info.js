import React from 'react';
import { Document } from '@carbon/icons-react';
import {
  Grid,
  Column,
  StructuredListRow,
  StructuredListCell,
  Tile,
  Link,
  Button,
  ClickableTile,
} from '@carbon/react';

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
            <Document />
          </Link>
        </StructuredListCell>
      )}

      {!props.props.link && (
        <StructuredListCell className="vertial-align-middle">
          <Document />
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
    <Column
      lg={2}
      md={4}
      sm={4}
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

        <Grid>
          <Column
            lg={{ start: 1, end: 4 }}
            md={{ start: 2, end: 4 }}
            sm={{ start: 2, end: 4 }}>
            <img
              style={{
                padding: '20px',
                paddingBottom: '10px',
                borderRadius: '50%',
                maxWidth: '100%',
              }}
              src={generateImageUrl(props.props.image)}
              alt="Instructor"
            />
          </Column>

          <Column
            lg={{ start: 1, end: 4 }}
            md={{ start: 2, end: 4 }}
            sm={{ start: 2, end: 4 }}
            style={{ textAlign: 'center', padding: '10px' }}>
            {props.props.link && (
              <Link href={props.props.link} target="_blank">
                {props.props.name}
              </Link>
            )}

            {!props.props.link && <span>{props.props.name}</span>}
            {props.props.affiliation && <h6>{props.props.affiliation}</h6>}
          </Column>
        </Grid>
      </Tile>
    </Column>
  );
};

const Resource = props => (
  <Column lg={16} md={8} sm={4} style={{ paddingBottom: '15px' }}>
    <ClickableTile
      style={{ minHeight: '75px' }}
      className="resource-tile"
      href={props.props.link}
      target="_blank">
      <Grid>
        <Column lg={12} md={6} sm={2}>
          {props.props.text}
        </Column>
        <Column lg={4} md={2} sm={2} style={{ textAlign: 'center' }}>
          <img
            style={{
              height: '40px',
            }}
            src={generateImageUrl(props.props.image)}
            alt="Logo"
          />
        </Column>
      </Grid>
    </ClickableTile>
  </Column>
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

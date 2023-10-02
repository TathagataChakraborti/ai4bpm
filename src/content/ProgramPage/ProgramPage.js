import React from 'react';
import {
  Grid,
  Column,
  Button,
  ButtonSet,
  Link,
  ProgressStep,
  ProgressIndicator,
  UnorderedList,
  ListItem,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  ContentSwitcher,
  Switch,
  Tag,
} from '@carbon/react';

const link_to_call = '/shared/call.pdf';

class ProgramPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { day: 1 };
  }

  componentDidMount() {
    const current_time = new Date();
    const set_time = new Date(
      'Tue Feb 07 2023 17:00:00 GMT-0500 (Eastern Daylight Time)'
    );
    const unset_time = new Date(
      'Tue Feb 08 2023 17:00:00 GMT-0500 (Eastern Daylight Time)'
    );
    if (current_time > set_time && current_time < unset_time)
      this.setState({
        ...this.state,
        day: 2,
      });
  }

  switchDay(e) {
    this.setState({
      ...this.state,
      day: e.index + 1,
    });
  }

  render() {
    return (
      <Grid>
        <Column lg={12} md={8} sm={4}>
          <div style={{ minHeight: '100vh' }}>
            <br />
            <br />

            <Grid>
              <Column lg={4} md={4} sm={4}>
                <ContentSwitcher
                  selectedIndex={this.state.day - 1}
                  onChange={this.switchDay.bind(this)}
                  size="sm"
                  style={{ marginBottom: '20px' }}>
                  <Switch text="Day 1 Feb 7 EST" />
                  <Switch text="Day 2 Feb 8 EST" />
                </ContentSwitcher>
              </Column>
            </Grid>

            {this.state.day === 1 && (
              <StructuredListWrapper aria-label="Structured list">
                <StructuredListBody>
                  <StructuredListRow>
                    <StructuredListCell>6:00 EST</StructuredListCell>
                    <StructuredListCell>
                      Rise and Shine{' '}
                      <span role="img" aria-label="sunrise">
                        &#127774;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>
                      8:30 - 9:15 EST
                    </StructuredListCell>
                    <StructuredListCell head>
                      Introduction to Business Process Management
                    </StructuredListCell>
                    <StructuredListCell>
                      <Link
                        href="http://www.diag.uniroma1.it/~marrella"
                        target="_blank">
                        Andrea Marrella
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="https://ict.fbk.eu/people/detail/chiara-di-francescomarino"
                        target="_blank">
                        Chiara Di Francescomarino
                      </Link>
                      <br />
                      <Tag
                        className="square-pants"
                        type="purple"
                        title="hybrid"
                        size="sm">
                        {' '}
                        Hybrid{' '}
                      </Tag>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>9:15 - 10:00 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link
                        href="http://www.padsweb.rwth-aachen.de/wvdaalst"
                        target="_blank">
                        Wil van der Aalst
                      </Link>{' '}
                      |{' '}
                      <span>
                        Using Process Mining to lower the threshold of
                        Artificial Intelligence and Machine Learning in Business
                        Applications
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="cyan"
                        title="remote"
                        size="sm">
                        {' '}
                        Remote{' '}
                      </Tag>
                      <a
                        href="https://www.dropbox.com/s/vugzzkn0hg2t3fx/AAAI-PM-AI-ML-WvdA2023.pdf?dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="PPTX"
                          size="sm">
                          {' '}
                          PPTX{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>10:00 - 10:45 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link
                        href="http://www.inf.unibz.it/~montali"
                        target="_blank">
                        Marco Montali
                      </Link>{' '}
                      |{' '}
                      <span>
                        From propositional to relational dynamic systems: AI for
                        data-aware processes
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="green"
                        title="in person"
                        size="sm">
                        {' '}
                        In person{' '}
                      </Tag>
                      <a
                        href="https://www.dropbox.com/s/lt22w7575j9jtz6/ai4bpm-aaa2023-relational-dynamics.pdf?dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="PPTX"
                          size="sm">
                          {' '}
                          PPTX{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>
                      10:45 - 11:15 EST
                    </StructuredListCell>
                    <StructuredListCell head>
                      Coffee Break{' '}
                      <span role="img" aria-label="coffee break">
                        &#9749;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>11:15 - 12:00 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link href="https://kodu.ut.ee/~dumas" target="_blank">
                        Marlon Dumas
                      </Link>{' '}
                      |{' '}
                      <span>
                        From Process Mining to Augmented Business Process
                        Management: Opportunities and Challenges
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="cyan"
                        title="remote"
                        size="sm">
                        {' '}
                        Remote{' '}
                      </Tag>
                      <a
                        href="https://www.dropbox.com/s/pft18tdecuvqnmx/AI-Augmented%20BPM.pptx?dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="PPTX"
                          size="sm">
                          {' '}
                          PPTX{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>12:00 - 12:30 EST</StructuredListCell>
                    <StructuredListCell>Panel</StructuredListCell>
                    <StructuredListCell>
                      Discussion with Wil van der Aalst, Marco Montali, and
                      Marlon Dumas
                      <br />
                      <br />
                      Moderator: Andrea Marrella and Chiara Di Francescomarino
                      <br />
                      <Tag
                        className="square-pants"
                        type="purple"
                        title="hybrid"
                        size="sm">
                        {' '}
                        Hybrid{' '}
                      </Tag>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>
                      12:30 - 14:00 EST
                    </StructuredListCell>
                    <StructuredListCell head>
                      Lunch Break{' '}
                      <span role="img" aria-label="lunch break">
                        &#128523;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>14:00 - 14:45 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link href="http://www.cs.cmu.edu/~mmv" target="_blank">
                        Manuela Veloso
                      </Link>{' '}
                      | <span>Impactful AI in Finance</span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="cyan"
                        title="remote"
                        size="sm">
                        {' '}
                        Remote{' '}
                      </Tag>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>14:45 - 15:15 EST</StructuredListCell>
                    <StructuredListCell>Session</StructuredListCell>
                    <StructuredListCell>
                      <Link
                        href="https://researcher.watson.ibm.com/researcher/view.php?person=ibm-yara.rizk"
                        target="_blank">
                        Yara Rizk
                      </Link>{' '}
                      |{' '}
                      <span>
                        Impact of Foundational Models on Business Process
                        Management
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="green"
                        title="in person"
                        size="sm">
                        {' '}
                        In person{' '}
                      </Tag>
                      <a
                        href="/slides/AI4BPM2023-Foundation Models.pdf"
                        target="_blank"
                        style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="PPTX"
                          size="sm">
                          {' '}
                          PPTX{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>
                      15:15 - 15:45 EST
                    </StructuredListCell>
                    <StructuredListCell head>
                      Coffee Break{' '}
                      <span role="img" aria-label="coffee break">
                        &#9749;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>15:45 - 16:30 EST</StructuredListCell>
                    <StructuredListCell>Lightning Talks</StructuredListCell>
                    <StructuredListCell>
                      Short 2-minute presentations from participants at the
                      bridge program
                      <br />
                      <Tag
                        className="square-pants"
                        type="purple"
                        title="hybrid"
                        size="sm">
                        {' '}
                        Hybrid{' '}
                      </Tag>
                      <a href="/posters" style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="View"
                          size="sm">
                          {' '}
                          View{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>16:30 - 17:30 EST</StructuredListCell>
                    <StructuredListCell>
                      Poster and Demo Session
                    </StructuredListCell>
                    <StructuredListCell>
                      Meet and greet with your fellow AI4BPM colleagues over
                      posters, system demonstrations, and student contributions
                      <br />
                      <Tag
                        className="square-pants"
                        type="purple"
                        title="hybrid"
                        size="sm">
                        {' '}
                        Hybrid{' '}
                      </Tag>
                      <a href="/posters" style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="View"
                          size="sm">
                          {' '}
                          View{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>17:30 EST</StructuredListCell>
                    <StructuredListCell head>End of Day 1</StructuredListCell>
                    <StructuredListCell>
                      <span role="img" aria-label="dinner and drinks">
                        &#129346;
                      </span>{' '}
                      <span role="img" aria-label="lots of dinner and drinks">
                        &#127864;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell>18:00 EST</StructuredListCell>
                    <StructuredListCell>
                      AAAI Student Reception
                    </StructuredListCell>
                  </StructuredListRow>
                </StructuredListBody>
              </StructuredListWrapper>
            )}

            {this.state.day === 2 && (
              <StructuredListWrapper aria-label="Structured list">
                <StructuredListBody>
                  <StructuredListRow>
                    <StructuredListCell>6:00 EST</StructuredListCell>
                    <StructuredListCell>
                      Rise and Shine{' '}
                      <span role="img" aria-label="wakey wakey">
                        &#9200;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>
                      8:30 - 8:45 EST
                    </StructuredListCell>
                    <StructuredListCell head>
                      Recap of Day 1 and Warm-up
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>8:45 - 9:30 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link
                        href="http://www.diag.uniroma1.it/degiacom"
                        target="_blank">
                        Giuseppe De Giacomo
                      </Link>{' '}
                      |{' '}
                      <span>
                        Foundations of Framed Autonomy in AI-Augmented BPM
                        Systems
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="cyan"
                        title="remote"
                        size="sm">
                        {' '}
                        Remote{' '}
                      </Tag>
                      <a
                        href="/slides/AAAI2023BridgeBPMslides.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="PPTX"
                          size="sm">
                          {' '}
                          PPTX{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>9:30 - 10:15 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link
                        href="https://www.unibz.it/en/faculties/computer-science/academic-staff/person/41895-fabrizio-maria-maggi"
                        target="_blank">
                        Fabrizio Maggi
                      </Link>{' '}
                      |{' '}
                      <span>
                        AI meets declarative process mining: A concrete
                        initiative to move from theory to practice
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="cyan"
                        title="remote"
                        size="sm">
                        {' '}
                        Remote{' '}
                      </Tag>
                      <a
                        href="/slides/RuM_Fabrizio_Maggi_AAAIBridge.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="PPTX"
                          size="sm">
                          {' '}
                          PPTX{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>10:15 - 10:45 EST</StructuredListCell>
                    <StructuredListCell>Panel</StructuredListCell>
                    <StructuredListCell>
                      Discussion with Giuseppe De Giacomo and Fabrizio Maggi
                      <br />
                      <br />
                      Moderator: Yara Rizk
                      <br />
                      <Tag
                        className="square-pants"
                        type="purple"
                        title="hybrid"
                        size="sm">
                        {' '}
                        Hybrid{' '}
                      </Tag>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>
                      10:45 - 11:15 EST
                    </StructuredListCell>
                    <StructuredListCell head>
                      Coffee Break{' '}
                      <span role="img" aria-label="coffee break">
                        &#9749;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>11:15 - 12:00 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link href="https://www.isi.edu/~gil" target="_blank">
                        Yolanda Gil
                      </Link>{' '}
                      |{' '}
                      <span>
                        Organic Collaborations: A Challenge for Process
                        Management
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="green"
                        title="in person"
                        size="sm">
                        {' '}
                        In person{' '}
                      </Tag>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>12:00 - 12:30 EST</StructuredListCell>
                    <StructuredListCell>Tutorial</StructuredListCell>
                    <StructuredListCell>
                      <Link
                        href="http://www.diag.uniroma1.it/~marrella"
                        target="_blank">
                        Andrea Marrella
                      </Link>{' '}
                      |{' '}
                      <span>
                        Automated Planning for BPMers: Research Challenges and
                        Successful Applications
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="green"
                        title="in person"
                        size="sm">
                        {' '}
                        In person{' '}
                      </Tag>
                      <a
                        href="/slides/slides_Marrella_AAAI_Bridge_2023.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="PPTX"
                          size="sm">
                          {' '}
                          PPTX{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>
                      12:30 - 14:00 EST
                    </StructuredListCell>
                    <StructuredListCell head>
                      Lunch Break{' '}
                      <span role="img" aria-label="lunch break">
                        &#128523;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>14:00 - 14:45 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link href="https://pdi.fbk.eu/ghidini" target="_blank">
                        Chiara Ghidini
                      </Link>{' '}
                      |{' '}
                      <span>
                        Data, Conceptual Knowledge, and AI: What can they do
                        together?
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="cyan"
                        title="remote"
                        size="sm">
                        {' '}
                        Remote{' '}
                      </Tag>
                      <a
                        href="https://drive.google.com/file/d/1SssMyvtvt1YMkXWkggk7-1Yh4fw4Aon0/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="PPTX"
                          size="sm">
                          {' '}
                          PPTX{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>14:45 - 15:30 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link
                        href="https://www.ariksenderovich.com"
                        target="_blank">
                        Arik Senderovich
                      </Link>{' '}
                      |{' '}
                      <span>
                        Queue Mining: The journey from Predictive to
                        Prescriptive Analytics in Congested Systems
                      </span>
                      <br />
                      <Tag
                        className="square-pants"
                        type="green"
                        title="in person"
                        size="sm">
                        {' '}
                        In person{' '}
                      </Tag>
                      <a
                        href="/slides/aaai_23_bridge_ai4bpm_senderovich.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}>
                        <Tag
                          className="square-pants download-tag"
                          type="blue"
                          title="PPTX"
                          size="sm">
                          {' '}
                          PPTX{' '}
                        </Tag>
                      </a>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>
                      15:30 - 15:45 EST
                    </StructuredListCell>
                    <StructuredListCell head>
                      Coffee Break{' '}
                      <span role="img" aria-label="coffee break">
                        &#9749;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>15:45 - 16:30 EST</StructuredListCell>
                    <StructuredListCell>Invited Talk</StructuredListCell>
                    <StructuredListCell>
                      <Link
                        href="https://www.linkedin.com/in/ramaakkiraju"
                        target="_blank">
                        Rama Akkiraju
                      </Link>{' '}
                      | The Perfect Storm: How Generative AI, GPUs, Cloud
                      Computing, and Robots are transforming Business Processes
                      <br />
                      <Tag
                        className="square-pants"
                        type="cyan"
                        title="remote"
                        size="sm">
                        {' '}
                        Remote{' '}
                      </Tag>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow head>
                    <StructuredListCell head>16:30 EST</StructuredListCell>
                    <StructuredListCell head>End of Day 2</StructuredListCell>
                    <StructuredListCell>
                      End of the AI4BPM Bridge Program at AAAI 2023 but a dawn
                      of a new era of research at the intersection of artificial
                      intelligence and business process management{' '}
                      <span role="img" aria-label="hugging face">
                        &#129303;
                      </span>
                    </StructuredListCell>
                  </StructuredListRow>
                  <StructuredListRow>
                    <StructuredListCell>18:00 EST</StructuredListCell>
                    <StructuredListCell>
                      AAAI Opening Reception
                    </StructuredListCell>
                  </StructuredListRow>
                </StructuredListBody>
              </StructuredListWrapper>
            )}

            <br />
            <br />

            <Grid style={{ paddingBottom: '50px' }}>
              <Column lg={8} md={8} sm={4} style={{ padding: '10px' }}>
                <fieldset className="toolbox">
                  <legend className="text-blue" style={{ margin: '10px' }}>
                    Call for Contributions
                  </legend>

                  <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                    We welcome three types of contributions from interested
                    participants:
                    <div>
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
                        Submit
                      </Button>
                      <Button
                        target="_blank"
                        href={link_to_call}
                        size="sm"
                        kind="secondary"
                        className="call-button">
                        Download
                      </Button>
                    </ButtonSet>
                    <br />
                    <div>
                      <div
                        style={{ fontSize: 'smaller', lineHeight: 'normal' }}>
                        Submissions are now closed. View accepted posters{' '}
                        <Link href="/#/posters">here</Link>.
                      </div>
                    </div>
                  </div>

                  <br />
                </fieldset>
              </Column>
              <Column lg={4} md={8} sm={4}>
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
              </Column>
            </Grid>
          </div>
        </Column>
      </Grid>
    );
  }
}

export default ProgramPage;

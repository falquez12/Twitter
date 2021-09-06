import Trending from "./Trending/index";
import Tweet from "./Tweet/index";
import Navbar from "../../common/Nav/index";
import { ColNav } from "./timelineelements";
import { Row, Col, Container } from "react-bootstrap";

const Timeline = () => {
  return (
    <>
      <Container>
        <Row>
          <ColNav xs={3}>
            <div className="position-fixed">
              <Navbar></Navbar>
            </div>
          </ColNav>
          <Col xs={6}>
            <Tweet></Tweet>
          </Col>
          <Col xs={3}>
            <Trending></Trending>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Timeline;

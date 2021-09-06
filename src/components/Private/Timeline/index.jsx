import Trending from "./Trending/index";
import Tweet from "./Tweet/index";
import Sidebar from "../../common/Sidebar/index";
import { ColNav } from "./timelineelements";
import { Row, Col, Container } from "react-bootstrap";
import Searchbar from "../Search/searchbar.jsx";

const Timeline = () => {
  return (
    <>
      <Container>
        <Row>
          <ColNav xs={2}>
            <div className="position-fixed">
              <Sidebar></Sidebar>
            </div>
          </ColNav>
          <Col xs={7}>
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

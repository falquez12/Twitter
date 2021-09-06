import Trending from "./Trending/index";
import Tweet from "./Tweet/index";
import Navbar from "../../common/Nav/index";
<<<<<<< HEAD
import { ColNav } from "./timelineelements";
import { Row, Col, Container } from "react-bootstrap";
=======
import Searchbar from "../Search/searchbar.jsx";
>>>>>>> f69d420458f527bdd37c91fbb9f7d2aa0c97cec1

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
<<<<<<< HEAD
          </Col>
        </Row>
      </Container>
    </>
  );
};
=======
            <Searchbar></Searchbar>
            </Container>
        </>
    );
}
>>>>>>> f69d420458f527bdd37c91fbb9f7d2aa0c97cec1

export default Timeline;

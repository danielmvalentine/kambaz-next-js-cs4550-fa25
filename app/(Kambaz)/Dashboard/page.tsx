import Link from "next/link";
import { Card, CardBody, CardTitle, CardText, CardImg, Button, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="ps-3">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/100" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/hollowKnight.jpg" style={{ height: 160 }} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">HK100 Introduction to Hollow Knight</CardTitle>
                  <CardText className="wd-dashboard-course-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                    Come play Hollow Knight!
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/200" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/silkSong.jpg" style={{ height: 160 }} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">HK200 Foundations of Silksong</CardTitle>
                  <CardText className="wd-dashboard-course-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                    Come play Silksong!
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/300" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/clairObscur.jpg" style={{ height: 160 }} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">CO300 Introduction to Clair Obscur</CardTitle>
                  <CardText className="wd-dashboard-course-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                    Come play Clair Obscur!
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/400" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/marioGalaxy.jpg" style={{ height: 160 }} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">MG400 Mario Galaxy Fundamentals</CardTitle>
                  <CardText className="wd-dashboard-course-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                    Come play Mario Galaxy!
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/500" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/balatro.jpg" style={{ height: 160 }} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">BA500 Introduction to Balatro</CardTitle>
                  <CardText className="wd-dashboard-course-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                    Come play Balatro!
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/600" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/stardewValley.jpg" style={{ height: 160 }} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">SV600 Advanced Stardew Valley</CardTitle>
                  <CardText className="wd-dashboard-course-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                    Come play Stardew Valley!
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/700" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/terraria.jpg" style={{ height: 160 }} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">TE700 Advanced Terraria</CardTitle>
                  <CardText className="wd-dashboard-course-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                    Come play Terraria!
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  );
}
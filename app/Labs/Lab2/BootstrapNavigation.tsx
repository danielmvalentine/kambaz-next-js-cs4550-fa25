import "./index.css";
import { Nav } from "@/node_modules/react-bootstrap/esm/index";
import NavItem from "@/node_modules/react-bootstrap/esm/NavItem";
import NavLink from "@/node_modules/react-bootstrap/esm/NavLink";
import Card from "@/node_modules/react-bootstrap/esm/Card";
import CardImg from "@/node_modules/react-bootstrap/esm/CardImg";
import CardTitle from "@/node_modules/react-bootstrap/esm/CardTitle";
import CardBody from "@/node_modules/react-bootstrap/esm/CardBody";
import CardText from "@/node_modules/react-bootstrap/esm/CardText";
import Button from "@/node_modules/react-bootstrap/esm/Button";

export default function BootstrapNavigation() {
    return (
    <div id="wd-css-navigating-with-tabs">
    <h2>Tabs</h2>
    <Nav variant="tabs">
        <NavItem>
        <NavLink href="#/Labs/Lab2/Active">Active</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="#/Labs/Lab2/Link1">Link 1</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="#/Labs/Lab2/Link2">Link 2</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="#/Labs/Lab2/Disabled" disabled>Disabled</NavLink>
        </NavItem>
    </Nav>

    <div id="wd-css-navigating-with-cards">
    <h2> Cards </h2>
    <Card style={{ width: "18rem" }}>
        <CardImg variant="top" src="/images/balatro.jpg" />
        <CardBody>
        <CardTitle>Balatro</CardTitle>
        <CardText>
            I love this game, I can't put it down!
        </CardText>
        <Button variant="primary">Lets Play!</Button>
        </CardBody>
    </Card>
    </div>

    </div>
)}
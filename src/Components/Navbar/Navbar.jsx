import "./Navbar.scss";
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Container,
} from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

const newNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Dependency-Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/subscription">Subscription</Nav.Link>
                        <Nav.Link href="/libraries">
                            Supported Libraries
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <SearchIcon sx={{ color: grey[50] }} fontSize="large" />
                    </Form>
                    <Button variant="light">Login</Button>
                </Navbar.Collapse>
            </Container>
            /{" "}
        </Navbar>
    );
};

export default newNav;

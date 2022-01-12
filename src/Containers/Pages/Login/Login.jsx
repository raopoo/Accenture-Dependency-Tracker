import "./Login.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Button } from "react-bootstrap";

const Login = () => {
    return (
        <div className="loginForm">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="label">
                <Form.Label >Email address:</Form.Label>    
                </div>
                    
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="label">
                    <Form.Label>Password:</Form.Label>
                </div>   
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default Login;

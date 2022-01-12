import "./Libraries.scss";
import { Table, Form } from "react-bootstrap";

const Libraries = () => {
    let supportedlibraries = ["Bootstrap", "AWS Amplify", "BeautifulSoup"];
    return (
        <div className="libTable">
            <Table  striped bordered hover>
                <thead>
                    <tr>
                        <th>Library</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Splunk</td>
                        <td>
                            {" "}
                            <Form.Check inline name="group1" defaultChecked />
                        </td>
                    </tr>
                    {supportedlibraries.map((library, i) => {
                        return (
                            <tr key={i}>
                                <td>{library}</td>
                                <td>
                                    {" "}
                                    <Form.Check inline name="group1" />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};
export default Libraries;

//import data from "../../data";
import "./Table.scss";
import { Button, Table, Form } from "react-bootstrap";
import ModalFunc from "../Modal";
import axios from "axios";
import { useState, useEffect } from "react";

const TableData = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const [allApiData,setAllApiData] = useState([]);

    const numOfResults = 10;

    const handleSelect = (e) => {
    console.log(e.target.value);
    setData(allApiData.slice(0, e.target.value));
  };
  

    let counter = 0;

    const callFunction = () => {
        console.log(counter);
        try {
            axios
                .get(
                    "https://4026a4upzi.execute-api.ap-southeast-2.amazonaws.com/hello"
                )
                .then((result) => {
                    setAllApiData(result.data);
                    let latestUpdates = [];
                    for (let i = 0; i < numOfResults; i++) {
                        latestUpdates.push(result.data[i]);
                    }
                    setData(latestUpdates);
                    console.log(latestUpdates);
                })
                .catch((e) => {
                    console.log("hi");
                    console.log(e);
                    if (counter < 2) {
                        counter += 1;
                        callFunction();
                    } else console.log("the app entirely exploded!");
                });
        } catch (e) {
            console.log("hi");
            console.log(e);
        }
    };

    useEffect(callFunction, []);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    return (
        <div className="dashboard">
            <div className="tableDiv">
                {data ? (
                    <>  <Button className="mailBtn" onClick={handleShow}>
                            Add me to Mail list
                        </Button>
                        <Form.Select
                            aria-label="Default select example"
                            onChange={handleSelect}
                            className="selectDiv"
                        >
                            {/* <option>Open this select menu</option> */}
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                        </Form.Select>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Library Name</th>
                                    <th>Version Number</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((update) => (
                                    <tr key={update.versionNumber}>
                                        <td key={update.libraryName}>
                                            {update.libraryName}
                                        </td>
                                        <td key={update.versionNumber}>
                                            {update.versionNumber}
                                        </td>
                                        <td key={update.link}>
                                            <a
                                                className="linkClass"
                                                target="_blank"
                                                rel="noreferrer"
                                                href={update.link}
                                            >
                                                {update.link}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}

                <ModalFunc show={show} handleClose={handleClose} />
            </div>
        </div>
    );
};

export default TableData;

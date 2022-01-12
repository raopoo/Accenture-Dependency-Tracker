//import data from "../../data";
import "./Table.scss";
import { Button, Table } from "react-bootstrap";
import ModalFunc from "../Modal";
import axios from "axios";
import { useState, useEffect } from "react";

const TableData = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    // const [counter, setCounter] = useState(0);

    let counter = 0;

    const callFunction = () => {
        console.log(counter);
        try {
            axios
                .get(
                    "https://4026a4upzi.execute-api.ap-southeast-2.amazonaws.com/hello"
                )
                .then((result) => {
                    let latestUpdates = [];
                    for (let i = 0; i < 10; i++) {
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
        <div className="tableDiv">
            {data ? (
                <>
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
                                            href="https://docs.splunk.com/Documentation/Splunk/latest/ReleaseNotes/MeetSplunk"
                                        >
                                            {update.link}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button onClick={handleShow}>Add me to Mail list</Button>
                </>
            ) : (
                <h1>Loading...</h1>
            )}

            <ModalFunc show={show} handleClose={handleClose} />
        </div>
    );
};

export default TableData;

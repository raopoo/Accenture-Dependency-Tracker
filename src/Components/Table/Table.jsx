import data from "../../data";
import "./Table.scss";
import Table from 'react-bootstrap/Table';
import ModalFunc from '../Modal';

import {useState} from 'react';


import NotificationsIcon from '@mui/icons-material/Notifications';



const TableData = () => {
    
  const [show, setShow] = useState(false);
  
    const handleClose = () =>{
      setShow(false)
    };
    const handleShow = () => {
      setShow(true);
     
    }

  return (
      <div className="tableDiv">
        <Table striped bordered hover>
        <thead>
        <tr>
                <th>Library Name</th>
                <th>Version Number</th>
                <th>Link</th>
                <th>Notification</th>
            </tr>
        </thead>
        <tbody>
        {data.map((update) => (
                <tr key = {update.versionNumber}>
                    <td key = {update.libraryName}>{update.libraryName}</td>
                    <td key = {update.versionNumber}>{update.versionNumber}</td>
                    <td key = {update.link}><a className="linkClass" target="_blank" rel="noreferrer" href="https://docs.splunk.com/Documentation/Splunk/latest/ReleaseNotes/MeetSplunk">{update.link}</a></td>
                    <td><NotificationsIcon onClick={handleShow} /></td> 
                </tr>

            ))}
        </tbody>
            
        </Table>
        <ModalFunc show={show} handleClose={handleClose} />
      </div>
        
    );
};



export default TableData;

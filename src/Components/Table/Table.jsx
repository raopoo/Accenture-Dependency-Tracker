//import data from "../../data";
import "./Table.scss";
import Table from 'react-bootstrap/Table';
import ModalFunc from '../Modal';
import axios from 'axios';
import {useState, useEffect} from 'react';


import NotificationsIcon from '@mui/icons-material/Notifications';



const TableData = () => {
    
  const [show, setShow] = useState(false);
  const [data,setData] = useState(null);

  const callFunction = () => {
    try{
      axios
        .get(
            "https://4026a4upzi.execute-api.ap-southeast-2.amazonaws.com/hello"
        )
        .then((result) =>{
          let latestUpdates = [];
          for(let i=0; i< 10;i++){
            latestUpdates.push(result.data[i]);
          }
          setData(latestUpdates);
          console.log(latestUpdates);
        })
    }
    catch(e){
      console.log(e);
    }
    
};

useEffect(callFunction, []);

    const handleClose = () =>{
      setShow(false)
    };
    const handleShow = () => {
      setShow(true);
     
    }

  return (
      <div className="tableDiv">
      {
        data ? <Table striped bordered hover>
        <thead>
        <tr>
                <th>Library Name</th>
                <th>Version Number</th>
                <th>Link</th>
                <th>Notification</th>
            </tr>
        </thead>
        <tbody>
        {
          data.map((update) => (
                <tr key = {update.versionNumber}>
                    <td key = {update.libraryName}>{update.libraryName}</td>
                    <td key = {update.versionNumber}>{update.versionNumber}</td>
                    <td key = {update.link}><a className="linkClass" target="_blank" rel="noreferrer" href="https://docs.splunk.com/Documentation/Splunk/latest/ReleaseNotes/MeetSplunk">{update.link}</a></td>
                    <td><NotificationsIcon onClick={handleShow} /></td> 
                </tr>

            ))} 
        </tbody>
            
        </Table> : <h1>Loading..</h1>
      }
        
        <ModalFunc show={show} handleClose={handleClose} />
      </div>
        
    );
};



export default TableData;

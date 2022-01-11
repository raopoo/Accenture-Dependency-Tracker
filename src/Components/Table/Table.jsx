import data from "../../data";
import "./Table.scss";
import Table from 'react-bootstrap/Table';
import ModalFunc from '../Modal';


import NotificationsIcon from '@mui/icons-material/Notifications';

const TableData = () => {
    

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
                    <td key = {update.link}>{update.link}</td>
                    <td><NotificationsIcon /></td>
                </tr>
            ))}
        </tbody>
            
        </Table>
      </div>
        
    );
};



export default TableData;

import Table from 'react-bootstrap/Table';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Libraries = () => {


    return (
    <div>
           <h1>Libraries</h1>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Library</th>
      <th>Select</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Splunk</td>
      <td><NotificationsIcon /></td>
   
    </tr>
    <tr>
      <td>2</td>
      <td>Bootstrap</td>
      <td><NotificationsIcon /></td>
    </tr>
    <tr>
      <td>3</td>
      <td>AWS Amplify</td>
      <td><NotificationsIcon /></td>
    </tr>
    <tr>
      <td>4</td>
      <td>BeautifulSoup</td>
      <td><NotificationsIcon /></td>
    </tr>
  </tbody>
</Table>
    </div>
    )
};
export default Libraries;

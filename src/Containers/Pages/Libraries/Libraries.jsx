import {Table, Form} from 'react-bootstrap';

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
      <td> <Form.Check
        inline
        name="group1"
        checked
      /></td>
   
    </tr>
    <tr>
      <td>2</td>
      <td>Bootstrap</td>
      <td> <Form.Check
        inline
        name="group1"
      /></td>
    </tr>
    <tr>
      <td>3</td>
      <td>AWS Amplify</td>
      <td> <Form.Check
        inline
        name="group1"
      /></td>
    </tr>
    <tr>
      <td>4</td>
      <td>BeautifulSoup</td>
      <td> <Form.Check
        inline
        name="group1"
      /></td>
    </tr>
  </tbody>
</Table>
    </div>
    )
};
export default Libraries;

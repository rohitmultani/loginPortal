import React from 'react';
import 'antd/dist/antd.css';
import { Button, PageHeader} from 'antd';

const Header = () => (
  <PageHeader
    extra={[
      <Button key="3" style={{backgroundColor:'darkblue',color:"white",borderRadius:'4px'}}> Start Free Trial</Button>,
      <Button key="2" style={{backgroundColor:'darkorange',color:"white",borderRadius:'4px'}}>Login</Button>,
    ]}
    avatar={{
      src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
    }}

  >
  </PageHeader>
);

export default Header;
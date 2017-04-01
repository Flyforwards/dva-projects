import React from 'react';
import { connect } from 'dva';
import config from './../../utils/config';
import styles from "./Sider.css";
import { Layout, Menu, Breadcrumb, Icon ,Switch,Row, Col } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Siderslider extends React.Component {
    state = {
  	  theme:'dark',
      collapsed: false,
      mode: 'inline',
    };
    changeTheme = (value) => {
     this.setState({
       theme: value ? 'dark' : 'light',
     });
    };
    toggle = () => {
     this.setState({
      collapsed: !this.state.collapsed,
     });
    };
  render() {
    return (
      <Layout style={{height:"100%"}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >	
        <Row  className={styles.logoMenu}>
	    	<Col span={12} push={1}><img alt={'logo'} src={config.logoSrc} className={styles.logoPic} /></Col>
			<Col span={12} pull={3}>System</Col>	  
    	</Row>
        <div className="logo"/>

     	<Menu 
          mode="inline"
          defaultSelectedKeys={['1']}
          theme={this.state.theme}
          className={styles.menuPadding}
        >

        <SubMenu
          key="sub1"
          title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
        >
          <Menu.Item key="1">Tom</Menu.Item>
          <Menu.Item key="2">Bill</Menu.Item>
          <Menu.Item key="3">Alex</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
        >
          <Menu.Item key="4">Team 1</Menu.Item>
          <Menu.Item key="5">Team 2</Menu.Item>
        </SubMenu>

        <Menu.Item key="6">
          <span>
            <Icon type="file" />
            <span className="nav-text">File</span>
          </span>
        </Menu.Item>
        <SubMenu
          key="sub3"
          title={<span><Icon type="windows" /><span className="nav-text">windows</span></span>}
        >
          <Menu.Item key="7">win1</Menu.Item>
          <Menu.Item key="8">win2</Menu.Item>
        </SubMenu>
      </Menu>
          <div className={styles.switchcolor}>
        	<Switch
	          checked={this.state.theme === 'dark'}
	          onChange={this.changeTheme}
	          checkedChildren="Dark"
	          unCheckedChildren="Light"
	        />
	       
           </div>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(Siderslider)





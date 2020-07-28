import React, { Component, Fragment } from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu;
import MenuConfig from '../../config/menuConfig'
import './index.min.css'

class NavLeft extends Component {
  componentWillMount(){
      const menuTreeNode = this.renderMenu(MenuConfig)
      this.setState(()=>({
        menuTreeNode
      }))
  }
  //菜单渲染
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
          return (
              <SubMenu title={item.title} key={item.key}>
                  { this.renderMenu(item.children)}
              </SubMenu>
          )
      }
      return <Menu.Item title={item.title} key={item.key}>
      <NavLink to={item.key}>{item.title}</NavLink>
  </Menu.Item>
  })
  }
  render() {

    return (
      <Fragment>

        <div className="logo">
          <img src="/assets/logo-ant.svg" />
          <h1>CMS</h1>

        </div>
        <Menu
        
          mode="inline"
          theme="dark"
     
        >
         { this.state.menuTreeNode }
       
        </Menu>
      </Fragment>

    )
  }
}

export default NavLeft

import React, { Component, Fragment } from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
class App extends Component {
  render() {
    return (
      <Fragment>

        <Row className="container">
          <Col span="3" className="nav-left">
            <NavLeft />
          </Col>
          <Col span="21" className="main">
            <Header />
            <Row className="content">
              <Col span="24" >
               {this.props.children}

              </Col>
            </Row>
            <Footer />
          </Col>
        </Row>

      </Fragment>

    )
  }
}

export default App


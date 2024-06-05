import React from "react";
// import { Anchor, Row, Col } from "antd";
import './css/navbar.css';

// const { Link } = Anchor;

export function Navbar() {
  return (
    // <div style={{ display: 'inline-list-item', justifyContent: 'space-between' }}>
    // <Anchor style={{background:'blue', position:'fixed', zIndex:'9999', height:'50px', width:'100%'}}>
    //   <Row  style={{paddingTop:'10px'}} gutter={16}>
    //     <Col>
    //       <Link href="#home" title="Home" />
    //     </Col>
    //     <Col>
    //       <Link href="#about" title="About" />
    //     </Col>
    //     <Col>
    //       <Link href="#projects" title="Projects" />
    //     </Col>
    //     <Col>
    //       <Link href="#skills" title="Skills" />
    //     </Col>
    //     <Col>
    //       <Link href="#contact" title="Contact" />
    //     </Col>
    //   </Row>
    // </Anchor>

<nav class="navbar">
    <ul class="nav-list" >
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
</nav>
    // {/* Add any additional elements here, like a logo or additional links */}
    // </div>
  )
}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
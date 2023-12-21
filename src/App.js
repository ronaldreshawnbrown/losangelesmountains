import React, { useRef, useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Carousel, Tab, Tabs, Accordion } from 'react-bootstrap';
import { Parallax, ParallaxLayer} from '@react-spring/parallax';

import './App.css';

const App = () => {
  const [navbarBg, setNavbarBg] = useState('transparent');
  const [menuTextColor, setMenuTextColor] = useState('white');
  const [logoTextOpacity, setLogoTextOpacity] = useState(1);
  const parallax = useRef(null);

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (parallax.current) {
        const scrollPosition = parallax.current.current / parallax.current.space;
        setNavbarBg(scrollPosition > 0.5 ? 'white' : 'transparent');
        setMenuTextColor(scrollPosition > 0.5 ? 'black' : 'white');
        setLogoTextOpacity(scrollPosition > 0.5 ? 1 : 0);
      }
    }, 100);
  
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Parallax ref={parallax} pages={3.5}>
        <Navbar expand="lg" sticky="top" style={{ backgroundColor: navbarBg }}>
          <Container className="custom-navbar">
              <Col md={2}></Col>
              <Col md={4} className="logo-container">
              <div onClick={() => scrollToSection('home')}>
                <img src="/images/logo.png" className="logo-image" alt="Logo" />
              </div>
              <Navbar.Brand className="logoText" onClick={() => scrollToSection('home')} style={{ opacity: logoTextOpacity }}>
                <span className='grey1'>LOSANGELES</span><span className="blue1 logoTextAdjust">MOUNTAINS</span>
              </Navbar.Brand>
          </Col>

            <Col md={4} className="nav-links-container">
              <Nav>
                <Nav.Link className='menuText' onClick={() => scrollToSection('history')} style={{ color: menuTextColor }}>01. HISTORY</Nav.Link>
                <Nav.Link className='menuText' onClick={() => scrollToSection('team')} style={{ color: menuTextColor }}>02. TEAM</Nav.Link>
              </Nav>
            </Col>

            <Col md={2}></Col>
          </Container>
        </Navbar>

        <Container fluid>
          <Row id="home" className="fullBg fullBg1">
            <ParallaxLayer offset={0} speed={.3} factor={1}>
              <div className="background-layer"></div>
            </ParallaxLayer>
            
            <ParallaxLayer offset={0.4} speed={.6}>
              <div className="text-layer">
                <span className='grey1'>LOSANGELES</span><span className="blue1 heroTextAdjust">MOUNTAINS</span>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.13} speed={.9} factor={1}>
            <div className="foreground-layer"></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.13} speed={1.2} factor={1}>
            <div className="snow"></div>
            </ParallaxLayer>

            <ParallaxLayer offset={.75} speed={1.8}>
            <img className="z4" src="/images/bird1.png" alt="A flying bird" />
            </ParallaxLayer>
          </Row>
          <Row id="history" className="fullBg fullBg2">
            <Col md={2}></Col>
            <Col md={8} className="d-flex align-items-end">
              <Carousel className="full-width-carousel">
                <Carousel.Item>
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
                    
                      <div style={{ height: '275px' , padding: '0 17%', display: 'flex', alignItems: 'flex-end', justifyContent: 'left' }}>
                        <span className="textE" style={{marginBottom: "-20px"}}>01.</span> <span className="textD" style={{display: "relative", marginLeft: "-20px", height:"57px"}}>HISTORY</span>
                      </div>
                      <div className="textC" style={{ height: '325px', display: 'flex', justifyContent: 'left', padding: '0 17%'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. 
                      </div>

                    <div className="image-container" style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 100px' }}>
                      <img src="/images/thumbnail1.png" alt="contentImage1" className='carouselThumbs' />
                      <img src="/images/thumbnail2.png" alt="contentImage2" className='carouselThumbs'/>
                      <img src="/images/thumbnail3.png" alt="contentImage3" className='carouselThumbs' />
                      <img src="/images/thumbnail4.png" alt="contentImage4" className='carouselThumbs'/>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row id="team">
            <Row>
              <div style={{ height: '250px', display: 'flex', flexDirection: 'row', marginTop:'50px'}}>
                <div style={{ height: '175px' , padding: '60px 0 0 22%', display: 'flex', alignItems: 'flex-end', justifyContent: 'left' }}>
                  <span className="textF" style={{marginBottom: "-21px"}}>02.</span> <span className="textD" style={{display: "relative", marginLeft: "-15px", height:"37px"}}>CLIMB</span>
                </div>
                <div className="textC" style={{padding: '0 0 50px 15px', width: "40%", display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                  Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. 
                </div>
              </div>
            </Row>
            <Row className="tabsContainer">
              <div className="d-none d-md-block">
                <Tabs defaultActiveKey="tab1" id="team-tabs" style={{padding: '0' }}>
                  <Tab eventKey="tab1" title="MOUNTAIN 1" style={{ height: '100%'}} >
                  <div className="tab-content bg-imageTab1" style={{ marginRight: '-12px' }}>
                    <Row className="align-items-center">
                      <Col md={3}> </Col>
                      <Col md={5} className="tab1Inner">
                        <div className="scheduleCard">
                          <div className='scheduleTitle'>
                            SCHEDULE
                          </div>
                          <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                          <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                          <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                        </div>
                      </Col>
                      <Col md={4}> </Col>
                    </Row>
                  </div>

                  </Tab>
                  <Tab eventKey="tab2" title="MOUNTAIN 2" style={{ height: '100%'}}>
                    <div className="tab-content bg-imageTab2" style={{marginRight:'-12px'}}>
                    <Row className="align-items-center">
                      <Col md={3}> </Col>
                      <Col md={5} className="tab1Inner">
                        <div className="scheduleCard">
                          <div className='scheduleTitle'>
                            SCHEDULE
                          </div>
                          <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                          <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                          <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                        </div>
                      </Col>
                      <Col md={4}> </Col>
                    </Row>
                    </div>
                  </Tab>
                </Tabs>
              </div>

              <div className="d-md-none accordionContainer"> 
              <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>MOUNTAIN 1</Accordion.Header>
                    <Accordion.Body>
                      <Row className="align-items-center">
                        <Col md={3}></Col>
                        <Col md={5} className="tab1Inner">
                          <div className="scheduleCard">
                            <div className='scheduleTitle'>
                              SCHEDULE
                            </div>
                            <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                            <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                            <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                          </div>
                        </Col>
                        <Col md={4}></Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>MOUNTAIN 2</Accordion.Header>
                    <Accordion.Body>
                      <Row className="align-items-center">
                        <Col md={3}></Col>
                        <Col md={5} className="tab1Inner">
                          <div className="scheduleCard">
                            <div className='scheduleTitle'>
                              SCHEDULE
                            </div>
                            <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                            <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                            <div className="scheduleItem"><span>25 Nov 2016 </span> Vestibulum viverra</div>
                          </div>
                        </Col>
                        <Col md={4}></Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Row>
            <Row style={{ backgroundColor: '#414f6b',height: '75px' }} className="align-items-center">
              <Col md={2}></Col>
              <Col md={6}> <img src="/images/footerLogo.png" alt="Footer Logo" /></Col>
              <Col md={4} className="copywriteTxt">COPYRIGHT 2023. ALL RIGHT RESERVED.</Col>
            </Row>
          </Row>
        </Container>
      </Parallax>
    </>
  );
};

export default App;

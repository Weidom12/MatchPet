<Container style={{padding:'10vh 0vh 0vh 50vh'}}>
                <Card style={{width: '50vh', height: '70vh', 'border-radius': '10px', "box-shadow": "15px 5px 5px black"}} >
                    <Card.Img variant="top" src={Imagen} style={{height:'100%'}} />
                    <Card.Body style={{position:'absolute',top:'40vh ','background-color':"rgba(0, 0, 0, 0.2)", color:'white'}}>
                            <Card.Title style={divtitle}>Rachel</Card.Title>
                            <Card.Text>
                            Una perfecta compañera para explorar, juguetona y muy cariñosa.
                            </Card.Text>
                            <Row>
                                <Col style={{'text-Align':'center'}}><img src={Izquierda} style={{height:'8vh' }} onClick={handleClickI}></img></Col>
                                <Col style={{height:'12vh', 'text-Align':'center'}}><img src={Ico} style={{height:'10vh'}} onClick={handleClickMatch}></img></Col>
                                <Col style={{'text-Align':'center',color:'white'}}><img src={Derecha} style={{height:'8vh'}} onClick={handleClickD}></img> </Col>
                                
                            </Row>
                    </Card.Body>
                </Card>
        </Container>
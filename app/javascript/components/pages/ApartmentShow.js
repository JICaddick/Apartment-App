import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardTitle, CardSubtitle, Button} from "reactstrap"

class ApartmentShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
        success: false
    }
  }

  render() {
    let { apartment } = this.props

    return (
      <>
        <h3>Show Apartments</h3>
        <p>Learn more about pricing, pet policies, and applications</p>
        {apartment &&
          <Container fluid>
            <Row>
              <Col md="6">
                <Card>
                  <CardImg>
                    {apartment.image}
                  </CardImg>
                  <CardTitle>
                    {apartment.price} /month
                  </CardTitle>
                  <CardSubtitle>
                    {apartment.street}, {apartment.city}, {apartment.state}
                  </CardSubtitle>
                  <CardSubtitle>
                    {apartment.bedrooms}, {apartment.bathrooms}
                  </CardSubtitle>
                  <CardSubtitle>
                    {apartment.pets}:
                  </CardSubtitle>
                  <h5 style='strong'>Contact Us!</h5>
                  <p> Manager: {apartment.manager} </p>
                  <p> Email: {apartment.email} </p>
                  <Button className="return-button">
                  Return Browsing All Apartments
                  </Button>
                  {this.state.success && <Redirect to = "/index" />}
                </Card>
              </Col>
            </Row>
          </Container>
        }
      </>
    )
  }
}

export default ApartmentShow
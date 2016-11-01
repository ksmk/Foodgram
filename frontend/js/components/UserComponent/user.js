import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './user.scss';

class User extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render = () => {
    console.log(this.props.params.name);
    return (
      <section className="user">
        <Col xs={{ size: 10, offset: 1}}>
          <Col xs={{ size: 4}} id="logo">
          <img  className="img-thumbnail img-logo"
                height="150px"
                width="150px"
                src="http://prezibase.com/wp-content/uploads/2016/02/food-clock-time-diet-meal-eating-health-fitness-prezi-templates.jpg" />
          </Col>
          <Col xs={{ size: 8}}>
            <Col xs={{ size: 12}}>
              <span className="username">AwesomeBurgers</span>
            </Col>
            <Col xs={{ size: 12}}>
              <span className="info">Likes: 50</span>
            </Col>
            <Col xs={{ size: 12}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Col>
          </Col>
        </Col>
        <Col xs={{ size: 10, offset: 1}} id="images">
          { [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map( (number, index) => {
            return (
              <Col xs={{ size: 4}} key={index} className="image">
                <img  className="img-thumbnail"
                      height="300px"
                      width="300px"
                      src="https://static1.squarespace.com/static/55355f2fe4b0bb1e28857a4c/56991220fb36b1a2d2c69b9a/56991220a976afc919db1f65/1452872520958/MealPlans.png?format=300w" />
              </Col>
            );
          })}
        </Col>
      </section>
    );
  }
}

User.propTypes = {
  params: React.PropTypes.object,
};

export default User;

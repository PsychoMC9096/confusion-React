import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderDish(dish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if(comments) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <li key={comment.id}>
                                <div>
                                    <br></br>
                                    {comment.comment}
                                </div>
                                <div>
                                    --{comment.author}, {comment.date}
                                </div>
                            </li>
                        );
                    })}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        if(this.props.selectedDish) {
            return(
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;
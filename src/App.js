import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button, Row, Col } from 'react-bootstrap';
import { connect } from "redux-zero/react";
import { addComment, removeComment } from './actions';

const Comment = ({ name, comment, index }) => {
  return (
    <div className='caja comentario'>
      <Row>
        <Col md={3} sm={6} xs={6} className='text-center'>
          <h2 className='fa fa-user-circle fa-fw'></h2>
        </Col>
        <Col md={9} sm={6} xs={6}>
          <h3>{name}</h3>
          <p>{comment}</p>
        </Col>
      </Row>
      <div>
        <Button onClick={()=>removeComment(index)}>
          <span>Delete</span>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
}
const App = ({ comments }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    addComment(this.name.value, this.comment.value);
    this.name.value='';
    this.comment.value='';
  }
  return (
    <div class="container">
      <div className='caja centro'>
        <h3>NEW COMMENT</h3>
        <form onSubmit={onSubmit}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-user fa-fw"></i></InputGroup.Addon>
              <input className='form-control' type="text" placeholder="Name" ref={(e) => this.name = e} />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-comment"></i></InputGroup.Addon>
              <textarea className='form-control' type="text" placeholder="Comment" ref={(e) => this.comment = e} ></textarea>
            </InputGroup>
          </FormGroup>
          <Button type="submit" bsStyle='warning' id='post'>
            Post Comment
          </Button>
        </form>
      </div>
      <div className='centro'>
        <h3>
          <span>Comments</span>
          <i class="fa fa-comments" aria-hidden="true"></i>
        </h3>
        <p>{comments.length} comments</p>
        <div>
          {
            comments.map((item, index) => <Comment key={index} name={item.name} comment={item.comment} index={index} />)
          }

        </div>
      </div>
    </div>
  );
}

const mapToProps = ({ comments }) => ({ comments });

export default connect(mapToProps)(App);

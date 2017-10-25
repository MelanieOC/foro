import React, { Component } from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Button, Row, Col} from 'react-bootstrap';

const App = ()=> {
  return (
    <div class="container">
        <div className='caja centro'>
          <h3>NEW COMMENT</h3>
        <form>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-user fa-fw"></i></InputGroup.Addon>
              <FormControl type="text" placeholder="Name" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-comment"></i></InputGroup.Addon>
              <FormControl componentClass="textarea" type="text" placeholder="Comentario" />
            </InputGroup>
          </FormGroup>
          <Button type="submit">
    Post Comment
  </Button>
        </form>
        </div>

        <div className='centro'>
          <h3>Comments
          <i class="fa fa-comments" aria-hidden="true"></i>
          </h3>
          <div id="ale">
            <div className='caja comentario'>
            <Row>
							<Col md={3} sm={6} xs={6} className='text-center'>
								<h2 className='fa fa-user-circle fa-fw'></h2>
							</Col>
							<Col md={9} sm={6} xs={6}>
								<h3>Hola</h3>
								<p>Nada mal</p>
							</Col>
						</Row>
            <div>
              <Button>
                <span>Delete</span>
              <i class="fa fa-trash" aria-hidden="true"></i>
              </Button>
            </div>
            </div>
          
          </div>
        </div>
    </div>
  );
}
/*<div class="centro">
            <button class="btn" id="guardar">
              <i class="fa fa-floppy-o" aria-hidden="true"></i>
              Guardar
					</button>
            <button class="btn" id="limpiar">
              <i class="fa fa-trash" aria-hidden="true"></i>
              Limpiar
					</button>
          </div>*/
export default App;

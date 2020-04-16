import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Container, Columns, Button, Dropdown } from 'react-bulma-components';
import { FaUserCircle } from 'react-icons/fa';

import styled from 'styled-components'

import logoImage from '../../../assets/images/logo.png'

const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
`

const Menu = () => {

  let actionButton;

  if(useLocation().pathname =='/') {
    actionButton = <a href='/user/sign_in' className='is-pulled-right is-right'>
        <Button outlined={true} color='white'>Entrar</Button>
      </a>
  } else {
    actionButton =
      <Dropdown className='is-pulled-right is-right' color='dark'label= {<FaUserCircle size="2em" />}>
        <Dropdown.Item value="other">
          <a href='/users/edit'> 	Edit User </a>
        </Dropdown.Item>
        <Dropdown.Item value="other">
          <a href='/users/sign_out'>  LogOut  </a>
        </Dropdown.Item>
      </Dropdown>
  }

  return (
    <Fragment>
      <Navbar color="dark">
        <Container>
   		  <ColumnsFullWidth className='is-mobile'>
            <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
              <img src={logoImage} className='image'/>
            </Columns.Column>
            <Columns.Column>
              {actionButton}
            </Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Menu;

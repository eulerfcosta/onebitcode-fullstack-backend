import React, { Fragment ,useEffect, useState, useRef } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Columns, Button } from 'react-bulma-components';
import styled from 'styled-components';

import FavoritesService from '../../../services/favorites';


const Favorite = (props) => {

  let FavoredButton;
  const [favored, setFavored] = useState(props.favored);

  if(favored){
    FavoredButton = <FaHeart size='25px' className='has-text-white' onClick={() => disfavor()}/>
  } else {
    FavoredButton = <FaRegHeart size='25px' className='has-text-white' onClick={() => favor()}/>
  }


  async function disfavor(){
    await FavoritesService.delete(props.kind, props.id);
    setFavored(false);
  }

  async function favor(){
    await FavoritesService.create(props.kind, props.id);
    setFavored(true);
  }



  return (
    <Fragment>
      {FavoredButton}
    </Fragment>
  );
}

export default Favorite;

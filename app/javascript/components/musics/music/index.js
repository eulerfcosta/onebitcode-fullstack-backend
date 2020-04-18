import React, { Fragment ,useEffect, useState } from 'react';
import { Columns, Heading,  Button } from 'react-bulma-components';
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa';
import styled from 'styled-components';

import Favorite from '../../common/favorite';

const MusicSeparador = styled.hr`
  margin-top: 0px;
  height: 1px;
`

const CustomSubHeading = styled(Heading)`
  margin-bottom: 0px !important;
`

const Music = (props) => {

  let PlayingButton;

  if(props.playing) {
    PlayingButton = <FaStopCircle size='45px' className='has-text-white' onClick={() => props.setPlaying([])} />
  } else {
    PlayingButton = <FaPlayCircle size='45px' className='has-text-white' onClick={() => props.setPlaying(props.song)} />
  }
  return (
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{size: 1}} mobile={{size: 2}}>
          {PlayingButton}
        </Columns.Column>
        <Columns.Column desktop={{size: 4}} mobile={{size: 8}}>
          <Columns className='is-vcentered is-mobile'>
            <Columns.Column desktop={{size: 8}} mobile={{size: 8}}>
              <Heading size={5} className='has-text-white'>
                {props.song.title}
              </Heading>
              <CustomSubHeading size={6} className='has-text-white' subtitle>
                {props.song.artist_name}
              </CustomSubHeading>
            </Columns.Column>
            <Columns.Column desktop={{size: 4}} mobile={{size: 4}} className='is-pulled-right has-text-right'>
              <Favorite id={props.song.id} kind='songs' favored={props.song.favorite}/>
            </Columns.Column>
          </Columns>
            <MusicSeparador />
        </Columns.Column>
      </Columns>
    </Fragment>
  );
}

export default Music;

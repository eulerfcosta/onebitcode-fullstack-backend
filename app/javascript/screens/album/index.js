import React, { Fragment } from 'react';

import SectionWrapper from '../../components/common/section_wrapper';
import NavbarFooter from '../../components/common/navbar_footer';
import Albums from '../../components/albums';


const AlbumScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Albums />
        <NavbarFooter />
      </SectionWrapper>
    </Fragment>

  );
}

export default AlbumScreen;

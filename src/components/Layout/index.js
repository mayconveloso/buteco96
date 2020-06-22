import React from 'react';
import { Grid } from './styles';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

function Layout() {
  return (
    <Grid>
      <Header />
      <Body />
      <Footer />
    </Grid>
  );
}

export default Layout;
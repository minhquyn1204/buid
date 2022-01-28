import React from 'react';
import styles from './Header.module.scss'
import {Row,Col} from 'react-bootstrap'
import Link from 'next/link';
import { Form } from 'react-bootstrap';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';
import LoginMain from '../../Auth/LoginMain';


export default function Header() {
  return(
  //  <div className={styles.Header}>
      <Grid className={styles.Header} >
          <Grid item className={styles.Logo}><Link href='/'><img src="https://dienmaythanhan.vn/wp-content/uploads/2020/12/d3d175e560ae133f1ed5cd4ec173751a.png" alt="" />
        </Link></Grid>
        <Link href='/'><Grid  className={styles.Home}><h5>Trang chủ</h5></Grid></Link>
          <Grid  className={styles.search}>
          <Form.Control className={styles.search} placeholder="search" ></Form.Control>
          </Grid>
          <Grid className={styles.info}>
              <Grid  className={styles.mrb20}><ChatIcon width="48px"/></Grid>
              <Grid  className={styles.mrb20}><NotificationsIcon/></Grid>
              <Grid  className={styles.mrb20}><LoginMain/></Grid>
              <Grid className={styles.mrb20}>4</Grid>
          </Grid    >
      </Grid>
  // </div>;
  )
}

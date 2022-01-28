import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import Login from './Login'
import styles from './Loginmain.module.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2, 3),
    borderRadius:"20px"
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [model, setModel] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setModel(true);
  };

  const handleClose = () => {
    setOpen(false);
   
  };
 
  return (
    <div>
      <button type="button" onClick={handleOpen}>
      Đăng nhập
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            
          <div className={classes.paper}>
          <div className={styles.logoLogin}>
              <img src="https://dienmaythanhan.vn/wp-content/uploads/2020/12/d3d175e560ae133f1ed5cd4ec173751a.png" width="45px" height="45px" alt="" />
              </div>
             <div className={styles.wellcome}>
              <h3>Chào mừng bạn đến</h3>
              <h3>với Pinterest</h3>
              </div>
              <div className={styles.Bannerbox}>
              
              <div className={styles.Control}><Form.Control className={styles.user} placeholder="Email" ></Form.Control></div>
              <div className={styles.Control}><Form.Control className={styles.user} placeholder="Mật khẩu" ></Form.Control></div>
              <div className={styles.Forgotpassword}><Link  href="/">Quên mật khẩu?</Link></div>
              <div className={styles.Loginbutton}>
              <p><Button>Đăng nhập</Button></p>
              <p>Hoặc</p>
              <Login/>
              <p><Button>facebook</Button></p>
              <span>Bằng cách tiếp tục, bạn đồng ý với 
                  <div >
                  {/* style=" color: rgb(17, 17, 17);" */}
                      <Link href='/'>Điều khoản dịch vụ</Link>
                       Pinterest và xác nhận rằng bạn đã đọc
                       {/* style="font-weight: bold; color: rgb(17, 17, 17);" */}
                        <Link href='/' >Chính sách Quyền riêng tư</Link>
                     của chúng tôi</div></span>
              </div>
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import logoutSvg from 'images/UserPage/logoutSvg.svg';
import { useTranslation } from 'react-i18next';
import { LogOutButton, SVG } from './Logout.styled';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export const Logout = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <LogOutButton variant="outlined" onClick={handleClickOpen}>
        <SVG src={logoutSvg} />
        {t("user.logout")}
      </LogOutButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{t("user.logoutconf")}</DialogTitle>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              color: '#F59256',
            }}
          >
            {t("user.no")}
          </Button>
          <Button
            onClick={() => dispatch(logOut())}
            autoFocus
            style={{
              color: '#F59256',
            }}
          >
            {t("user.yes")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

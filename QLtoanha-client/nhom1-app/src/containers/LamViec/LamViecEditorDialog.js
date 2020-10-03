import React, { Component } from "react";
import {
  Button,
  Grid
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {addNewLamDichVu, updateLamDichVu, getLamDichVuByMaDV} from './LamViecService';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/styles';
import styles from '../The/styles';
import TextField from '@material-ui/core/TextField';
class DichVuEditorDialog extends Component {
  state = {
    maLV: "",
    maDV: "",
    maNV: "",
    ngayBD: "",
    ngayKT: "",
    dongialuong: "",
  };

  handleChange = (event, source) => {
    // event.persist();
    // if (source === "switch") {
    //   this.setState({ isActive: event.target.checked });
    //   return;
    // }

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = () => {
    // let { maDV } = this.state;
    // if (maDV) {
    //   updateDichVu({
    //     ...this.state
    //   }).then(() => {
    //     this.props.handleClose();
    //   });
    // } else {
        // let {maDV , tenDV , giaDV} = this.state;
        addNewLamDichVu({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
   //}
  };

  componentWillMount() {
    updateLamDichVu(this.props.uid).then(data => this.setState({...data.data}))
  }

  render() {
    let {maLV , maDV , maNV,ngayBD,ngayKT, dongialuong} = this.state;
    let { open, handleClose } = this.props;
    const {classes} = this.props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">Thêm/Cập Nhật lich lam viec</DialogTitle>
          <ValidatorForm ref="form" onSubmit={this.handleFormSubmit} className={classes.formControl} >
          <DialogContent>
                <TextValidator className={classes.textField}
                  label="Mã lam viec"
                  onChange={this.handleChange}
                  type="text"
                  name="maLV"
                  value={maLV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className={classes.textField}
                  label="ma dich vu"
                  onChange={this.handleChange}
                  type="text"
                  name="maDV"
                  value={maDV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className={classes.textField}
                  label="Ma nhan vien"
                  onChange={this.handleChange}
                  type="text"
                  name="maNV"
                  value={maNV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                 <br></br>
                <TextField className = {classes.textField}
                    id="date"
                    label="Ngày Bắt Đầu"
                    type="date"
                    defaultValue={ngayBD}
                    //className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="ngayBD"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <br></br>
                  <TextField className = {classes.textField}
                    id="date"
                    label="Ngày Kết Thúc"
                    type="date"
                    defaultValue={ngayKT}
                  //  className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="ngayKT"
                    onChange={this.handleChange}
                  />
                <TextValidator className={classes.textField}
                  label="don gia luong"
                  onChange={this.handleChange}
                  type="text"
                  name="dongialuong"
                  value={dongialuong}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
            </DialogContent>
            <DialogActions>
            <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
              <Button onClick={() => this.props.handleClose()}>Cancel</Button>
            </DialogActions>
          </ValidatorForm>
      </Dialog>
    );
  }
}

export default withStyles(styles) (DichVuEditorDialog);

import React, { Component } from "react";
import {
  Button,
  Grid,
  withStyles
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
 import {addNewCongTyThue, updateCongTyThue, getCongTyThueByMaCT} from './CongTyThueService';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import styles from '../The/styles';
class CongTyThueEditorDialog extends Component {
  state = {
    maCT: "",
    tenCT: "",
    thue: "",
    vonDL: "",
    soNV:"",
    diachi:"",
    dientich:"",
    soDT:"",
    ngaythue:"",
    ngayKT:"",
    
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
       // let {maCT , tenCT , thue,vonDL,soNV,diachi, dientich, soDT,ngaythue,ngayKT} = this.state;
        addNewCongTyThue({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
   //}
  };

  componentWillMount() {
    getCongTyThueByMaCT(this.props.uid).then(data => this.setState({...data.data}))
  }

  render() {
    let {maCT , tenCT , thue,vonDL,soNV,diachi, dientich, soDT,ngaythue,ngayKT} = this.state;
    let { open, handleClose } = this.props;
    const {classes} = this.props;

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">Thêm/Cập Nhật Cong TY</DialogTitle>
          <ValidatorForm ref="form" onSubmit={this.handleFormSubmit} className={classes.formControl}>
          <DialogContent>
                <TextValidator className = {classes.textField}
                  label="Mã Cong Ty"
                  onChange={this.handleChange}
                  type="text"
                  name="maCT"
                  value={maCT}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className = {classes.textField}
                  label="Tên cong ty"
                  onChange={this.handleChange}
                  type="text"
                  name="tenCT"
                  value={tenCT}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className = {classes.textField}
                  label="ma Thue"
                  onChange={this.handleChange}
                  type="text"
                  name="thue"
                  value={thue}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                 <TextValidator className = {classes.textField}
                  label="Von Dieu Le"
                  onChange={this.handleChange}
                  type="text"
                  name="vonDL"
                  value={vonDL}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                 <TextValidator className = {classes.textField}
                  label="so Nhan Vien"
                  onChange={this.handleChange}
                  type="text"
                  name="soNV"
                  value={soNV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                 <TextValidator className = {classes.textField}
                  label="Dia Chi"
                  onChange={this.handleChange}
                  type="text"
                  name="diachi"
                  value={diachi}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                 <TextValidator className = {classes.textField}
                  label="Dien Tich"
                  onChange={this.handleChange}
                  type="text"
                  name="dientich"
                  value={dientich}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                 <TextValidator className = {classes.textField}
                  label="so Dien Thoai"
                  onChange={this.handleChange}
                  type="text"
                  name="soDT"
                  value={soDT}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                 
                 <br></br>
                <TextField className = {classes.textField}
                    id="date"
                    label="Ngày Thuê"
                    type="date"
                    defaultValue={ngaythue}
                    //className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="ngaythue"
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

export default withStyles(styles) (CongTyThueEditorDialog);

import React, { Component } from "react";
import {
  Button,
  Grid
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {addNewNhanVienToaNha, updateNhanVienToaNha, getNhanVienToaNhaByMaNV} from './NhanVienToaNhaService';

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
    maNV: "",
    tenNV: "",
    ngaysinh: "",
    diachi: "",
    soDT: "",
    bac: "",
    vitri: "",
    maNV_QL: "",
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
        addNewNhanVienToaNha({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
   // }
  };

  componentWillMount() {
    getNhanVienToaNhaByMaNV(this.props.uid).then(data => this.setState({...data.data}))
   }

  render() {
    let {maNV , tenNV , ngaysinh, diachi, soDT, bac, vitri, maNV_QL} = this.state;
    let { open, handleClose } = this.props;
    const {classes} = this.props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">Thêm/Cập Nhật Dịch Vụ</DialogTitle>
          <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}  classes={classes.formControl}>
          <DialogContent>
                <TextValidator className={classes.textField}
                  label="Mã nhan vien"
                  onChange={this.handleChange}
                  type="text"
                  name="maNV"
                  value={maNV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className={classes.textField}
                  label="Tên Nhan vien"
                  onChange={this.handleChange}
                  type="text"
                  name="tenNV"
                  value={tenNV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <br></br>
                <TextField className={classes.textField}
                    id="date"
                    label="Ngày Sinh"
                    type="date"
                    defaultValue={ngaysinh}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="ngaysinh"
                    onChange={this.handleChange}
                  />
                  <br></br>
                <TextValidator className={classes.textField}
                  label="dia chi"
                  onChange={this.handleChange}
                  type="text"
                  name="diachi"
                  value={diachi}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className={classes.textField}
                  label="so dien thoai"
                  onChange={this.handleChange}
                  type="text"
                  name="soDT"
                  value={soDT}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className={classes.textField}
                  label="bac"
                  onChange={this.handleChange}
                  type="text"
                  name="bac"
                  value={bac}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className={classes.textField}
                  label="vi tri"
                  onChange={this.handleChange}
                  type="text"
                  name="vitri"
                  value={vitri}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className={classes.textField}
                  label="nhan vien quan ly"
                  onChange={this.handleChange}
                  type="text"
                  name="maNV_QL"
                  value={maNV_QL}
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

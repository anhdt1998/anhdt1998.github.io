import React, { Component } from "react";
import {
  Button,
  Grid
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {addNewNhanVienCongTy, updateNhanVienCongTy, getNhanVienCongTyByMaNV} from './NhanVienCongTyService';

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
    maCT: "",
    tenNV: "",
    ngaysinh: "",
    soDT: "",
    cmt: "",
  };

  handleChange = (event) => {
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
        //let {maNV , maCT , CMT, tenNV, ngaysinh, soDT} = this.state;
        addNewNhanVienCongTy({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
   //}
  };

  componentWillMount() {
    getNhanVienCongTyByMaNV(this.props.uid).then(data => this.setState({...data.data}))
   }

  render() {
    let {maNV , maCT, tenNV, ngaysinh, soDT, cmt} = this.state;
    let { open, handleClose } = this.props;
    const {classes} = this.props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">Thêm/Cập Nhật nhan vien cong ty</DialogTitle>
          <ValidatorForm ref="form" onSubmit={this.handleFormSubmit} className={classes.formControl} >
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
                  label="Ma Cong Ty"
                  onChange={this.handleChange}
                  type="text"
                  name="maCT"
                  value={maCT}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
             
                <TextValidator className={classes.textField}
                  label=" ten nhan vien"
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
                  label=" so dien thoai"
                  onChange={this.handleChange}
                  type="text"
                  name="soDT"
                  value={soDT}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                   <TextValidator className={classes.textField}
                  label=" CMT/CCCD"
                  onChange={this.handleChange}
                  type="text"
                  name="cmt"
                  value={cmt}
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

import React, { Component } from "react";
import {
  Button,
  Grid
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {addNewDangKyDichVu, updateDangKyDichVu,getDangKyDichVuByMaDV} from './DangKyDVService';

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
    maDK: "",
    maCT: "",
    maDV: "",
    ngayDK: "",
    ngayKT: "",
  
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
        addNewDangKyDichVu({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
   // }
  };

  componentWillMount() {
    getDangKyDichVuByMaDV(this.props.uid).then(data => this.setState({...data.data}))
  }

  render() {
    let {maDK , maCT , maDV, ngayDK, ngayKT, giaDV} = this.state;
    let { open, handleClose } = this.props;
    const {classes} = this.props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">Thêm/Cập Nhật dang ky dich vu</DialogTitle>
          <ValidatorForm ref="form" onSubmit={this.handleFormSubmit} className={classes.formControl}>
          <DialogContent>
                <TextValidator className={classes.textField}
                  label="Mã Dang ky dich vu"
                  onChange={this.handleChange}
                  type="text"
                  name="maDK"
                  value={maDK}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className={classes.textField}
                  label="ma cong ty"
                  onChange={this.handleChange}
                  type="text"
                  name="maCT"
                  value={maCT}
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
               <br></br>
                <TextField className={classes.textField}
                    id="date"
                    label="Ngày Đăng Ký"
                    type="date"
                    defaultValue={ngayDK}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="ngayDK"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <br></br>
                <TextField className={classes.textField}
                    id="date"
                    label="Ngày Kết Thúc"
                    type="date"
                    defaultValue={ngayKT}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="ngayKT"
                    onChange={this.handleChange}
                  />
                  <br></br>
                
               
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

import React, { Component } from "react";
import {
  Button,
  Grid
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {addNewDichVu, updateDichVu, getDichVuByMaDV} from './DichVuService';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DichVuEditorDialog extends Component {
  state = {
    maDV: "",
    tenDV: "",
    giaDV: "",
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
        addNewDichVu({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
   // }
  };

  componentWillMount() {
    getDichVuByMaDV(this.props.uid).then(data => this.setState({...data.data}))
  }

  render() {
    let {maDV , tenDV , giaDV} = this.state;
    let { open, handleClose } = this.props;

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">Thêm/Cập Nhật Dịch Vụ</DialogTitle>
          <ValidatorForm ref="form" onSubmit={this.handleFormSubmit} >
          <DialogContent>
                <TextValidator
                  label="Mã Dịch Vụ"
                  onChange={this.handleChange}
                  type="text"
                  name="maDV"
                  value={maDV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator
                  label="Tên Dịch Vụ"
                  onChange={this.handleChange}
                  type="text"
                  name="tenDV"
                  value={tenDV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator
                  label="Giá Dịch Vụ"
                  onChange={this.handleChange}
                  type="text"
                  name="giaDV"
                  value={giaDV}
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

export default DichVuEditorDialog;

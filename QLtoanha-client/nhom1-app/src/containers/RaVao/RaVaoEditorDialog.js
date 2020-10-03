import React, { Component } from "react";
import {
  Button,
  Grid
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {addNewRaVao, updateRaVao, getRaVaoByMaRV} from './RaVaoService';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/styles';
import styles from '../The/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class DichVuEditorDialog extends Component {
  state = {
    maRV: "",
    maT: "",
    tgian: "",
    loai: "",
    diadiem: "",
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
        addNewRaVao({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
   // }
  };

  componentWillMount() {
   getRaVaoByMaRV(this.props.uid).then(data => this.setState({...data.data}))
  }

  render() {
    let {maRV , maT , tgian,loai, diadiem} = this.state;
    let { open, handleClose } = this.props;
    const {classes} = this.props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">Thêm/Cập Nhật the ra vao</DialogTitle>
          <ValidatorForm ref="form" onSubmit={this.handleFormSubmit} className={classes.formControl}>
          <DialogContent>
                <TextValidator className={classes.textField}
                  label="Mã Ra vao"
                  onChange={this.handleChange}
                  type="text"
                  name="maRV"
                  value={maRV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator className={classes.textField}
                  label="ma the"
                  onChange={this.handleChange}
                  type="text"
                  name="maT"
                  value={maT}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <br></br>
                  <TextField
                    id="date"
                    label="Thời Gian"
                    type="date"
                    defaultValue={tgian}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="tgian"
                    onChange={this.handleChange}
                  />
                  <br></br>
                    <InputLabel id="demo-simple-select-label" className={classes.textField}
                    >Loại Thẻ
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={loai}
                        name="loai"
                        onChange={this.handleChange}
                        className={classes.selectEmpty}
                      >
                        <MenuItem value={"ra"}>Ra</MenuItem>
                        <MenuItem value={"vao"}>Vao</MenuItem>
                      </Select>
                    </InputLabel>
                <TextValidator className={classes.textField}
                  label=" Địa Điểm"
                  onChange={this.handleChange}
                  type="text"
                  name="diadiem"
                  value={diadiem}
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

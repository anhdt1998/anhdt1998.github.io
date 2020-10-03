import React, { Component } from "react";
import {
  Button,
  Grid
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {addNewThe, getTheByMaT} from "./TheService";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class DichVuEditorDialog extends Component {
  state = {
    maT: "",
    maNV: "",
    ngaycap: "",
    ngayhethan:"",
    loai:"",
    setLoai:""
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
  // handleChangeLoai = e => {
  //   setLoai(e.target.value);
  // }
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
        addNewThe({
        ...this.state
      }).then(() => {
        this.props.handleClose();
      });
   // }
  };

  componentWillMount() {
    getTheByMaT(this.props.uid).then(data => this.setState({...data.data}));
  }

  render() {
    let {maT , maNV , ngaycap, ngayhethan,loai} = this.state;
    let { open, handleClose } = this.props;
    const {classes} = this.props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">Thêm/Cập Nhật Thẻ</DialogTitle>
          <ValidatorForm ref="form" onSubmit={this.handleFormSubmit} className= {classes.formControl}>
          <DialogContent>
                <TextValidator
                  label="Mã Thẻ"
                  onChange={this.handleChange}
                  type="text"
                  name="maT"
                  value={maT}
                  className={classes.textField}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator
                  label="Mã Nhân Viên"
                  onChange={this.handleChange}
                  type="text"
                  name="maNV"
                  value={maNV}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  className={classes.textField}
                />
                <br></br>
                <TextField
                    id="date"
                    label="Ngày Cấp"
                    type="date"
                    defaultValue={ngaycap}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="ngaycap"
                    onChange={this.handleChange}
                  />
                  <br></br>
                  <br></br>
                  <TextField
                    id="date"
                    label="Ngày Hết Hạn"
                    type="date"
                    defaultValue={ngayhethan}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="ngayhethan"
                    onChange={this.handleChange}
                  />
                  <br></br>
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
                        <MenuItem value={"vip"}>Vip</MenuItem>
                        <MenuItem value={"normal"}>Normal</MenuItem>
                      </Select>
                    </InputLabel>
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

export default withStyles(styles)(DichVuEditorDialog);

import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import shortid from 'shortid';
import DichVuEditorDialog from './CongTyThueEditorDialog';
 import {deleteCongTyThue, getCongTyThueByMaCT} from './CongTyThueService';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Moment from 'moment';
import {
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  TablePagination,
  Button,
  Card
} from "@material-ui/core";
import axios from 'axios';


const DATE_OPTIONS = {year: 'numeric', month: 'short', day: 'numeric' };
class CongTyThue extends Component {
  state = {
    congtythues: [],
    rowsPerPage: 10,
    page: 0,
    shouldOpenEditorDialog: false,
    open: false,
    setOpen: false,
    query: "",
    congtySearch:[]
  }
  setPage = page => {
    this.setState({ page });
  };

  setRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
  };
  handleDialogClose = () => {
    this.setState({
      shouldOpenEditorDialog: false
    });
    this.updatePageData();
  };
  componentDidMount() {
    this.updatePageData();
  }
  updatePageData = () => {
    axios.get(`http://localhost:8082/congtythue`)
      .then(res => {
        const congtythues = res.data;
        this.setState({ congtythues });
      })
      .catch(error => console.log(error));
  };


   handleClickOpen = maCT => {
    this.setState({setOpen : true, open : true, maCT});
  };

   handleClickClose = () => {
    this.setState({setOpen : false, open : false});
  };

  handleDeleteCongTyThue = (ma) => {
    this.setState({ma});
    console.log(ma);
    this.handleClickOpen();
  };
  
  handleSubmitdelete = () => {
    console.log(this.state.ma);
    deleteCongTyThue(this.state.ma).then(() => {
      this.handleClickClose();
      this.updatePageData();
    });
  };

  handleInputOnChange = (event) => {
    const query = event.target.value ;
    console.warn(query);
    this.setState( {query: query});
  }
  searchResult = () => {
    
     console.log(this.state.query);
     getCongTyThueByMaCT(this.state.query)
     .then((res) => {
       const congtySearch = res.data;
       this.setState({congtySearch})
       //console.log(dichvcongtySearchuSearch);
     })
     
  }
  render() {
    let {
      rowsPerPage,
      page,
      congtythues,
      shouldOpenEditorDialog,
      query,
      congtySearch
    } = this.state;
    console.warn(query)
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30" style={{display:"flex", justifyContent: "space-between"}} >
              <Button
                className="mb-16"
                variant="contained"
                color="primary"
                onClick={() => this.setState({ shouldOpenEditorDialog: true })}
              >
                Thêm mới công ty
              </Button>
              <div>
                    <TextField
                          label="Search input"
                          variant="outlined"
                          style={{width:500, height:50}}
                          onChange={this.handleInputOnChange}
                          name = "query"
                          value={query}
                    />
                    <Button
                       style={{ height:53}}
                      className="mb-16"
                      variant="contained"
                      color="primary"
                      onClick={this.searchResult}
                    >
                      Go
                    </Button>
              </div>
              
        </div>
        
        <hr></hr>
        <Card className="w-100 overflow-auto" elevation={10}>
          <Table className="crud-table" style={{ whiteSpace: "pre", minWidth: "750px" }}>
            <TableHead>
              <TableRow>
              <TableCell>Mã Công Ty</TableCell>
                <TableCell>Tên Công Ty</TableCell>
                <TableCell>Mã Thuế</TableCell>
                <TableCell>Vốn Điều Lệ</TableCell>
                <TableCell>Số Nhân Viên</TableCell>
                <TableCell>Địa Chỉ</TableCell>
                <TableCell>Diện Tích</TableCell>
                <TableCell>Số Điện Thoại</TableCell>
                <TableCell>Ngày Thuê</TableCell>
                <TableCell>Ngày Kết Thúc</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {congtythues
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((congty, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {congty.maCT}
                    </TableCell>
                    <TableCell className="px-0">{congty.tenCT}</TableCell>
                    <TableCell className="px-0" align="left">
                      {congty.thue}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congty.vonDL}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congty.soNV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congty.diachi}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congty.dientich}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congty.soDT}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                        {(new Date(congty.ngaythue)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(congty.ngayKT)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                  
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: congty.maCT,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteCongTyThue(congty.maCT)}>
                        <Icon color="error">delete</Icon>
                      </IconButton>
                      
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            className="px-16"
            rowsPerPageOptions={[3, 6, 9]}
            component="div"
            count={congtythues.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.setRowsPerPage}
          />

          {shouldOpenEditorDialog && (
            <DichVuEditorDialog
              handleClose={this.handleDialogClose}
              open={shouldOpenEditorDialog}
               uid={this.state.uid}
            />
          )}
          
                  <Dialog
                  open = {this.state.open}
                  onClose={this.handleClickClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Mày có chắc chắn xoá ?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Đây là một quyết định quan trọng. Hãy chắc chắn mày làm đúng, nếu không mày ngu vcl ! 
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClickClose} color="primary">
                      Huỷ
                    </Button>
                    <Button  color="primary" onClick={this.handleSubmitdelete} autoFocus>
                      Tao chấp nhận
                    </Button>
                  </DialogActions>
                </Dialog>
        </Card>
        <hr></hr>
        <Card className="w-100 overflow-auto" elevation={4}>
          <Table className="crud-table" style={{ whiteSpace: "pre", minWidth: "750px" }}>
            <TableHead>
              <TableRow>
              <TableCell>Mã Công Ty</TableCell>
                <TableCell>Tên Công Ty</TableCell>
                <TableCell>Mã Thuế</TableCell>
                <TableCell>Vốn Điều Lệ</TableCell>
                <TableCell>Số Nhân Viên</TableCell>
                <TableCell>Địa Chỉ</TableCell>
                <TableCell>Diện Tích</TableCell>
                <TableCell>Số Điện Thoại</TableCell>
                <TableCell>Ngày Thuê</TableCell>
                <TableCell>Ngày Kết Thúc</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                  <TableRow key={shortid.generate()}>
                  <TableCell className="px-0" align="left">
                      {congtySearch.maCT}
                    </TableCell>
                    <TableCell className="px-0">{congtySearch.tenCT}</TableCell>
                    <TableCell className="px-0" align="left">
                      {congtySearch.thue}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congtySearch.vonDL}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congtySearch.soNV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congtySearch.diachi}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congtySearch.dientich}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {congtySearch.soDT}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(congtySearch.ngaythue)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(congtySearch.ngayKT)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: congtySearch.maCT,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteCongTyThue(congtySearch.maCT)}>
                        <Icon color="error">delete</Icon>
                      </IconButton>
                      
                    </TableCell>
                  </TableRow>
            </TableBody>
          </Table>

          
          {shouldOpenEditorDialog && (
            <DichVuEditorDialog
              handleClose={this.handleDialogClose}
              open={shouldOpenEditorDialog}
               uid={this.state.uid}
            />
          )}
          
                  <Dialog
                  open = {this.state.open}
                  onClose={this.handleClickClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Mày có chắc chắn xoá ?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Đây là một quyết định quan trọng. Hãy chắc chắn mày làm đúng, nếu không mày ngu vcl ! 
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClickClose} color="primary">
                      Huỷ
                    </Button>
                    <Button  color="primary" onClick={this.handleSubmitdelete} autoFocus>
                      Tao chấp nhận
                    </Button>
                  </DialogActions>
                </Dialog>
        </Card>
      </div>
     
      
    );
  }
}
export default withStyles(styles)(CongTyThue);

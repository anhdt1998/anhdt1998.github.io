import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import shortid from 'shortid';
import DichVuEditorDialog from './LamViecEditorDialog';
import {deleteLamDichVu, getLamDichVuByMaDV} from './LamViecService';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
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
class LamDichVu extends Component {
  state = {
    lamviecs: [],
    rowsPerPage: 10,
    page: 0,
    shouldOpenEditorDialog: false,
    open: false,
    setOpen: false,
    query: "",
    lamviecSearch:[]
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
    axios.get(`http://localhost:8082/lamdichvu`)
      .then(res => {
        const lamviecs = res.data;
        this.setState({ lamviecs });
      })
      .catch(error => console.log(error));
  };


   handleClickOpen = maLV => {
    this.setState({setOpen : true, open : true, maLV});
  };

   handleClickClose = () => {
    this.setState({setOpen : false, open : false});
  };

  handleDeleteLamDichVu = (ma) => {
    this.setState({ma});
    console.log(ma);
    this.handleClickOpen();
  };
  
  handleSubmitdelete = () => {
    console.log(this.state.ma);
    deleteLamDichVu(this.state.ma).then(() => {
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
     getLamDichVuByMaDV(this.state.query)
     .then((res) => {
       const lamviecSearch = res.data;
       this.setState({lamviecSearch})
       console.log(lamviecSearch);
     })
     
  }
  render() {
    let {
      rowsPerPage,
      page,
      lamviecs,
      shouldOpenEditorDialog,
      query,
      lamviecSearch
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
                Thêm mới làm dịch vụ
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
              <TableCell>Mã Làm Việc</TableCell>
                <TableCell>Mã Dịch Vụ</TableCell>
                <TableCell>Mã Nhân Viên</TableCell>
                <TableCell>Ngày Bắt Đầu</TableCell>
                <TableCell>Ngày Kết Thúc</TableCell>
                <TableCell>Đơn Giá Lương</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lamviecs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((lamviec, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {lamviec.maLV}
                    </TableCell>
                    <TableCell className="px-0">{lamviec.maDV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {lamviec.maNV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                     {(new Date(lamviec.ngayBD)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(lamviec.ngayKT)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {lamviec.dongialuong}
                    </TableCell>
                  
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: lamviec.maLV,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteLamDichVu(lamviec.maLV)}>
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
            count={lamviecs.length}
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
              <TableCell>Mã Làm Việc</TableCell>
                <TableCell>Mã Dịch Vụ</TableCell>
                <TableCell>Mã Nhân Viên</TableCell>
                <TableCell>Ngày Bắt Đầu</TableCell>
                <TableCell>Ngày Kết Thúc</TableCell>
                <TableCell>Đơn Giá Lương</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                  <TableRow key={shortid.generate()}>
                  <TableCell className="px-0" align="left">
                      {lamviecSearch.maLV}
                    </TableCell>
                    <TableCell className="px-0">{lamviecSearch.maDV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {lamviecSearch.maNV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(lamviecSearch.ngayBD)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(lamviecSearch.ngayKT)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {lamviecSearch.dongialuong}
                    </TableCell>
                  
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: lamviecSearch.maLV,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteLamDichVu(lamviecSearch.maLV)}>
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
export default withStyles(styles)(LamDichVu);

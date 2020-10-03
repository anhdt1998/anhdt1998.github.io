import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import shortid from 'shortid';
 import DichVuEditorDialog from './TheEditorDialog';
import {deleteThe, getTheByMaT} from './TheService';
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
class The extends Component {
  state = {
    thes: [],
    rowsPerPage: 10,
    page: 0,
    shouldOpenEditorDialog: false,
    open: false,
    setOpen: false,
    query: "",
    theSearch:[]
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
    axios.get(`http://localhost:8082/the`)
      .then(res => {
        const thes = res.data;
        this.setState({ thes });
      })
      .catch(error => console.log(error));
  };


   handleClickOpen = maT => {
    this.setState({setOpen : true, open : true, maT});
  };

   handleClickClose = () => {
    this.setState({setOpen : false, open : false});
  };

  handleDeleteThe = (ma) => {
    this.setState({ma});
    console.log(ma);
    this.handleClickOpen();
  };
  
  handleSubmitdelete = () => {
    console.log(this.state.ma);
    deleteThe(this.state.ma).then(() => {
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
     getTheByMaT(this.state.query)
     .then((res) => {
       const theSearch = res.data;
       this.setState({theSearch})
       console.log(theSearch);
     })
     
  }
  render() {
    let {
      rowsPerPage,
      page,
      thes,
      shouldOpenEditorDialog,
      query,
      theSearch
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
              <TableCell>Mã Thẻ</TableCell>
                <TableCell>Mã Nhân Viên</TableCell>
                <TableCell>Ngày Cấp</TableCell>
                <TableCell>Ngày Hết Hạn</TableCell>
                <TableCell>Loại Thẻ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {thes
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((the, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {the.maT}
                    </TableCell>
                    <TableCell className="px-0">{the.maNV}</TableCell>
                    <TableCell className="px-0" align="left">
                      {(new Date(the.ngaycap)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {(new Date(the.ngayhethan)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {the.loai}
                    </TableCell>
                  
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: the.maT,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteThe(the.maT)}>
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
            count={thes.length}
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
              <TableCell>Mã Thẻ</TableCell>
                <TableCell>Mã Nhân Viên</TableCell>
                <TableCell>Ngày Cấp</TableCell>
                <TableCell>Ngày Hết Hạn</TableCell>
                <TableCell>Loại Thẻ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                  <TableRow key={shortid.generate()}>
                  <TableCell className="px-0" align="left">
                      {theSearch.maT}
                    </TableCell>
                    <TableCell className="px-0">{theSearch.maNV}</TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(theSearch.ngaycap)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(theSearch.ngayhethan)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {theSearch.loai}
                    </TableCell>
                  
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: theSearch.maT,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteThe(theSearch.maT)}>
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
export default withStyles(styles)(The);

import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import shortid from 'shortid';
import DichVuEditorDialog from './DichVuEditorDialog';
import {deleteDichVu, getDichVuByMaDV} from './DichVuService';
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

class DichVu extends Component {
  state = {
    dichvus: [],
    rowsPerPage: 10,
    page: 0,
    shouldOpenEditorDialog: false,
    open: false,
    setOpen: false,
    query: "",
    dichvuSearch:[]
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
    axios.get(`http://localhost:8082/dichvu`)
      .then(res => {
        const dichvus = res.data;
        this.setState({ dichvus });
      })
      .catch(error => console.log(error));
  };


   handleClickOpen = maDV => {
    this.setState({setOpen : true, open : true, maDV});
  };

   handleClickClose = () => {
    this.setState({setOpen : false, open : false});
  };

  handleDeleteDichVu = (ma) => {
    this.setState({ma});
    console.log(ma);
    this.handleClickOpen();
  };
  
  handleSubmitdelete = () => {
    console.log(this.state.ma);
    deleteDichVu(this.state.ma).then(() => {
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
     getDichVuByMaDV(this.state.query)
     .then((res) => {
       const dichvuSearch = res.data;
       this.setState({dichvuSearch})
       console.log(dichvuSearch);
     })
     
  }
  render() {
    let {
      rowsPerPage,
      page,
      dichvus,
      shouldOpenEditorDialog,
      query,
      dichvuSearch
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
                Thêm mới dịch vụ
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
        <Card className="w-100 overflow-auto" elevation={4}>
          <Table className="crud-table" style={{ whiteSpace: "pre", minWidth: "750px" }}>
            <TableHead>
              <TableRow>
              <TableCell>Mã Dịch Vụ</TableCell>
                <TableCell>Tên Dịch Vụ</TableCell>
                <TableCell>Giá Dịch Vụ</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dichvus
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((dichvu, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {dichvu.maDV}
                    </TableCell>
                    <TableCell className="px-0">{dichvu.tenDV}</TableCell>
                    <TableCell className="px-0" align="left">
                      {dichvu.giaDV}
                    </TableCell>
                  
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: dichvu.maDV,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteDichVu(dichvu.maDV)}>
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
            count={dichvus.length}
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
        { <Card className="w-100 overflow-auto" elevation={4}>
          <Table className="crud-table" style={{ whiteSpace: "pre", minWidth: "750px" }}>
            <TableHead>
              <TableRow>
              <TableCell>Mã Dịch Vụ</TableCell>
                <TableCell>Tên Dịch Vụ</TableCell>
                <TableCell>Giá Dịch Vụ</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {dichvuSearch.maDV}
                    </TableCell>
                    <TableCell className="px-0">{dichvuSearch.tenDV}</TableCell>
                    <TableCell className="px-0" align="left">
                      {dichvuSearch.giaDV}
                    </TableCell>

                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: dichvuSearch.maDV,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteDichVu(dichvuSearch.maDV)}>
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
        </Card> }
      </div>
     
      
    );
  }
}
export default withStyles(styles)(DichVu);

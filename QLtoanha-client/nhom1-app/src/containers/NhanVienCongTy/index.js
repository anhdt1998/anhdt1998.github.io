import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import shortid from 'shortid';
import DichVuEditorDialog from './NhanVienCongTyEditorDialog';
import {deleteNHanVienCongTy, getNhanVienCongTyByMaNV} from './NhanVienCongTyService';
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
class NhanVienCogTy extends Component {
  state = {
    nhanvienCTs: [],
    rowsPerPage: 10,
    page: 0,
    shouldOpenEditorDialog: false,
    open: false,
    setOpen: false,
    query: "",
    nhanvienCTSearch:[]
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
    axios.get(`http://localhost:8082/nhanviencongty`)
      .then(res => {
        const nhanvienCTs = res.data;
        this.setState({ nhanvienCTs });
      })
      .catch(error => console.log(error));
  };


   handleClickOpen = maNV => {
    this.setState({setOpen : true, open : true, maNV});
  };

   handleClickClose = () => {
    this.setState({setOpen : false, open : false});
  };

  handleDeleteNhanVienCongTy = (ma) => {
    this.setState({ma});
    console.log(ma);
    this.handleClickOpen();
  };
  
  handleSubmitdelete = () => {
    console.log(this.state.ma);
    deleteNHanVienCongTy(this.state.ma).then(() => {
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
     getNhanVienCongTyByMaNV(this.state.query)
     .then((res) => {
       const nhanvienCTSearch = res.data;
       this.setState({nhanvienCTSearch})
       console.log(nhanvienCTSearch);
     })
     
  }
  render() {
    let {
      rowsPerPage,
      page,
      nhanvienCTs,
      shouldOpenEditorDialog,
      query,
      nhanvienCTSearch
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
                Thêm mới nhân viên  công ty
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
              <TableCell>Mã Nhân Viên</TableCell>
                <TableCell>Mã Công Ty</TableCell>
                <TableCell>CMT</TableCell>
                <TableCell>Tên Nhân Viên</TableCell>
                <TableCell>Ngày Sinh</TableCell>
                <TableCell>Số Điện Thoại</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nhanvienCTs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((nhavienCT, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {nhavienCT.maNV}
                    </TableCell>
                    <TableCell className="px-0">{nhavienCT.maCT}</TableCell>
                    <TableCell className="px-0" align="left">
                      {nhavienCT.cmt}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {nhavienCT.tenNV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {(new Date(nhavienCT.ngaysinh)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {nhavienCT.soDT}
                    </TableCell>
                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: nhavienCT.maNV,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteNhanVienCongTy(nhavienCT.maNV)}>
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
            count={nhanvienCTs.length}
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
              <TableCell>Mã Nhân Viên</TableCell>
                <TableCell>Mã Công Ty</TableCell>
                <TableCell>CMT</TableCell>
                <TableCell>Tên Nhân Viên</TableCell>
                <TableCell>Ngày Sinh</TableCell>
                <TableCell>Số Điện Thoại</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                  <TableRow key={shortid.generate()}>


                  <TableCell className="px-0" align="left">
                      {nhanvienCTSearch.maNV}
                    </TableCell>
                    <TableCell className="px-0">{nhanvienCTSearch.maCT}</TableCell>
                    <TableCell className="px-0" align="left">
                      {nhanvienCTSearch.cmt}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {nhanvienCTSearch.tenNV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(nhanvienCTSearch.ngaysinh)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {nhanvienCTSearch.soDT}
                    </TableCell>

                    <TableCell className="px-0 border-none">
                      <IconButton
                        onClick={() =>
                          this.setState({
                            uid: nhanvienCTSearch.maNV,
                            shouldOpenEditorDialog: true
                          })
                        }
                      >
                        <Icon color="primary">edit</Icon>
                      </IconButton>
                      <IconButton onClick={() => this.handleDeleteNhanVienCongTy(nhanvienCTSearch.maNV)}>
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
export default withStyles(styles)(NhanVienCogTy);

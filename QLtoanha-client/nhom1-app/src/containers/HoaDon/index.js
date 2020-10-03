import React, { Component } from 'react';
import styles from './styles';
import shortid from 'shortid';
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
class HoaDon extends Component {
  state = {
    hoadons: [],
    rowsPerPage: 10,
    page: 0,
    query: "",
    hoadonSearch:[]
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
  componentDidMount() {
    this.updatePageData();
  }
  updatePageData = () => {
    axios.get(`http://localhost:8082/hoadoncongty`)
      .then(res => {
        const hoadons = res.data;
        this.setState({ hoadons });
      })
      .catch(error => console.log(error));
  };
  handleInputOnChange = (event) => {
    const query = event.target.value ;
    console.warn(query);
    this.setState( {query: query});
  }
  searchResult = () => {
    //  console.log(this.state.query);
    //  getCongTyThueByMaCT(this.state.query)
    //  .then((res) => {
    //    const congtySearch = res.data;
    //    this.setState({congtySearch})
       //console.log(dichvcongtySearchuSearch);
    // })
     
  }
  render() {
    let {
      rowsPerPage,
      page,
      hoadons,
      query,
      hoadonSearch
    } = this.state;
    console.warn(query)
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30" style={{display:"flex", justifyContent: "space-between"}} >
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
                <TableCell>Mã Dịch Vụ</TableCell>
                <TableCell>Tên Dịch Vụ</TableCell>
                <TableCell>Ngày Đăng Ký</TableCell>
                <TableCell>Ngày Kết Thúc</TableCell>
                <TableCell>Giá Dịch Vụ</TableCell>
                <TableCell>Giá Thực Tế</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hoadons
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((hoadon, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {hoadon.maCT}
                    </TableCell>
                    <TableCell className="px-0">{hoadon.tenCT}</TableCell>
                    <TableCell className="px-0" align="left">
                      {hoadon.maDV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {hoadon.tenDV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {(new Date(hoadon.ngayDK)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                    {(new Date(hoadon.ngayKT)).toLocaleDateString('en-US',DATE_OPTIONS)}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {hoadon.giaDV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {hoadon.thuctedichvu}
                   </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            className="px-16"
            rowsPerPageOptions={[3, 6, 9]}
            component="div"
            count={hoadons.length}
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
        </Card>
        <hr></hr>
        {/* <Card className="w-100 overflow-auto" elevation={4}>
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
        </Card> */}
      </div>
     
      
    );
  }
}
export default HoaDon;

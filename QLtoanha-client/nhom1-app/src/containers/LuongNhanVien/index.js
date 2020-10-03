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
class Luong extends Component {
  state = {
    luongs: [],
    rowsPerPage: 10,
    page: 0,
    query: "",
    luongSearch:[]
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
    axios.get(`http://localhost:8082/luongnhanvien`)
      .then(res => {
        const luongs = res.data;
        this.setState({ luongs });
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
    axios.get(`http://localhost:8082/luongnhanvien/${this.state.query}`).then((res) => {
        const luongSearch = res.data;
        this.setState({luongSearch})
    })
  }
  render() {
    let {
      rowsPerPage,
      page,
      luongs,
      query,
      luongSearch
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
              <TableCell>Mã Nhân Viên</TableCell>
                <TableCell>Tên Nhân Viên</TableCell>
                <TableCell>Mã Dịch Vụ</TableCell>
                <TableCell>Số Ngày Làm</TableCell>
                <TableCell>Lương Cứng</TableCell>
                <TableCell>Lương Thưởng</TableCell>
                <TableCell>Tổng Lương</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {luongs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((luong, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {luong.maNV}
                    </TableCell>
                    <TableCell className="px-0">{luong.tenNV}</TableCell>
                    <TableCell className="px-0" align="left">
                      {luong.maDV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {luong.songaylam}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {luong.luongcung}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {luong.luonghoahong}
                   </TableCell>
                   <TableCell className="px-0" align="left">
                      {luong.tongluong}
                   </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            className="px-16"
            rowsPerPageOptions={[3, 6, 9]}
            component="div"
            count={luongs.length}
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
        <Card className="w-100 overflow-auto" elevation={4}>
          <Table className="crud-table" style={{ whiteSpace: "pre", minWidth: "750px" }}>
            <TableHead>
              <TableRow>
              <TableCell>Mã Nhân Viên</TableCell>
                <TableCell>Tên Nhân Viên</TableCell>
                <TableCell>Mã Dịch Vụ</TableCell>
                <TableCell>Số Ngày Làm</TableCell>
                <TableCell>Lương Cứng</TableCell>
                <TableCell>Lương Thưởng</TableCell>
                <TableCell>Tổng Lương</TableCell>
              </TableRow>
            </TableHead>
          
            <TableBody>
              {luongSearch
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((luongnv, index) => (
                  <TableRow key={shortid.generate()}>
                    <TableCell className="px-0" align="left">
                      {luongnv.maNV}
                    </TableCell>
                    <TableCell className="px-0">{luongnv.tenNV}</TableCell>
                    <TableCell className="px-0" align="left">
                      {luongnv.maDV}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {luongnv.songaylam}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {luongnv.luongcung}
                    </TableCell>
                    <TableCell className="px-0" align="left">
                      {luongnv.luonghoahong}
                   </TableCell>
                   <TableCell className="px-0" align="left">
                      {luongnv.tongluong}
                   </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Card>
      </div>
     
      
    );
  }
}
export default Luong;

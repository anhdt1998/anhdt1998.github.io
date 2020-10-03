import AdminHomePage from "../../components/AdminHomePage";
import DichVu from "../DichVu";
import CongTyThue from "../CongTyThue";
import NhanVienCongTy from "../NhanVienCongTy";
import NhanVienToaNha from '../NhanVienToaNha';
import DangKyDichVu from "../DangKyDichVu";
import LamDichVu from '../LamViec';
import The from "../The";
import RaVao from "../RaVao";
import HoaDon from "../HoaDon";
import Luong from "../LuongNhanVien";

export const STATUSES = [
    {
        value: 0,
        label: "Task 1"
    },
    {
        value: 1,
        label: "Task 2"
    },
    {
        value:2,
        label: "Task 3"
    }

];
export const ADMIN_ROUTES = [
    {
        path: '/',
        name: 'Trang quản trị',
        component: AdminHomePage,
        exact:true
    },
    {
        path:'/dichvu',
        name: 'Dịch Vụ',
        component: DichVu
    },
    {
        path:'/congty',
        name: 'Công Ty Thuê',
        component: CongTyThue
    },
    {
        path:'/nhanviencongty',
        name:'Nhân Viên Công Ty',
        component: NhanVienCongTy
    },
    {
        path:'/nhanvientoanha',
        name:'Nhân Viên Toà Nhà',
        component: NhanVienToaNha
    },
    {
        path:'/dangkydichvu',
        name:'Đăng Ký Dịch Vụ',
        component: DangKyDichVu
    },
    {
        path:'/lamdichvu',
        name:'Làm Việc',
        component:LamDichVu
    },
    {
        path:'/the',
        name:'Thẻ',
        component: The
    },
    {
        path:'/ravao',
        name:'Ra Vào',
        component:RaVao
    },
    {
        path:'/hoadon',
        name:'Hoá Đơn Công Ty',
        component:HoaDon
    },
    {
        path:'/luong',
        name:'Bảng Lương',
        component:Luong
    }
]
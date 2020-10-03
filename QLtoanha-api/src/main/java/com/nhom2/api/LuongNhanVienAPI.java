package com.nhom2.api;

import com.nhom2.entity.LuongNhanVien;
import com.nhom2.service.LuongNhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class LuongNhanVienAPI {
    @Autowired
    private LuongNhanVienService luongNhanVienService;

    @GetMapping(value = "/luongnhanvien")
    public List<LuongNhanVien> getAllLuongNV(){
        return luongNhanVienService.getAllLuong();
    }

    @GetMapping(value = "/luongnhanvien/{maNV}")
    public List<LuongNhanVien> getLuongByMaNV (@PathVariable("maNV") String maNV){
        return luongNhanVienService.getLuongByMa(maNV);
    }
}

package com.nhom2.service;

import com.nhom2.entity.LuongNhanVien;

import java.util.List;

public interface LuongNhanVienService {
    List<LuongNhanVien> getAllLuong();
    List<LuongNhanVien> getLuongByMa(String maNV);
}

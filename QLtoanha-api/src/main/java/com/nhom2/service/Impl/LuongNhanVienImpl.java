package com.nhom2.service.Impl;

import com.nhom2.entity.LuongNhanVien;
import com.nhom2.repository.LuongNhanVienRepository;
import com.nhom2.service.LuongNhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LuongNhanVienImpl implements LuongNhanVienService {

    @Autowired
    private LuongNhanVienRepository luongNhanVienRepository;

    @Override
    public List<LuongNhanVien> getAllLuong() {
        return luongNhanVienRepository.findAll();
    }

    @Override
    public List<LuongNhanVien> getLuongByMa(String maNV) {
        return luongNhanVienRepository.getLuongByMa(maNV);
    }
}

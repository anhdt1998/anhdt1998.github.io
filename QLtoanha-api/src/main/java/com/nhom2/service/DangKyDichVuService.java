package com.nhom2.service;

import java.util.List;
import java.util.Optional;

import com.nhom2.entity.DangKyDichVu;

public interface DangKyDichVuService {
	List<DangKyDichVu> findAll();
    void save(DangKyDichVu dangkydichvu);
    DangKyDichVu update(DangKyDichVu dangkydichvu);
    void deleteDV(String maDK);

    Optional<DangKyDichVu> getDKDVbyMaDK(String maDK);
}



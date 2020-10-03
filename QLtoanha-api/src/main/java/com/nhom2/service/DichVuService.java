package com.nhom2.service;

import com.nhom2.entity.DichVu;

import java.util.List;
import java.util.Optional;

public interface DichVuService {
    List<DichVu> findAll();
    void save(DichVu dichVu);
    DichVu update(DichVu dichVu);
    void delete(String maDV);
    Optional<DichVu> findByMaDV(String maDV);
}

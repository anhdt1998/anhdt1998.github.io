package com.nhom2.service;

import java.util.List;
import java.util.Optional;


import com.nhom2.entity.LamDichVu;

public interface LamDichVuService {
	List<LamDichVu> findAll();
    void save(LamDichVu lamDichVu);
    LamDichVu update(LamDichVu lamDichVu);
    void delete(String maLV);

    Optional<LamDichVu> getLDVbyMa(String maLV);
}

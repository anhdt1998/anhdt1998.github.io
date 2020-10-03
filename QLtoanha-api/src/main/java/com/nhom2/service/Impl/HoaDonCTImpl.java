package com.nhom2.service.Impl;

import com.nhom2.entity.HoaDonCongTy;
import com.nhom2.repository.HoaDonCTRepository;
import com.nhom2.service.HoaDonCTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HoaDonCTImpl implements HoaDonCTService {
    @Autowired
    private HoaDonCTRepository hoaDonCTRepository;

    @Override
    public List<HoaDonCongTy> getAllHoaDon() {
        return hoaDonCTRepository.findAll();
    }
}

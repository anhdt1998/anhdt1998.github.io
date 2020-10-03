package com.nhom2.service.Impl;

import com.nhom2.entity.DichVu;
import com.nhom2.repository.DichVuRepository;
import com.nhom2.service.DichVuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DichVuServiceImpl implements DichVuService {
    @Autowired
    private DichVuRepository dichVuRepository;

    @Override
    public List<DichVu> findAll() {
        return dichVuRepository.findAll();
    }

    @Override
    public void save(DichVu dichVu) {
        dichVuRepository.save(dichVu);
    }

    @Override
    public DichVu update(DichVu dichVu) {
        Optional<DichVu> oldDV = dichVuRepository.findById(dichVu.getMaDV());
        dichVuRepository.save(dichVu);
        return dichVu;
    }

    @Override
    public void delete(String maDV) {
        dichVuRepository.deleteById(maDV);
    }

    @Override
    public Optional<DichVu> findByMaDV(String maDV) {
        return dichVuRepository.findById(maDV);
    }

}

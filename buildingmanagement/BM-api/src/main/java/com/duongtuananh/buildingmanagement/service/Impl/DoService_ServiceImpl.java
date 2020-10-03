package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.DoService;
import com.duongtuananh.buildingmanagement.repository.DoServiceRepository;
import com.duongtuananh.buildingmanagement.service.DoService_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoService_ServiceImpl implements DoService_Service {
    @Autowired
    private DoServiceRepository doServiceRepository;

    @Override
    public List<DoService> getAllDoService() {
        return doServiceRepository.findAll();
    }

    @Override
    public void saveDoService(DoService doService) {
        doServiceRepository.save(doService);
    }

    @Override
    public void deleteDoService(Integer ID) {
        doServiceRepository.deleteById(ID);
    }
}

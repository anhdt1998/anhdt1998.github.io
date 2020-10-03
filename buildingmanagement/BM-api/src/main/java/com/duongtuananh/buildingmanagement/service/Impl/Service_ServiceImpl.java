package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.repository.ServiceRepository;
import com.duongtuananh.buildingmanagement.service.Service_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Service_ServiceImpl implements Service_Service {
    @Autowired
    private ServiceRepository serviceRepository;

    @Override
    public List<com.duongtuananh.buildingmanagement.entity.Service> getAllService() {
        return serviceRepository.findAll();
    }

    @Override
    public void saveService(com.duongtuananh.buildingmanagement.entity.Service service) {
        serviceRepository.save(service);
    }

    @Override
    public void deleteService(Integer ID) {
        serviceRepository.deleteById(ID);
    }
}

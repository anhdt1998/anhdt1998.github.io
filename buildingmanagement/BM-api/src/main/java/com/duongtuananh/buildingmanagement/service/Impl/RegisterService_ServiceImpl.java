package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.RegisterService;
import com.duongtuananh.buildingmanagement.repository.RegisterServiceRepository;
import com.duongtuananh.buildingmanagement.service.RegisterService_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisterService_ServiceImpl implements RegisterService_Service {
    @Autowired
    private RegisterServiceRepository registerServiceRepository;

    @Override
    public List<RegisterService> getAllRegisterService() {
        return registerServiceRepository.findAll();
    }

    @Override
    public void saveRegisterService(RegisterService registerService) {
        registerServiceRepository.save(registerService);
    }

    @Override
    public void deleteRegisterService(Integer ID) {
        registerServiceRepository.deleteById(ID);
    }
}

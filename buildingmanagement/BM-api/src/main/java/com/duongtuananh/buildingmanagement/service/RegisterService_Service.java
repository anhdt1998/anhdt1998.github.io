package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.RegisterService;

import java.util.List;

public interface RegisterService_Service {
    List<RegisterService> getAllRegisterService();
    void saveRegisterService(RegisterService registerService);
    void deleteRegisterService(Integer ID);
}

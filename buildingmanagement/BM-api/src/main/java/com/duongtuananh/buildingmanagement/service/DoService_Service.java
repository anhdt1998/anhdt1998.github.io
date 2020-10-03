package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.DoService;

import java.util.List;

public interface DoService_Service {
    List<DoService> getAllDoService();
    void saveDoService(DoService doService);
    void deleteDoService(Integer ID);
}

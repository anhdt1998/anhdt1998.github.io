package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.Service;

import java.util.List;

public interface Service_Service {
    List<Service> getAllService();
    void saveService(Service service);
    void deleteService(Integer ID);
}

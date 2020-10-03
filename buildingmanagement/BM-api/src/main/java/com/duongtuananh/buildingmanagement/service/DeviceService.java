package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.Device;

import java.util.List;

public interface DeviceService {
    List<Device> getAllDevice();
    void saveDevice(Device device);
    void deleteDevice(Integer ID);
}

package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.Device;
import com.duongtuananh.buildingmanagement.repository.DeviceRepository;
import com.duongtuananh.buildingmanagement.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceServiceImpl implements DeviceService {
    @Autowired
    private DeviceRepository deviceRepository;

    @Override
    public List<Device> getAllDevice() {
        return deviceRepository.findAll();
    }

    @Override
    public void saveDevice(Device device) {
        deviceRepository.save(device);
    }

    @Override
    public void deleteDevice(Integer ID) {
        deviceRepository.deleteById(ID);
    }
}

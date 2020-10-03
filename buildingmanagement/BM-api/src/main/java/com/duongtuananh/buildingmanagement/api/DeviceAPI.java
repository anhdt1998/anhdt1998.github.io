package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.Device;
import com.duongtuananh.buildingmanagement.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/device")
public class DeviceAPI {
    @Autowired
    private DeviceService deviceService;

    @GetMapping
    public List<Device> getAllDevice() {
       return deviceService.getAllDevice();
    }

    @PostMapping
    public String insertDevice(@RequestBody Device device) {
        deviceService.saveDevice(device);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateDevice(@RequestBody Device device,@PathVariable("ID") Integer ID) {
        device.setID_Device(ID);
        deviceService.saveDevice(device);
        return "Updated !";
    }
    @DeleteMapping(value = "/{ID}")
    public String deleteDevice(@PathVariable("ID") Integer ID) {
        deviceService.deleteDevice(ID);
        return "Deleted !";
    }
}

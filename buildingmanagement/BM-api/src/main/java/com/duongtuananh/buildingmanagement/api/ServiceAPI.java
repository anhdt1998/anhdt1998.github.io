package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.Service;
import com.duongtuananh.buildingmanagement.service.Service_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/service")
public class ServiceAPI {
    @Autowired
    private Service_Service service_service;

    @GetMapping
    public List<Service> getAllService() {
        return service_service.getAllService();
    }

    @PostMapping
    public String insertService(@RequestBody Service service) {
        service_service.saveService(service);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateService(@RequestBody Service service,@PathVariable("{ID}") Integer ID) {
        service.setID_Service(ID);
        service_service.saveService(service);
        return "Updated !";
    }

    @DeleteMapping(value = "/{ID}")
    public String deleteService(@PathVariable("ID") Integer ID) {
        service_service.deleteService(ID);
        return "Deleted !";
    }
}

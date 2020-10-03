package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.RegisterService;
import com.duongtuananh.buildingmanagement.service.RegisterService_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/registerservice")
public class RegisterServiceAPI {
    @Autowired
    private RegisterService_Service registerService_service;

    @GetMapping
    public List<RegisterService> getAllRegisterService() {
        return registerService_service.getAllRegisterService();
    }

    @PostMapping
    public String insertRegisterService(@RequestBody RegisterService registerService) {
        registerService_service.saveRegisterService(registerService);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateRegisterService(@RequestBody RegisterService registerService,@PathVariable("ID") Integer ID) {
        registerService.setID_Register(ID);
        registerService_service.saveRegisterService(registerService);
        return "Updated !";
    }

    @DeleteMapping(value = "/{ID}")
    public String deleteRegisterService(@PathVariable("{ID}") Integer ID) {
        registerService_service.deleteRegisterService(ID);
        return "Deleted !";
    }
}

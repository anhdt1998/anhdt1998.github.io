package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.DoService;
import com.duongtuananh.buildingmanagement.service.DoService_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/doservice")
public class DoServiceAPI {
    @Autowired
    private DoService_Service doService_service;

    @GetMapping
    public List<DoService> getAllDoService() {
        return doService_service.getAllDoService();
    }

    @PostMapping
    public String insertDoService(@RequestBody DoService doService) {
        doService_service.saveDoService(doService);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateDoService(@RequestBody DoService doService,@PathVariable("ID") Integer ID) {
        doService.setID_Do(ID);
        doService_service.saveDoService(doService);
        return "Updated !";
    }

    @DeleteMapping(value = "/{ID}")
    public String deleteDoService(@PathVariable("ID") Integer ID) {
        doService_service.deleteDoService(ID);
        return "Deleted !";
    }
}

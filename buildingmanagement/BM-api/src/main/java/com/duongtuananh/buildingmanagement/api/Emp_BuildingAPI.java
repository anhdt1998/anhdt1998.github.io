package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.Emp_Building;
import com.duongtuananh.buildingmanagement.service.Emp_BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/employeebuilding")
public class Emp_BuildingAPI {
    @Autowired
    private Emp_BuildingService emp_buildingService;

    @GetMapping
    public List<Emp_Building> getAllEmployee() {
        return emp_buildingService.getAllEmpBuilding();
    }

    @PostMapping
    public String insertEmployee(@RequestBody Emp_Building emp_building) {
        emp_buildingService.saveEmpBuilding(emp_building);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateEmployee(@RequestBody Emp_Building emp_building,@PathVariable("ID") Integer ID) {
        emp_building.setID_Emp(ID);
        emp_buildingService.saveEmpBuilding(emp_building);
        return "Updated !";
    }

    @DeleteMapping(value = "/{ID}")
    public String deleteEmployee(@PathVariable("ID") Integer ID) {
        emp_buildingService.deleteEmpBuilding(ID);
        return "Deleted !";
    }
}

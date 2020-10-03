package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.Elec_Water;
import com.duongtuananh.buildingmanagement.service.Elec_WaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/electricity-water")
public class Elect_WaterAPI {
    @Autowired
    private Elec_WaterService elec_waterService;

    @GetMapping
    public List<Elec_Water> getAllElecWater() {
        return elec_waterService.getAllElecWater();
    }

    @PostMapping
    public String insertEW(@RequestBody Elec_Water elec_water) {
        elec_waterService.saveElecWater(elec_water);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateEW(@RequestBody Elec_Water elec_water,@PathVariable("ID") Integer ID) {
        elec_water.setID(ID);
        elec_waterService.saveElecWater(elec_water);
        return "Updated !";
    }

    @DeleteMapping(value = "/{ID}")
    public String deleteEW(@PathVariable("ID") Integer ID) {
        elec_waterService.deleteElecWater(ID);
        return "Deleted !";
    }
}

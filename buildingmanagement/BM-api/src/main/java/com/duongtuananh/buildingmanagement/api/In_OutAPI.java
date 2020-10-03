package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.In_Out;
import com.duongtuananh.buildingmanagement.service.In_OutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/inout")
public class In_OutAPI {
    @Autowired
    private In_OutService in_outService;

    @GetMapping
    public List<In_Out> getAllInOut() {
        return in_outService.getAllInOut();
    }

    @PostMapping
    public String insertInOut(@RequestBody In_Out in_out) {
        in_outService.saveInOut(in_out);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateInOut(@RequestBody In_Out in_out,@PathVariable("ID") Integer ID) {
        in_out.setID_Inout(ID);
        in_outService.saveInOut(in_out);
        return "Updated !";
    }

    @DeleteMapping(value = "/{ID}")
    public String deleteInOut(@PathVariable("ID") Integer ID) {
        in_outService.deleteInOut(ID);
        return "Deleted !";
    }

}

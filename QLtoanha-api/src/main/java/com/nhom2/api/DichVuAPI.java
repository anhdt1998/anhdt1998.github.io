package com.nhom2.api;

import com.nhom2.entity.DichVu;
import com.nhom2.service.DichVuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class DichVuAPI {

    @Autowired
    private DichVuService dichVuService;

    @GetMapping(value = "/dichvu")
    public List<DichVu> displayAll(){
        return dichVuService.findAll();
    }

    @PostMapping(value = "/dichvu")
    public void insertDV(@RequestBody DichVu model) {
        dichVuService.save(model);
    }

    @PutMapping(value = "/dichvu/{maDV}")
    public DichVu updateDV(@RequestBody DichVu model,@PathVariable("maDV") String maDV){
        model.setMaDV(maDV);
        return dichVuService.update(model);
    }
    @DeleteMapping(value = "/dichvu/{maDV}")
    public String deleteDV(@PathVariable("maDV") String maDV){
        dichVuService.delete(maDV);
        return "Deleted !!!!!!!!!!!!!!!!!!!!!!";
    }

    @GetMapping(value = "/dichvu/{maDV}")
    public Optional<DichVu> getDichVuByMaDV(@PathVariable("maDV") String maDV){
        return dichVuService.findByMaDV(maDV);
    }
}

package com.nhom2.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



import com.nhom2.entity.LamDichVu;
import com.nhom2.service.LamDichVuService;

@CrossOrigin
@RestController
public class LamDichVuAPI {

	@Autowired
    private LamDichVuService lamdichvuService;

    @GetMapping(value = "/lamdichvu")
    public List<LamDichVu> displayAll(){
        return lamdichvuService.findAll();
    }

    @PostMapping(value = "/lamdichvu")
    public void insertLDV(@RequestBody LamDichVu model) {
    	lamdichvuService.save(model);
    }

    @PutMapping(value = "/lamdichvu/{maLV}")
    public LamDichVu updateDV(@RequestBody LamDichVu model,@PathVariable("maLV") String maLV){
        model.setMaDV(maLV);
        return lamdichvuService.update(model);
    }
    @DeleteMapping(value = "/lamdichvu/{maLV}")
    public String deleteDV(@PathVariable("maLV") String maLV){
    	lamdichvuService.delete(maLV);
        return "Deleted !!!!!!!!!!!!!!!!!!!!!!";
    }
    @GetMapping(value = "/lamdichvu/{maLV}")
    public Optional<LamDichVu> getLDVbyMaLV (@PathVariable("maLV") String maLV) {
        return lamdichvuService.getLDVbyMa(maLV);
    }
}

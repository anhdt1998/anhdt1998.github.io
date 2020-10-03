package com.nhom2.api;
import com.nhom2.entity.CongTyThue;
import com.nhom2.service.CongTyThueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class CongTyThueAPI {
	
    @Autowired
    private CongTyThueService congtythueService;

    @GetMapping(value = "/congtythue")
    public List<CongTyThue> displayAll(){
        return congtythueService.findAll();
    }

    @PostMapping(value = "/congtythue")
    public void insertCTThue(@RequestBody CongTyThue model) {
        congtythueService.save(model);
    }

    @PutMapping(value = "/congtythue/{maCT}")
    public CongTyThue updateCTThue(@RequestBody CongTyThue model,@PathVariable("maCT") String maCT){
        model.setMaCT(maCT);
        return congtythueService.update(model);
    }
    @DeleteMapping(value = "/congtythue/{maCT}")
    public String deleteCTThue(@PathVariable("maCT") String maCT){
        congtythueService.delete(maCT);
        return "Deleted !!!!!!!!!!!!!!!!!!!!!!";
    }

    @GetMapping(value = "/congtythue/{maCT}")
    public Optional<CongTyThue> getCTTByMaCT (@PathVariable("maCT") String maCT){
        return congtythueService.getCTTbyMaCT(maCT);
    }
}

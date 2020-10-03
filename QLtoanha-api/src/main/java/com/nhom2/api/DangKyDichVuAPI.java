package com.nhom2.api;
import com.nhom2.entity.DangKyDichVu;
import com.nhom2.service.DangKyDichVuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class DangKyDichVuAPI {
	@Autowired
   private DangKyDichVuService dangkydichvuService;

    @GetMapping( value= "/dangkydichvu")
   public List<DangKyDichVu> displayAll(){
        return dangkydichvuService.findAll();
    }

    @PostMapping(value = "/dangkydichvu")
    public void insert(@RequestBody DangKyDichVu model) {
        dangkydichvuService.save(model);
   }

    @PutMapping(value = "/dangkydichvu/{maDK}")
    public DangKyDichVu updateDKDV(@RequestBody DangKyDichVu model,@PathVariable("maDK") String maDK){
        model.setMaCT(maDK);
        return dangkydichvuService.update(model);
    }
    @DeleteMapping(value = "/dangkydichvu/{maDK}")
    public String deleteDKDV(@PathVariable("maDK") String maDK){
       dangkydichvuService.deleteDV(maDK);
      return "Deleted !!!!!!!!!!!!!!!!!!!!!!";
   }
   @GetMapping(value = "/dangkydichvu/{maDK}")
    public Optional<DangKyDichVu> getDKDVbyMaDK (@PathVariable("maDK") String maDK) {
       return dangkydichvuService.getDKDVbyMaDK(maDK);
   }
}

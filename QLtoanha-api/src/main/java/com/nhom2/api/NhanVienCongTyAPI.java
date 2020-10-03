package com.nhom2.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nhom2.entity.NhanVienCongTy;
import com.nhom2.service.NhanVienCongTyService;

@CrossOrigin
@RestController
public class NhanVienCongTyAPI {
	 @Autowired
	    private NhanVienCongTyService nhanVienCongTyService;
	 @GetMapping(value = "/nhanviencongty")
	    public List<NhanVienCongTy> displayAll(){
	        return nhanVienCongTyService.findAll();
	    }
	 @PostMapping(value = "/nhanviencongty")
	    public void insert(@RequestBody NhanVienCongTy model) {
		 nhanVienCongTyService.save(model);
	    }
	 @PutMapping(value = "/nhanviencongty/{maNV}")
		public NhanVienCongTy update(@RequestBody NhanVienCongTy model, @PathVariable("maNV") String maNV) {
			model.setMaNV(maNV);
			return nhanVienCongTyService.update(model);
		}
	 @DeleteMapping(value = "/nhanviencongty/{maNV}")
		public String deleteDV(@PathVariable("maNV") String maNV) {
		 	nhanVienCongTyService.delete(maNV);
			return "Deleted !!!!!!!!!!!!!!!!!!!!!!";
	 }
	 @GetMapping(value = "/nhanviencongty/{maNV}")
	public Optional<NhanVienCongTy> getNVCTbyMaNV (@PathVariable("maNV") String maNV){
	 	return nhanVienCongTyService.getNVCTbyMa(maNV);
	 }
}

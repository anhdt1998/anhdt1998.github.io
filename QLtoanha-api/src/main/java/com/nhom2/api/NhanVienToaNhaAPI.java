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

import com.nhom2.entity.NhanVienToaNha;
import com.nhom2.service.NhanVienToaNhaService;

@CrossOrigin
@RestController
public class NhanVienToaNhaAPI {
	@Autowired
	private NhanVienToaNhaService nhanVienToaNhaService;

	@GetMapping(value = "/nhanvientoanha")
	public List<NhanVienToaNha> displayAll() {
		return nhanVienToaNhaService.findAll();
	}

	@PostMapping(value = "/nhanvientoanha")
	public void insert(@RequestBody NhanVienToaNha model) {
		nhanVienToaNhaService.save(model);
	}

	@PutMapping(value = "/nhanvientoanha/{maNV}")
	public NhanVienToaNha update(@RequestBody NhanVienToaNha model, @PathVariable("maNV") String maNV) {
		model.setMaNV(maNV);
		return nhanVienToaNhaService.update(model);
	}

	@DeleteMapping(value = "/nhanvientoanha/{maNV}")
	public String deleteDV(@PathVariable("maNV") String maNV) {
		nhanVienToaNhaService.delete(maNV);
		return "Deleted !!!!!!!!!!!!!!!!!!!!!!";
	}
	@GetMapping(value = "/nhanvientoanha/{maNV}")
	public Optional<NhanVienToaNha> getNVTNbyMaNV (@PathVariable("maNV") String maNV) {
		return nhanVienToaNhaService.getNVTNbyMa(maNV);
	}
}

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

import com.nhom2.entity.RaVao;
import com.nhom2.service.RaVaoService;

@CrossOrigin
@RestController
public class RaVaoAPI {
	@Autowired
	private RaVaoService raVaoService;
	@GetMapping(value = "/ravao")
	public List<RaVao> displayAll() {
		return raVaoService.findAll();
	}
	@PostMapping(value = "/ravao")
	public void insert(@RequestBody RaVao model) {
		raVaoService.save(model);
	}
	@PutMapping(value = "/ravao/{maRV}")
	public RaVao update(@RequestBody RaVao model, @PathVariable("maRV") String maRV) {
		model.setMaRV(maRV);
		return raVaoService.update(model);
	}
	@DeleteMapping(value = "/ravao/{maRV}")
	public String delete(@PathVariable("maRV") String maRV) {
		raVaoService.delete(maRV);
		return "Deleted !!!!!!!!!!!!!!!!!!!!!!";
	}
	@GetMapping(value = "/ravao/{maRV}")
	public Optional<RaVao> getRVbyMaRV(@PathVariable("maRV") String maRV){
		return raVaoService.getRVbyMa(maRV);
	}
}

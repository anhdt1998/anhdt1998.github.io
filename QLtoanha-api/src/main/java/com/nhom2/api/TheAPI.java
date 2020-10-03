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

import com.nhom2.entity.The;
import com.nhom2.service.TheService;

@CrossOrigin
@RestController
public class TheAPI {
	@Autowired
	private TheService theService;
	@GetMapping(value = "/the")
	public List<The> displayAll() {
		return theService.findAll();
	}
	@PostMapping(value = "/the")
	public void insert(@RequestBody The model) {
		theService.save(model);
	}
	@PutMapping(value = "/the/{maT}")
	public The update(@RequestBody The model, @PathVariable("maT") String maT) {
		model.setMaT(maT);
		return theService.update(model);
	}
	@DeleteMapping(value = "/the/{maT}")
	public String deleteDV(@PathVariable("maT") String maT) {
		theService.delete(maT);
		return "Deleted !!!!!!!!!!!!!!!!!!!!!!";
	}
	@GetMapping(value = "the/{maT}")
	public Optional<The> getThebyMaT(@PathVariable("maT") String maT){
		return theService.getThebyMa(maT);
	}
}

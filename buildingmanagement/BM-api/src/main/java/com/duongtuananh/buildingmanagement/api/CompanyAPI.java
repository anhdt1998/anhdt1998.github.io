package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.Company;
import com.duongtuananh.buildingmanagement.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/company")
public class CompanyAPI {
    @Autowired
    private CompanyService companyService;

    @GetMapping
    public List<Company> getAllCompany() {
        return companyService.getAllCompany();
    }

    @PostMapping
    public String insertCompany(@RequestBody Company company) {
        companyService.saveCompany(company);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateCompany(@RequestBody Company company,@PathVariable("ID") Integer ID) {
        company.setID_Cpn(ID);
        companyService.saveCompany(company);
        return "Updated !";
    }

    @DeleteMapping(value = "/{ID}")
    public String deleteCompany(@PathVariable("ID") Integer ID) {
        companyService.deleteCompany(ID);
        return "Deleted !";
    }
}

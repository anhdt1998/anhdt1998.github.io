package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.Emp_Building;
import com.duongtuananh.buildingmanagement.entity.Emp_Company;
import com.duongtuananh.buildingmanagement.service.Emp_CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/employeecompany")
public class Emp_CompanyAPI {
    @Autowired
    private Emp_CompanyService emp_companyService;

    @GetMapping
    public List<Emp_Company> getAllEmployee() {
        return emp_companyService.getAllEmpCompany();
    }

    @PostMapping
    public String insertEmployee(@RequestBody Emp_Company emp_company) {
        emp_companyService.saveEmpCompany(emp_company);
        return "Inserted !";
    }

    @PutMapping(value = "/{ID}")
    public String updateEmployee(@RequestBody Emp_Company emp_company,@PathVariable("ID") Integer ID) {
        emp_company.setID_Emp(ID);
        emp_companyService.saveEmpCompany(emp_company);
        return "Updated !";
    }

    @DeleteMapping(value = "/{ID}")
    public String deleteEmployee(@PathVariable("ID") Integer ID) {
        emp_companyService.deleteEmpCompany(ID);
        return "Deleted !";
    }
}

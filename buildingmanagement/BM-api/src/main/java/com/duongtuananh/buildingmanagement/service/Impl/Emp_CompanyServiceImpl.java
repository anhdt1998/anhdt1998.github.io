package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.Emp_Company;
import com.duongtuananh.buildingmanagement.repository.Emp_CompanyRepository;
import com.duongtuananh.buildingmanagement.service.Emp_CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Emp_CompanyServiceImpl implements Emp_CompanyService {
    @Autowired
    private Emp_CompanyRepository emp_companyRepository;

    @Override
    public List<Emp_Company> getAllEmpCompany() {
        return emp_companyRepository.findAll();
    }

    @Override
    public void saveEmpCompany(Emp_Company emp_company) {
        emp_companyRepository.save(emp_company);
    }

    @Override
    public void deleteEmpCompany(Integer ID) {
        emp_companyRepository.deleteById(ID);
    }
}

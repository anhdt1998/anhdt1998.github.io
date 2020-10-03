package com.duongtuananh.buildingmanagement.service;

import com.duongtuananh.buildingmanagement.entity.Emp_Company;

import java.util.List;

public interface Emp_CompanyService {
    List<Emp_Company> getAllEmpCompany();
    void saveEmpCompany(Emp_Company emp_company);
    void deleteEmpCompany(Integer ID);
}

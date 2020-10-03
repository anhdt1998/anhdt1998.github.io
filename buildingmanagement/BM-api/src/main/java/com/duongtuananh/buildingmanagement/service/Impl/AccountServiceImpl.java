package com.duongtuananh.buildingmanagement.service.Impl;

import com.duongtuananh.buildingmanagement.entity.Accounts;
import com.duongtuananh.buildingmanagement.repository.AccountRepository;
import com.duongtuananh.buildingmanagement.service.AccountSerVice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountSerVice {
    @Autowired
    private AccountRepository accountRepository;

    @Override
    public List<Accounts> getAllAccount() {
        return accountRepository.findAll();
    }

    @Override
    public void saveAccount(Accounts accounts) {
        accountRepository.save(accounts);
    }

    @Override
    public void deleteAccount(Integer ID) {
        accountRepository.deleteById(ID);
    }
}

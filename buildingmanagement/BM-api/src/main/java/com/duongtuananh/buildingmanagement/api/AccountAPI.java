package com.duongtuananh.buildingmanagement.api;

import com.duongtuananh.buildingmanagement.entity.Accounts;
import com.duongtuananh.buildingmanagement.service.AccountSerVice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountAPI {
    @Autowired
    private AccountSerVice accountSerVice;

    @GetMapping(value = "/account")
    public List<Accounts> getAllAccount() {
        return accountSerVice.getAllAccount();
    }

    @PostMapping(value = "/account")
    public String insertAccount (@RequestBody Accounts accounts) {
        accountSerVice.saveAccount(accounts);
        return "Insert one record sucsess !";
    }

    @PutMapping(value = "/account/{ID}")
    public String updateAccount (@RequestBody Accounts accounts, @PathVariable("ID") Integer ID) {
        accounts.setID_Account(ID);
        accountSerVice.saveAccount(accounts);
        return "Update sucsess !";
    }

    @DeleteMapping(value = "/account/{ID}")
    public String deleteAccount (@PathVariable("ID") Integer ID) {
        accountSerVice.deleteAccount(ID);
        return "Delete sucsess !";
    }
}

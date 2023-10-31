package com.example.mcqprojectbackend.controller;

import com.example.mcqprojectbackend.model.Account;
import com.example.mcqprojectbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class AccountController
{
    @Autowired
    private AccountService accountService;

    @PostMapping("/login")
    public Account login(String emailId, String password)
    {
        System.out.println(emailId + " " + password);
        return accountService.getAccountByEmailIdAndPassword(emailId,password);
    }

    @PutMapping("/user/updateAccount/{id}")
    public String updateAccount(@PathVariable Long id, @RequestBody Account account)
    {
        if(account.getId() == id)
        {
            System.out.println(account);
            return accountService.updateAccount(account);
        }
        else
        {
            return "Illegal Request";
        }

    }

    @PostMapping("/user/resetPassword/{uid}")
    public String resetPassword(@PathVariable Long uid, Long id, String password, String oldPassword)
    {
        if(uid == id)
        {
            return accountService.resetPassword(id, password, oldPassword);
        }
        else
        {
            return "Illegal Request";
        }
    }

    @GetMapping("/hello")
    public String sayHello()
    {
    	return "Hello";
    }

    @PostMapping("/admin/createAccount") // TODO
    public String adminCreateAccount(@RequestBody Account account)
    {
        return accountService.createAccount(account);
    }


    @PutMapping("/admin/resetUserPassword")
    public String adminResetUserPassword(@RequestBody Account account)
    {
        return accountService.updateAccount(account);
    }
    @PutMapping("/admin/updateUserAccount")
    public String adminUpdateAccount(@RequestBody Account account)
    {
        return accountService.updateAccount(account);
    }

    @DeleteMapping("/admin/deleteAccount/{id}") // TODO
    public String adminDeleteAccount(@PathVariable Long id)
    {
        return accountService.deleteAccount(id);
    }

    @GetMapping("/admin/getAccountById/{id}")
    public Account getAccountById(@PathVariable Long id)
    {
        return accountService.getAccountById(id);
    }

    @PostMapping("/admin/searchAccount")
    public List<Account> searchAccount(Long id, String userName, String emailId, String phone, Integer minLevel, Integer maxLevel, String role)
    {
        System.out.println("[Search] id[" + id + "]userName[" + userName +"]emailId[" + emailId + "]phone[" + phone + "]minLevel[" + minLevel + "]maxLevel[" + maxLevel + "]role[" + role + "]" );
        return accountService.searchAccount(id, userName, emailId, phone, minLevel, maxLevel, role);
    }



/*
    @GetMapping("/admin/searchAccount/byRole/{role}")
    public List<Account> getAccountListByRole(@PathVariable String role)
    {
        return accountService.getAccountListByRole(role);
    }


    @GetMapping("/admin/searchAccount/byEmail/{email}") // TODO
    public List<Account> getAccountByEmailId(@PathVariable String email)
    {
        return null;
    }
    @GetMapping("/admin/searchAccount/byPhone/{phone}") // TODO
    public List<Account> getAccountByPhone(@PathVariable String phone)
    {
        return null;
    }

    @GetMapping("/admin/searchAccount/byLevel/{level}") // TODO
    public List<Account> getAccountListByLevel(@PathVariable Integer level)
    {
        return null;
    }
*/


}

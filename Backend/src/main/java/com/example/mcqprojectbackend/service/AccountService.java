package com.example.mcqprojectbackend.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.example.mcqprojectbackend.dao.AccountRepository;
import com.example.mcqprojectbackend.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class AccountService
{
    @Autowired
    private AccountRepository accountRepository;

    @Transactional
    public Account getAccountById(Long id)
    {
        Optional<Account> optionalAccount = accountRepository.findById(id);
        if(optionalAccount.isEmpty())
        {
            return null;
        }
        else
        {
            return optionalAccount.get();
        }
    }

    @Transactional
    public Account getAccountByEmailIdAndPassword(String emailId, String password)
    {
        List<Account> accountList = accountRepository.findByEmailIdAndPassword(emailId,password);
        if(accountList.size() != 1)
        {
            return null;
        }
        else
        {
            return accountList.get(0);
        }
    }


    @Transactional
    public String createAccount(Account account)
    {
        SimpleDateFormat sdf = new SimpleDateFormat();
        sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        account.setCreateTime(sdf.format(date));
        account.setUpdateTime(sdf.format(date));
        Account newAccount = accountRepository.save(account);
        if(newAccount.getId() > 0)
        {
            return "success";
        }
        else
        {
            return "DataBase Error";
        }
    }

    @Transactional
    public String updateAccount(Account account)
    {
        Optional<Account> optionalAccount = accountRepository.findById(account.getId());
        if(optionalAccount.isEmpty())
        {
            return "Account Does Not Exist";
        }
        else
        {
            Account tmpAccount = optionalAccount.get();
            tmpAccount.update(account);
            SimpleDateFormat sdf = new SimpleDateFormat();
            sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
            Date date = new Date();
            tmpAccount.setUpdateTime(sdf.format(date));
            accountRepository.save(tmpAccount);
            return "success";
        }
    }

    @Transactional
    public String resetPassword(Long id, String password, String oldPassword)
    {
        Optional<Account> optionalAccount = accountRepository.findById(id);
        if(optionalAccount.isEmpty())
        {
            return "Account Does Not Exist";
        }
        else
        {
            Account tmpAccount = optionalAccount.get();
            if(tmpAccount.getPassword().equals(oldPassword))
            {
                SimpleDateFormat sdf = new SimpleDateFormat();
                sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
                Date date = new Date();
                tmpAccount.setPassword(password);
                tmpAccount.setUpdateTime(sdf.format(date));
                accountRepository.save(tmpAccount);
                return "success";
            }
            else
            {
                return "Your Original Password Is Not Correct";
            }
        }
    }

    @Transactional
    public String deleteAccount(@PathVariable Long id)
    {
        Optional<Account> optionalAccount = accountRepository.findById(id);
        if(optionalAccount.isEmpty())
        {
            return "Account has been Deleted";
        }
        else
        {
            accountRepository.delete(optionalAccount.get());
            return "success";
        }
    }

    @Transactional
    public List<Account> searchAccount(Long id, String userName, String emailId, String phone, Integer minLevel, Integer maxLevel, String role)
    {
        return accountRepository.searchAccount(id, userName, emailId, phone, minLevel, maxLevel, role);
    }
}

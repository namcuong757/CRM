package com.example.mcqprojectbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "account_table")
public class Account
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "user_name")
    private String userName;
    @Column(name = "email_id")
    private String emailId;
    @Column(name = "phone")
    private String phone;
    @Column(name = "password")
    private String password;
    @Column(name = "level")
    private Integer level;
    @Column(name = "role")
    private String role;
    @Column(name = "create_time")
    private String createTime;
    @Column(name = "update_time")
    private String updateTime;

    public Account()
    {
    }

    public Account(Long id, String userName, String emailId, String phone, String password, Integer level, String role, String createTime, String updateTime) {
        this.id = id;
        this.userName = userName;
        this.emailId = emailId;
        this.phone = phone;
        this.password = password;
        this.level = level;
        this.role = role;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", emailId='" + emailId + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                ", level=" + level +
                ", role='" + role + '\'' +
                '}';
    }

    public void update(Account account)//TODO
    {
        if(account.getUserName() != null)
        {
            this.userName = account.getUserName();
        }
        if(account.getEmailId()!=null)
        {
            this.emailId = account.getEmailId();
        }
        if(account.getPhone()!=null)
        {
            this.phone = account.getPhone();
        }
        if(account.getPassword()!=null)
        {
            this.password = account.getPassword();
        }
        if(account.getLevel()!=null)
        {
            this.level = account.getLevel();
        }
    }
}

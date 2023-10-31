package com.example.mcqprojectbackend.dao;

import com.example.mcqprojectbackend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long>
{
    /*
    Long id;
    String userName;
    String emailId;
    String phone;
    String password;
    Integer level;
    String type;
    */

    Optional<Account> findById(Long id);
    List<Account>     findByEmailIdAndPassword(String emailId, String password); // For LogIn

    @Query(value = "select * from account_table where if(?1 != -1, id=?1,1=1) and if(IFNULL(?2,'') !='', user_name Like CONCAT('%',?2,'%') ,1=1) and if(IFNULL(?3,'') !='',email_id=?3,1=1)  and if(IFNULL(?4,'') !='',phone=?4,1=1)  and if(?5 != -1 , level>=?5,1=1) and if(?6 != -1 , level<=?6, 1=1) and if(IFNULL(?7,'') !='',role=?7,1=1)",nativeQuery = true)
    List<Account>     searchAccount(Long id, String userName, String emailId, String phone, Integer minLevel, Integer maxLevel, String role);
}

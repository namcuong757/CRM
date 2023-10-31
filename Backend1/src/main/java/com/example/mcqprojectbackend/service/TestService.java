package com.example.mcqprojectbackend.service;

import com.example.mcqprojectbackend.dao.TestRepository;
import com.example.mcqprojectbackend.model.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TestService
{
    @Autowired
    TestRepository testRepository;

    @Transactional
    public List<Test> getAllTest()
    {
        return testRepository.findAll();
    }

    @Transactional
    public Test getTestById(Long id)
    {
        Optional<Test> optionalTest = testRepository.findById(id);
        if(optionalTest.isEmpty())
        {
            return null;
        }
        return optionalTest.get();
    }

    @Transactional
    public List<Test> getTestByQuestionId(Long id)
    {
        return testRepository.getTestByQuestionId(id);
    }

    @Transactional
    public List<Test> getTestWithoutQuestionId(Long id)
    {
        return testRepository.getTestWithoutQuestionId(id);
    }

    @Transactional
    public Test addNewTopic(Test test)
    {
        SimpleDateFormat sdf = new SimpleDateFormat();
        sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        test.setCreateTime(sdf.format(date));
        test.setUpdateTime(sdf.format(date));
        Test t = testRepository.save(test);
        return t;
    }

    @Transactional
    public String updateTest(Test test)
    {

        Optional<Test> optionalTest = testRepository.findById(test.getId());
        Test tmp = optionalTest.get();
        if(tmp == null)
        {
            return "Test Does Not Exist";
        }
        else
        {
            tmp.update(test);
            SimpleDateFormat sdf = new SimpleDateFormat();
            sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
            Date date = new Date();
            test.setUpdateTime(sdf.format(date));
            testRepository.save(tmp);
            return "success";
        }
    }

    @Transactional
    public String deleteTestById(Long id)
    {
        Optional<Test> optionalTopic = testRepository.findById(id);
        Test tmp = optionalTopic.get();
        if(tmp == null)
        {
            return "Topic Has Already Deleted";
        }
        else
        {
            testRepository.delete(tmp);
            return "success";
        }
    }

}

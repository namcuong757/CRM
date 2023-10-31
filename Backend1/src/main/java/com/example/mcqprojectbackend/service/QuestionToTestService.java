package com.example.mcqprojectbackend.service;

import com.example.mcqprojectbackend.dao.QuestionToTestRepository;
import com.example.mcqprojectbackend.model.QuestionToTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class QuestionToTestService
{
    @Autowired
    private QuestionToTestRepository questionToTestRepository;
    @Transactional
    public String deleteByQuestionIdAndTestId(Long qid, Long tid)
    {
        Optional<QuestionToTest> optionalQuestionToTest
                = this.questionToTestRepository.findByQuestionIdAndTestId(qid,tid);
        if(optionalQuestionToTest.isEmpty())
        {
            return "Record has been removed";
        }
        else
        {
            this.questionToTestRepository.delete(optionalQuestionToTest.get());
            return "success";
        }
    }

    @Transactional
    public QuestionToTest getByQuestionIdAndTestId(Long qid, Long tid)
    {
        Optional<QuestionToTest> optionalQuestionToTest
                = this.questionToTestRepository.findByQuestionIdAndTestId(qid,tid);
        if(optionalQuestionToTest.isEmpty())
        {
            return null;
        }
        else
        {
            return optionalQuestionToTest.get();
        }
    }
}

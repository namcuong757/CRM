package com.example.mcqprojectbackend.service;

import com.example.mcqprojectbackend.dao.QuestionRepository;
import com.example.mcqprojectbackend.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService
{
    @Autowired
    QuestionRepository questionRepository;

    @Transactional
    public List<Question> getAllQuestion()
    {
        return questionRepository.findAll();
    }

    @Transactional
    public Question addNewQuestion(Question question)
    {
        SimpleDateFormat sdf = new SimpleDateFormat();
        sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        question.setCreateTime(sdf.format(date));
        question.setUpdateTime(sdf.format(date));
        return questionRepository.save(question);
    }

    @Transactional
    public String updateQuestion(Question question)
    {

        Optional<Question> optionalTopic = questionRepository.findById(question.getId());
        if(optionalTopic.isEmpty())
        {
            return "Question Does Not Exist";
        }
        else
        {
            Question tmp = optionalTopic.get();
            tmp.update(question);
            SimpleDateFormat sdf = new SimpleDateFormat();
            sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
            Date date = new Date();
            question.setUpdateTime(sdf.format(date));
            questionRepository.save(tmp);
            return "success";
        }
    }

    @Transactional
    public String deleteQuestionById(Long id)
    {
        Optional<Question> optionalTopic = questionRepository.findById(id);
        if(optionalTopic.isEmpty())
        {
            return "Question Has Already Deleted";
        }
        else
        {
            questionRepository.delete(optionalTopic.get());
            return "success";
        }
    }

    @Transactional
    public List<Question> getQuestionByTestId(Long id)
    {
        return questionRepository.getQuestionByTestId(id);
    }

    @Transactional
    public List<Question> getQuestionListByTestIdWithoutAnswer(Long id)
    {
        List<Question> t = questionRepository.getQuestionByTestId(id);
        t.stream().forEach(e-> e.setAnswer(""));
        return t;
    }
}

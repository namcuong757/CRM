package com.example.mcqprojectbackend.service;

import com.example.mcqprojectbackend.dao.TopicRepository;
import com.example.mcqprojectbackend.model.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TopicService
{
    @Autowired
    TopicRepository topicRepository;

    @Transactional
    public List<Topic> getAllTopic()
    {
        return topicRepository.findAll();
    }

    @Transactional
    public String addNewTopic(Topic topic)
    {
        SimpleDateFormat sdf = new SimpleDateFormat();
        sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        topic.setCreateTime(sdf.format(date));
        topic.setUpdateTime(sdf.format(date));
        Topic t = topicRepository.save(topic);
        if(t.getId() > 0)
        {
            return "success";
        }
        else
        {
            return "failed";
        }
    }

    @Transactional
    public String updateTopic(Topic topic)
    {

        Optional<Topic> optionalTopic = topicRepository.findById(topic.getId());
        Topic tmp = optionalTopic.get();
        if(tmp == null)
        {
            return "Topic Does Not Exist";
        }
        else
        {
            tmp.update(topic);
            SimpleDateFormat sdf = new SimpleDateFormat();
            sdf.applyPattern("yyyy-MM-dd HH:mm:ss");
            Date date = new Date();
            topic.setUpdateTime(sdf.format(date));
            topicRepository.save(tmp);
            return "success";
        }
    }

    @Transactional
    public String deleteTopicById(Long id)
    {
        Optional<Topic> optionalTopic = topicRepository.findById(id);
        Topic tmp = optionalTopic.get();
        if(tmp == null)
        {
            return "Topic Has Already Deleted";
        }
        else
        {
            topicRepository.delete(tmp);
            return "success";
        }
    }

}

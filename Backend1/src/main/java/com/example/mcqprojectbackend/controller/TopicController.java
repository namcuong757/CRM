package com.example.mcqprojectbackend.controller;

import com.example.mcqprojectbackend.model.Topic;
import com.example.mcqprojectbackend.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/admin/")
public class TopicController
{
    @Autowired
    TopicService topicService;

    @GetMapping("/getAllTopic")
    public List<Topic> getAllTopic()
    {
        return topicService.getAllTopic();
    }

    @PostMapping("/addNewTopic")
    public String addNewTopic(@RequestBody Topic topic)
    {
        return topicService.addNewTopic(topic);
    }

    @PutMapping("/uptateTopic/{id}")
    public String updateTopic(@PathVariable Long id, @RequestBody Topic topic)
    {
        if(id == topic.getId())
        {
            return topicService.updateTopic(topic);
        }
        else
        {
            return "Illegal Request";
        }
    }

    @DeleteMapping("/deleteTopicById/{id}")
    public String deleteTopic(@PathVariable Long id)
    {
        return topicService.deleteTopicById(id);
    }
}

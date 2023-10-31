package com.example.mcqprojectbackend.model;


import javax.persistence.*;

@Entity
@Table(name = "topic_table")
public class Topic
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "topic")
    private String topic;
    @Column(name = "description")
    private String description;
    @Column(name = "createTime")
    private String createTime;
    @Column(name = "updateTime")
    private String updateTime;

    public Topic() {
    }

    public Topic(Long id, String topic, String description, String createTime, String updateTime) {
        this.id = id;
        this.topic = topic;
        this.description = description;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
    public void update(Topic topic)
    {
        if(topic.getTopic() != null)
        {
            this.topic = topic.getTopic();
        }

        if(topic.getDescription() != null)
        {
            this.description = topic.getDescription();
        }
    }

    @Override
    public String toString() {
        return "Topic{" +
                "topic='" + topic + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}

package com.example.mcqprojectbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "question_to_tast_table")
public class QuestionToTest
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long id;

    @Column(name = "question_id")
    Long questionId;

    @Column(name = "test_id")
    Long testId;
}

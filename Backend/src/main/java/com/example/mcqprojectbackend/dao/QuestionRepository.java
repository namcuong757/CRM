package com.example.mcqprojectbackend.dao;

import com.example.mcqprojectbackend.model.Account;
import com.example.mcqprojectbackend.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long>
{
    Optional<Question> findById(Long id);

    // SELECT * FROM question_table q, question_to_tast_table qt WHERE q.id = qt.question_id AND qt.test_id = 4;
    // SELECT q.id, q.question, q.style, q.body, q.answer, q.correct, q.wrong, q.point, q.create_time, q.update_time FROM question_table q, question_to_tast_table qt WHERE q.id = qt.question_id AND qt.test_id = 4;


    @Query(value = "select q.id, q.question, q.style, q.body, q.answer, q.correct, q.wrong, q.point, q.create_time, q.update_time FROM question_table q, question_to_tast_table qt where q.id = qt.question_id AND qt.test_id = ?1",nativeQuery = true)
    List<Question>  getQuestionByTestId(Long id);



}

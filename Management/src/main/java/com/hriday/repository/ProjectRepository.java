package com.hriday.repository;

import com.hriday.modal.Project;
import com.hriday.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project,Long> {

 //   List<Project> findByOwner(User user);

    List<Project> findByNameContainingAndTeamContaining(String partialName,User user);

//    @Query("SELECT p From Project p join p.team t where t=:user")
//    List<Project> findProjectByteam(@Param("user") User user);

    List<Project> findByTeamContainingOrOwner(User user,User owner);


}

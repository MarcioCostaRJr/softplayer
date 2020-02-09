/**
 * 
 */
package com.softplayer.projectapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.softplayer.projectapi.model.Person;

/**
 * @author local-personal
 *
 */
@Repository
public interface PersonRepository extends JpaRepository<Person, Long>{
	
	boolean existsByCpf(String cpf);
	
	Person findByName(String name);

}

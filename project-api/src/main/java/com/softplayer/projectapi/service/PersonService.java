/**
 * 
 */
package com.softplayer.projectapi.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.softplayer.projectapi.model.Person;
import com.softplayer.projectapi.repository.PersonRepository;

/**
 * @author local-personal
 *
 */
@Service
public class PersonService {
	
	private PersonRepository repository;

	public PersonService(PersonRepository repository) {
		this.repository = repository;
	}
	
	public List<?> listAll() {
		return this.repository.findAll();
	}
	
	public Optional<Person> findById(@PathVariable long id) {
		return repository.findById(id);
	}
	
	public Person save(Person person) {
		infoAditional(person);
		return repository.save(person);
	}
	
	public void deleteById(Long id) {
		repository.deleteById(id);
	}
	
	private void infoAditional(Person person) {
		LocalDateTime dateTime = LocalDateTime.now();
		if (person.getId() == null) {
			person.setDateRegister(dateTime);
		} else {
			person.setDateRegisterUpdate(dateTime);
		}
	}

}

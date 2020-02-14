/**
 * 
 */
package com.softplayer.projectapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softplayer.projectapi.controller.validator.PersonValidator;
import com.softplayer.projectapi.model.Person;
import com.softplayer.projectapi.service.PersonService;

/**
 * @author local-personal
 *	
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping({"/persons"})
public class PersonController {

	private PersonService personService;
	private PersonValidator personValidator;
	
	public PersonController(PersonService personService, PersonValidator personValidator) {
		this.personService = personService;
		this.personValidator = personValidator;
	}
	
	@GetMapping
	public List<?> findAll() {
		return personService.listAll();
	}
	
	@GetMapping(path = {"/{id}"})
	public ResponseEntity<?> findById(@PathVariable long id){
		return personService.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public Object create(@RequestBody Person person){
		personValidator.validatePerson(person);
		return personService.save(person);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Person person){
		return personService.findById(id)
				.map(record -> {
					record.setName(person.getName());
					record.setGender(person.getGender());
					record.setEmail(person.getEmail());
					record.setDateBorn(person.getDateBorn());
					record.setNaturalness(person.getNaturalness());
					record.setNationality(person.getNationality());
					record.setCpf(person.getCpf());
					personValidator.validatePerson(record);
					Person updated = personService.save(record);
					return ResponseEntity.ok().body(updated);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping(path = {"/{id}"})
	public ResponseEntity<?> delete(@PathVariable long id){
		return personService.findById(id)
				.map(record -> {
					personService.deleteById(id);
					return ResponseEntity.ok().build();
				}).orElse(ResponseEntity.notFound().build());
	}
}

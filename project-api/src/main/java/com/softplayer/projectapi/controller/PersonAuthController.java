/**
 * 
 */
package com.softplayer.projectapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softplayer.projectapi.model.Person;

/**
 * @author local-personal
 *
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping({"/*"})
public class PersonAuthController {

	@GetMapping(path = "/auth")
	public Person authentication() {
		return new Person();
	}
}

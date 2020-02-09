/**
 * 
 */
package com.softplayer.projectapi.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.softplayer.projectapi.model.Person;
import com.softplayer.projectapi.repository.PersonRepository;

/**
 * @author local-personal
 *
 */
public class CustomPersonDetailsService implements UserDetailsService{

	private PersonRepository repository;
	
	public CustomPersonDetailsService(PersonRepository repository) {
		this.repository = repository;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Person person = repository.findByName(username);
		return null;
	}

}

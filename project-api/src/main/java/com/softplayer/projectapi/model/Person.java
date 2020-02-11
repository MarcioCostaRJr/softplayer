/**
 * 
 */
package com.softplayer.projectapi.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Class for model of person
 * 
 * @author local-personal
 *
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Person {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	private String name;
	private Integer gender;
	private String email;
	
	@NotNull
	private LocalDate dateBorn;
	private String naturalness;
	private String nationality;
	
	@NotNull
	private String cpf;
	private LocalDateTime dateRegister;
	private LocalDateTime dateRegisterUpdate;

}

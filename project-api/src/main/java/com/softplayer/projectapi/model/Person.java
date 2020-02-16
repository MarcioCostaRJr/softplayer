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

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;

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
	private String gender;
	private String email;
	
	@NotNull
	private LocalDate dateBorn;
	private String naturalness;
	private String nationality;

	private String cpf;
	
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@JsonFormat(pattern="yyyy-MM-dd hh:mm")
	private LocalDateTime dateRegister;
	
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@JsonFormat(pattern="yyyy-MM-dd hh:mm")
	private LocalDateTime dateRegisterUpdate;

}

/**
 * 
 */
package com.softplayer.projectapi.errors;

/**
 * @author local-personal
 *
 */
public enum ErrorValidation {

	EMAIL_INVALIDO(1, "E-mail invalid"),
	
	CPF_INVALID(2, "CPF invalid"),
	
	CPF_DUPLICATE(3, "CPF duplicate");

	private int id;
	private String description;

	ErrorValidation(int i, String value) {
		this.id = i;
		this.description = value;
	}

	public int getId(){
		return this.id;
	}

	public String getDescription() {
		return this.description;
	}
}

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

	ErrorValidation(int i, String string) {	
	}
		
}

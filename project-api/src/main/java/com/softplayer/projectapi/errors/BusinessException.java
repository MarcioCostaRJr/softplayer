package com.softplayer.projectapi.errors;


import lombok.Getter;

import java.util.List;

public class BusinessException extends RuntimeException {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Getter
    private List<ErrorValidation> listError;

    public BusinessException(List<ErrorValidation> listE) {
        this.listError = listE;
    }
}

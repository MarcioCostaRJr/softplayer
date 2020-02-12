package com.softplayer.projectapi.controller.exception;

import com.softplayer.projectapi.errors.BusinessException;
import com.softplayer.projectapi.errors.ErrorValidation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class BusinessExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<?> validation(BusinessException busiException, HttpServletRequest request) {
        List<String> listDescriptionException = new ArrayList<String>();
        for (ErrorValidation error : busiException.getListError()) {
            listDescriptionException.add(error.getDescription());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(listDescriptionException);
    }
}

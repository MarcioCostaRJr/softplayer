package com.softplayer.projectapi.controller.validator;

import br.com.caelum.stella.validation.CPFValidator;
import com.softplayer.projectapi.errors.BusinessException;
import com.softplayer.projectapi.errors.ErrorValidation;
import com.softplayer.projectapi.model.Person;
import com.softplayer.projectapi.repository.PersonRepository;
import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.util.ArrayList;
import java.util.List;

@Component
public class PersonValidator {

    private PersonRepository personRepository;

    PersonValidator(PersonRepository personRepository){
        this.personRepository = personRepository;
    }

    public void validatePerson(Person person){
        List<ErrorValidation> listE = new ArrayList<>();
        validateAddress(person, listE);
        validateCPF(person, listE);
        if (!CollectionUtils.isEmpty(listE)){
            throw new BusinessException(listE);
        }
    }

    private boolean isExistsCpf(String cpf) {
        return personRepository.existsByCpf(cpf);
    }

    private void validateCPF(Person person, List<ErrorValidation> listError) {
        boolean isValidCpf = true;
        try {
            new CPFValidator().assertValid(person.getCpf());
        } catch (Exception e) {
            isValidCpf = false;
            listError.add(ErrorValidation.CPF_INVALID);
        }
        if (isValidCpf && person.getId() == null && isExistsCpf(person.getCpf())) {
            listError.add(ErrorValidation.CPF_DUPLICATE);
        }
    }

    private void validateAddress(Person person, List<ErrorValidation> listError) {
        if (Strings.isNotEmpty(person.getEmail())){
            try {
                InternetAddress emAddress = new InternetAddress(person.getEmail());
                emAddress.validate();
            } catch (AddressException ae) {
                listError.add(ErrorValidation.EMAIL_INVALIDO);
            }
        }

    }
}

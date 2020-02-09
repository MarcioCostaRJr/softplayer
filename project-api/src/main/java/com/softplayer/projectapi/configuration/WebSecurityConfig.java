/**
 * 
 */
package com.softplayer.projectapi.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.softplayer.projectapi.service.CustomPersonDetailsService;

/**
 * @author local-personal
 *
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
//	
//	private CustomPersonDetailsService customPersonDetailsService;
//	
//	public WebSecurityConfig(CustomPersonDetailsService customPersonDetailsService) {
//		this.customPersonDetailsService = customPersonDetailsService;
//	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
			.authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**")
			.permitAll().anyRequest().authenticated()
			.and().httpBasic();
	}
	
//	@Bean("authenticationManager")	
//    @Override
//    public AuthenticationManager authenticationManagerBean() throws Exception {
//        return super.authenticationManagerBean();
//    }
//	
//	@Override
//	public void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.authenticationProvider(authenticationProvider());
//	}
//	
//	@Bean
//	public DaoAuthenticationProvider authenticationProvider() {
//		DaoAuthenticationProvider auProvider = new DaoAuthenticationProvider();
//		auProvider.setUserDetailsService(customPersonDetailsService);
//		auProvider.setPasswordEncoder(bCryptPasswordEncoder());
//		return auProvider;
//	}
//	
//	@Bean
//	public BCryptPasswordEncoder bCryptPasswordEncoder() {
//      return new BCryptPasswordEncoder();
//	}
}

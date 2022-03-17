package com.yasol123.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		//String encodedString = encoder.encode("1234rt");
		for (int i=1; i<=10;i++) {
			String encodedString = encoder.encode("1234rt");
			System.out.println(encodedString);
		}
	}

}

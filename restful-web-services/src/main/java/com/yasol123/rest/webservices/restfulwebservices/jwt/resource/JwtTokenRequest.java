package com.yasol123.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

//    {
//    	"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY0MjE3Nzk5MywiaWF0IjoxNjQxNTczMTkzfQ.0OfALxk-lDOJr0rxIzikNrmAaN3eQ3SXkCNk-0RxuaHvRwL73ogdNAX8H_Of5fk90AJxyUidAWdz-eGtCkNh5Q"
//    }
    //eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY0MjE3Nzk5MywiaWF0IjoxNjQxNTczMTkzfQ.0OfALxk-lDOJr0rxIzikNrmAaN3eQ3SXkCNk-0RxuaHvRwL73ogdNAX8H_Of5fk90AJxyUidAWdz-eGtCkNh5Q
    
    //yasol123
    /*
     * { "token":"{
"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5YXNvbDEyMyIsImV4cCI6MTY0MjE4NzYzMSwiaWF0IjoxNjQxNTgyODMxfQ.PWnrnEN5B2cNmXkqAoYHqTpVA-jwjb2bo660l0H8kFCNZy5WJRHVEiIeXnnGJcqtqWhJVfuyozqBhP1-01lisA"
}
     //eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5YXNvbDEyMyIsImV4cCI6MTY0MjE4NzYzMSwiaWF0IjoxNjQxNTgyODMxfQ.PWnrnEN5B2cNmXkqAoYHqTpVA-jwjb2bo660l0H8kFCNZy5WJRHVEiIeXnnGJcqtqWhJVfuyozqBhP1-01lisA
     */
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}


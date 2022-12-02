
import Auth from '../pageObjects/Auth.page';
import { user1  } from '../fixtures/users';

const auth = new Auth();

// Login Page

describe ('Login Page', function(){

    beforeEach(function(){
        browser.url('./login');
    })

    // Login works with correct username and password
    it('should let you login', function(){
        auth.login(user1);
        
        expect(auth.$errorMessages).not.toBeExisting();
    })

    // Login fails with incorrect username
    it('should fail without password', function(){
       auth.login({
        email: '',
        password: user1.password
       });

       expect(auth.$errorMessages).toHaveText('Email can\'t be blank');
    })

    // Login fails with incorrect password
    it('should fail without username', function(){
       auth.login({
        email: user1.email,
        password:''
       });

       expect(auth.$errorMessages).toHaveText('Password can\'t be blank');
    })
})








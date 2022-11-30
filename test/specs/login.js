
import Auth from '../../pageObjects/Auth.page';

const auth = new Auth();

function login(username, password){
    auth.$email.setValue(username);
    auth.$password.setValue(password);
    auth.$signIn.click();
}
// Login Page

describe ('Login Page', function(){

    beforeEach(function(){
        browser.url('./login');
    })

    // Login works with correct username and password
    it('should let you login', function(){
        auth.login('demo@learnwebdriver.com','wdiodemo');
        auth.$signIn.waitForExist({reverse : true});
        expect(auth.$errorMessages).not.toBeExisting();
    })

    // Login fails with incorrect username
    it('should fail without password', function(){
       auth.login('','wdiodemo');
       expect(auth.$errorMessages).toHaveText('Email can\'t be blank');
    })

    // Login fails with incorrect password
    it('should fail without username', function(){
       auth.login('demo@learnwebdriver.com','');
       expect(auth.$errorMessages).toHaveText('Password can\'t be blank');
    })
})








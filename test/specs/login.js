
class Auth{
    get $email () { return $('input[type="email"]') }
    get $password () { return $('input[type="password"]') }
    get $signIn () { return $('button*=Sign in') }
    get $errorMessages () { return $('.error-messages li')}
}

const auth = new Auth();


function login(username, password){
    auth.$email.setValue(email);
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
        login('demo@learnwebdriver.com','wdiodemo');
        auth.$signIn.waitForExist({reverse : true});
        expect(auth.$errorMessages).not.toBeExisting();
    })

    // Login fails with incorrect username
    it('should fail without password', function(){
       login('','wdiodemo');
       expect(auth.$errorMessages).toHaveText('Email can\'t be blank');
    })

    // Login fails with incorrect password
    it('should fail without username', function(){
       login('demo@learnwebdriver.com','');
       expect(auth.$errorMessages).toHaveText('Password can\'t be blank');
    })
})








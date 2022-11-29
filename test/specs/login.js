// Login Page

describe ('Login Page', function(){

    it('should let you login', function(){

        $('input[type="email"]').setValue('demo@learnwebdriver.io');
        $('input[type="password"]').setValue('wdiodemo');
        $('button=Sign in').click();

        // expect($('.error-messages li')).not.toBeExisting();

        $('=Settings').waitForExist();
        expect(browser.getUrl()).not.toContain('/login');
    })
})

// Login works with correct username and password

// Login fails with incorrect username

// Login fails with incorrect password



class Auth{
    get $email () { return $('input[type="email"]') }
    get $password () { return $('input[type="password"]') }
    get $signIn () { return $('button*=Sign in') }
    get $errorMessages () { return $('.error-messages li')}

    login(username,password) {
        this.$email.setValue(username);
        this.$password.setValue(password);
        this.$signIn.click();

        browser.waitUnti(
            () => {
                const signinExists = this.$signIn.isExisting();
                const errorExists = this.$errorMessages.isExisting();
            
                return !signinExists || errorExists;
            },
            {
                timeoutMsg:
                'The Sign in button still exists and error never appeared'
            }
        )
    }
}

export default Auth();
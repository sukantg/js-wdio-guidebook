import Home from '../pageObjects/Home.page.js';
import Auth from '../pageObjects/Auth.page';

const home = new Home();
const auth = new Auth();

describe('Anonymous user',function(){
    before(function(){
        home.load();
     })
        it('should load properly',function(){
            expect(home.$siteHeader).toBeExisting();
            expect(home.$siteFooter).toBeExisting();
            expect(home.$siteNav).toBeExisting();
        })

        it('should show global feed tab',function(){
            expect(home.$feedTabsText).toEqual('Global feed');
        })
})

describe('Logged in user',function(){
    before(function(){
        auth.load();
        auth.login(user1);
        home.load();
    });

    if('should show both tabs',function(){
        expect(home.$feedTabsText).toEqual('Your feed','Gloabl feed');
    });

    after(function(){
        auth.clearSession();
    });
    
})
import { user1 } from './../fixtures/users';
import Editor from './../pageObjects/Editor.page';
import Auth from './../pageObjects/Auth.page'
import { Chance } from 'chance';


const editor = new Editor();
const auth = new Auth()
const chance = new Chance();

describe('Post editor', function(){
    before(function(){
        browser.url('./login');
        auth.login(user1.email,user1.password);
    });

    beforeEach(function(){
        editor.load();
    })

    it('should function properly',function(){
        expect(browser).toHaveUrl(editor.url.href);
        expect(editor.$title).toBeExisting();
        expect(editor.$description).toBeExisting();
        expect(editor.$body).toBeExisting();
        expect(editor.$tags).toBeExisting();
        expect(editor.$publish).toBeExisting();         
    })

    it('should let you publish an article', function(){

        const articleDetails = {
            title: chance.sentence({words : 3}),
            description: chance.sentence({ words : 7}),
            body: chance.paragraph({ words : 4}),
            tags: [chance.word(),chance.word()]
        }
        
        editor.submitArticle(articleDetails);

        expect(browser).toHaveUrl('articles/test-title', {containing:true});
        $('button=*Delete Article').click();
    })
})
import { user1 } from './../fixtures/users';
import Editor from './../pageObjects/Editor.page';
import Auth from './../pageObjects/Auth.page'
import Article from './../pageObjects/Article.page'



const editor = new Editor();
const auth = new Auth()

const article = new Article();

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
            tags: [global.chance.word(),global.chance.word()]
        }

        editor.submitArticle(articleDetails);

        expect(browser).toHaveUrl('articles/test-title', {containing:true});
        expect(article.$title).toHaveText(articleDetails.title);
        expect(article.$body).toHaveText(articleDetails.body);
        expect(article.tags).toEqual(articleDetails.tags);
        article.$delete.click();

    })


describe('Unsaved changes alert', function(){
    beforeEach(function(){
        editor.$title.setValue('Unsaved CHange')
    });

    it('should alert you when browser navigates away',function(){
        browser.refresh();
        expect(() => browser.acceptAlert()).not.toThrow();
    });

    it('should warn when attempting to change url', function(){
        $('=home').click();
        const alertText = browser.getAlertText();
        expect(alertText).toEqual('Do you really want to leave? you have unsaved changes');
        browser.acceptAlert();
    })
})    
})
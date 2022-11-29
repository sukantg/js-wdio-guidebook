// Pre-Conditions : Set up a local app via docker

// - Install docker : https://docs.docker.com/get-docker/
// - Create a folder 'docker-files'
// - Create a file inside 'docker-compose.yml'
// - Add code for Real World App : 
// https://gist.githubusercontent.com/klamping/669d63c7f7f712b27bcfc611b22ec41c/raw/936e2b9cb3d7b668d66e6531e1674736c805da46/docker-compose.yml
// - Run ~ docker-compose up


const { strictEqual } = require('assert');
const assert = require('assert');

describe('Homepage', function() {
    it('should load properly', function() { 

    // load the page
    browser.url('./');

    // Get the title of the homepage, should be 'Conduit'

    // if (browser.getTitle() != 'Conduit'){
    //     throw new Error('Title of the homepage should be Conduit');
    // }

    // assert(strictEqual(browser.getTitle(),'Conduit'));

    expect(browser.getUrl()).toHaveTitle('Conduit');


    // Click the 'Sign in' navigation link
    $('=Sign in').click();

    // if (browser.getUrl() != 'http://localhost:8080/login'){
    //     throw new Error('URL of login page should be correct');
    // }

    expect(browser.getUrl()).toEqual('http://localhost:8080/login');

    // Get the URL of the sign in page. It should include 'login'
    console.log(browser.getUrl());

    });

});
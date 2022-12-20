import url from URL;


class Generic {
    constructor(path) {
        this.path = path;
        this.url = new URL(path,browser.config.baseUrl);
    }
    
    load() {
        browser.url(this.path);
    }

    get $siteHeader() { return $('[data-test-id="site-header"]') };
    get $siteFooter() { return $('[data-test-id="site-footer]') };
    get $siteNav() { return $('[data-test-id="site-nav]') };
};

export default Generic;
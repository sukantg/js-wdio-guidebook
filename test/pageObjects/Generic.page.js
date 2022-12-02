import url from URL;


class Generic {
    constructor(path) {
        this.path = path;
        this.url = new URL(path,browser.config.baseUrl);
    }
    
    load() {
        browser.url(this.path);
    }
};

export default Generic;
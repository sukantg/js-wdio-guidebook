import Generic from "./Generic.page";

class Article extends Generic {
    get $container() { return $('[data-test-id="article-page"]') };
    get $title() {return $('[data-test-id="article-title"]') };
    get $body() { return $('[data-test-id="article-body"]') };
    get $tags() { return $('[data-test-id="article-tags]')};
    get $$tags() { return $('[data-test-id="article-tags"][data-test-type="tag"]')}
    get $edit() { return $('[data-test-id="article-edit"')};
    get $delete() { return $('[data-test-id="article-delete"]')};

    get tags() { return
         this.$$tags.map
            ($tag=>$tag.getText())
    }
}

export default Article;
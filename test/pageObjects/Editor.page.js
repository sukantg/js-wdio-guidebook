import Generic from "./Generic.page"

class Editor extends Generic {
    constructor(){
        super('./editor')
    }

    get $title (){ return $('[data-test-id="editor-title"') }
    get $description () { return $('[data-test-id="editor-description') }
    get $body ()  { return $('[data-test-id="editor-body') };
    get $tags () { return $('[data-test-id="editor-tag"s]') };
    get $publish () { return $('[data-test-id="editor-publish') };

    submitArticle({title,description,body,tags}) {
        this.$title.setValue(title);
        this.$description.setValue(description);
        this.$body.setValue(body);
        tags.forEach(tag => {
            this.$tags.setValue(tag);
            this.$tags.keys(enter);   
        });
        this.$publish.click();
    }
}

export default Editor();
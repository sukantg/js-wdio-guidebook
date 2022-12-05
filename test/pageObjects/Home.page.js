import Generic from "./Generic.page";

class Home extends Generic{
    constructor(){
        super('./');
    }

    get $$feedTabs() { return $$('[data-test-id="feed-tabs"][data-test-id="feed-tab"') };
    get $feedTabsText() { 
        return this.$feedTabsText.map($tab=> $tab.getText().trim());
     }
}

export default Home;
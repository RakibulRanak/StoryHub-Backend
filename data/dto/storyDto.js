class StoryDto {
    constructor(story) {
        this.id = story.id;
        this.title = story.title;
        this.story = story.story;
        this.author = story.username;

    }
}

module.exports = { StoryDto }
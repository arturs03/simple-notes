import NoteContentItem from './noteContent.model'

export default class NoteItem {
    id: string = Date.now().toString(32)
    title: string = ''
    content: Array<NoteContentItem> = []
    createdAt: number = Date.now()

    newContentItem(type: number) {
        const newItem = new NoteContentItem()
        newItem.type = type
        newItem.order = this.content.length
        this.content.push(newItem)
    }

    removeContentItem(contentId: string) {
        const contentItemIndex = this.content.findIndex(
            ({ id }) => id === contentId
        )
        this.content.splice(contentItemIndex, 1)
    }
}

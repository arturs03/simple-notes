export default class NoteItem {
    id: string = Date.now().toString(32);
    title: string = '';
    description: string = '';
    createdAt: string = Date.now().toString();
}
export default class NoteItem {
    id: Number = Math.floor(Date.now() / 1000);
    title: String = '';
    description: String = '';
    createdAt: Number = Date.now();
}
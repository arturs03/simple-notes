export default class NoteItem {
    id: string = Date.now().toString(32);
    title: string = 'Title';
    description: string = '';
    createdAt: number = Date.now();
}
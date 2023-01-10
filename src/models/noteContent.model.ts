export default class NoteContentItem {
    id: string = `${Date.now().toString(32)}-content`
    type: number = 0
    data: string = ''
    order: number = 0
}

export const CONTENT_TYPE_TEXT = 1
export const CONTENT_TYPE_CHECK_LIST = 2
export const CONTENT_TYPE_IMG = 3

export const CONTENT_FULL_TYPES = [
    { icon: 'fa-file-lines', type: CONTENT_TYPE_TEXT },
    { icon: 'fa-list', type: CONTENT_TYPE_CHECK_LIST },
    { icon: 'fa-image', type: CONTENT_TYPE_IMG },
]

export function getContentIcon(type: number): string {
    const foundType = CONTENT_FULL_TYPES.find((cType) => cType.type === type)

    return foundType ? foundType.icon : ''
}

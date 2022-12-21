import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Note from '../Note.vue'
import NoteItem from '@/models/note.model'

describe('Test Note component', () => {
    it('Renderd title only, without defining description value', () => {
        const noteProps = new NoteItem()
        const wrapper = mount(Note, { props: { note: noteProps } })
        expect(wrapper.findAll('p').length).toBe(1)
    })
    it('Render 2 paragrahps with specific values', () => {
        const noteProps = new NoteItem()
        noteProps.title = 'test card title'
        noteProps.description = 'test card decription'

        const wrapper = mount(Note, { props: { note: noteProps } }),
            textElements = wrapper.findAll('p')
        expect(textElements[0].text()).toBe(noteProps.title)
        expect(textElements[1].text()).toBe(noteProps.description)
    })
})

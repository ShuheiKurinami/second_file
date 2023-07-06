import { EventListener } from './EventListener'
import { Task } from './Task'

class Application {
    private readonly eventListener = new EventListener()

    start() {
        // e の型は推論されるので型アノテーションは不要
        //this.eventListener.add('submit-handler', 'submit', createForm, (e) => {

        //})
        const eventListener = new EventListener
        const button = document.getElementById('deleteAllDoneTask')

        if (!button) return

        eventListener.add(
            'sample',
            'click',
            button,
            () =>alert('clicked'),
        )

    eventListener.remove('sample')
    const createForm = document.getElementById('createForm') as HTMLElement

    this.eventListener.add('submit-handler', 'submit', createForm, this.handleSubmit)
    }

    private handleSubmit = (e: Event) => {
        e.preventDefault()
        console.log('submitted')

        const titleInput = document.getElementById('title') as HTMLInputElement

        if (!titleInput.value) return

        const task = new Task({ title: titleInput.value })
        console.log(task)
    }
}

window.addEventListener('load', () => {
    const app = new Application()
    app.start()
})
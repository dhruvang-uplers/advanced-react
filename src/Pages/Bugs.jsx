import store from "../Redux/store";
import { bugAdded, bugRemoved, bugResolved } from "../Redux/actions";

export default function Bugs() {
    store.subscribe(() => {
        const bugs = store.getState()
        const bugLayout = bugs.map(el => {
            return `<li class="${el.resolved && "solved"}"><input  type="checkbox" name="resolved" value="${el.id}"/> ${el.description} <span data-id="${el.id}">X</span></li>`
        });
        document.querySelector(".bug--wrapper").innerHTML = bugLayout.join("")
    })

    store.dispatch(bugResolved(1))
    return (
        <button onClick={ }>Add Bug</button>
    )
}

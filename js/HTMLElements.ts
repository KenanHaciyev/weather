export class HTMLElements {

    tag: string
    className:string
    parent:string
    inner:string
    path: string

    constructor(tag: string, className: string, parent: string, inner?: string, path?: string) {
        this.tag = tag
        this.className = className
        this.parent = parent
        this.inner = inner
        this.path = path
    }
    
    createHTMLElement() : any {
        const elem = document.createElement(this.tag);
        elem.classList.add(this.className);
        const parentNode = document.querySelector(this.parent);
        if (this.inner) {
            elem.innerHTML = this.inner
        }

        if (this.path) {
            elem.setAttribute('src', this.path)
        }
        parentNode.appendChild(elem)
        return elem
    }
}
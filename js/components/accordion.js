class Accordion extends HTMLElement{
    static observedAttributes = ["title", "text"];

    constructor(){
        super();

        const component = this.buildComponent();
        const styles = this.buildStyles();
        
        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.appendChild(component);
        this.shadow.appendChild(styles);
    }

    buildComponent(){
        let divContainer = document.createElement("div");
        divContainer.classList.add("container");

        const button = document.createElement("button");
        button.classList.add("accordion");
        button.id = "button";
        button.addEventListener("click", this.showAccordion);

        const divText = document.createElement("div");
        divText.classList.add("panel");

        const p = document.createElement("p");
        p.id = "content";

        divText.appendChild(p);
        divContainer.appendChild(button);
        divContainer.appendChild(divText);

        return divContainer;

    }

    buildStyles(){
        let styles = document.createElement("style");
        styles.innerHTML = `
        .container{
            display: inline-block;
            margin:5px;
            border: 2px solid black;
        }

        .accordion {
            background-color: #0cf;
            color: #444;
            cursor: pointer;
            padding: 18px;
            width:100%;
            text-align: left;
            border: none;
            outline: none;
            transition: 0.4s;
            font-size: 1.2em;
            font-weight: bold;
            text-align: center;
          }

          .active, .accordion:hover {
            background-color: #008fb3;
          }

          .panel {
            padding: 0 18px;
            background-color: white;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            font-size: 1.2em;
          }
        `;

        return styles;
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name != "title" && name != "text"){
            return;
        }
        if(name == "title"){
            this.setTitle(newValue);
        }
        if(name == "text"){
            this.setText(newValue);
        }
    }

    showAccordion(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    get title(){
        return this.getAttribute("text");
    }

    setTitle(title){
        const button = this.shadow.getElementById("button");
        button.innerHTML = title;
    }

    get text(){
        return this.getAttribute("text");
    }

    setText(text){
        const pElement = this.shadow.getElementById("content");
        pElement.innerHTML = text;
    }
}

customElements.define("accordion-card", Accordion);
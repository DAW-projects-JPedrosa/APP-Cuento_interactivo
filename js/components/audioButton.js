class audioButton extends HTMLElement{
    static observedAttributes = ["src"];

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

        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.addEventListener("click", () => audio.play());
        button.innerHTML = "LEER";

        const audio = document.createElement("audio");
        const src = document.createElement("source");
        src.setAttribute("type", "audio/mp3");
        audio.appendChild(src);
        src.id = "myAudio";

        divContainer.appendChild(button);
        divContainer.appendChild(audio);

        return divContainer;

    }

    buildStyles(){
        let styles = document.createElement("style");
        styles.innerHTML = `
        div{
            display: inline-block;
            background-color:#0cf;
            border-style: solid;
            border-radius: 5rem;
            padding:15px;
            position:absolute;
            bottom: 5%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        div:hover{
            background-color: #008fb3;
        }

        button{
            background: transparent;
            border: none !important;
            font-size:1.5em;
        }
        `;

        return styles;
    }

    attributeChangedCallback(name, oldValue, newValue){
        let audioSource = this.shadow.getElementById("myAudio");
        audioSource.setAttribute("src", newValue);
    }

    get source(){
        return this.getAttribute("src");
    }
}

customElements.define("audio-button", audioButton);
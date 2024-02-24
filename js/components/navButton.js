class NavButton extends HTMLElement{
    static observedAttributes = ["direction", "href"];

    constructor(){
        super();

        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.innerHTML = `
        <style>
            .nav-img{
                width:30px;
            }

            a{
                text-decoration: none;
                color:black;
            }

            div{
                display: inline-block;
                background-color:#0cf;
                border-style: solid;
                border-radius: 5rem;
                padding:15px
            }

            div:hover{
                background-color: #008fb3;
            }

            .back{
                position: absolute;
                bottom: 5%;
                left: 5%;
            }

            .next{
                position: absolute;
                bottom: 5%;
                right: 5%;
            }

            span{
                font-size:1.5em;
            }

            @media screen and (max-width: 600px) {
                span{
                    display: none;
                }
            }
        </style>
        <a id="nav-link">
            <div id="nav-div">
                <span class="nav-text" id="nav-text"></span>
                <img class="nav-img" id="nav-img"></img>
            </div>
        </a>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name != "direction" && name != "href"){
            return;
        }
        if(name == "direction"){
            if(newValue == "next"){
                this.nextButton();
            }else if(newValue == "back"){
                this.backButton();
            }else return;
        }
        if(name == "href"){
            this.setLink(newValue);
        }
    }

    get direction(){
        return this.getAttribute("direction" || "");
    }

    get href(){
        return this.getAttribute("href" || "");
    }

    nextButton(){
        const textElement = this.shadow.getElementById("nav-text");
        textElement.innerHTML = "Siguiente";

        const imgElement = this.shadow.getElementById("nav-img");
        imgElement.setAttribute("src", "./assets/nextArrow.png");
        imgElement.setAttribute("alt", "next");

        const divElement = this.shadow.getElementById("nav-div");
        divElement.classList.remove();
        divElement.classList.add("next");

    }

    backButton(){
        const textElement = this.shadow.getElementById("nav-text");
        textElement.innerHTML = "Atrás";

        const imgElement = this.shadow.getElementById("nav-img");
        imgElement.setAttribute("src", "./assets/backArrow.png");
        imgElement.setAttribute("alt", "back");

        const divElement = this.shadow.getElementById("nav-div");
        divElement.classList.remove();
        divElement.classList.add("back");
    }

    setLink(href){
        const aElement = this.shadow.getElementById("nav-link");
        aElement.setAttribute("href", href);
    }
}

customElements.define("nav-button", NavButton);
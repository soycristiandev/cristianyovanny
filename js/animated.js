class Animatedtext {
    constructor(id, objetive) {
        this.text = document.getElementById(id);
        this.objetive = document.getElementById(objetive)
        this.letters = this.text.innerText.split("");
        
        this.text.innerText = '';

        this.letters.forEach((letter) => {
            let character = letter === ' ' ? '&nbsp;' : letter;
            this.text.innerHTML = this.text.innerHTML + `
                <div>
                    <span>${character}</span>
                    <span class="second-line">${character}</span>
                </div>
            `;
        });

        this.objetive.addEventListener('mouseenter', () => {
            let acount = 0;

            const interval = setInterval(() => {
                if(acount < this.text.children.length) {
                    this.text.children[acount].classList.add('animated');
                    acount += 1;
                } else {
                    clearInterval(interval);
                }
            }, 30)
        });

        this.objetive.addEventListener('mouseleave', () => {
            let acount = 0;

            const interval = setInterval(() => {
                if(acount < this.text.children.length) {
                    this.text.children[acount].classList.remove('animated');
                    acount += 1;
                } else {
                    clearInterval(interval);
                }
            }, 30)
        })
    }
}

const Animatedlogo = new Animatedtext('logo', 'logotipo');
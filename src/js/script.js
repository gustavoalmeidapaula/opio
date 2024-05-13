const button = document.getElementById('button')
const form = document.getElementById('form')
const main = document.querySelector('main')
const root = document.querySelector(':root')
const theme = document.getElementById('themeSwitcher')

let number_input = 0

  theme.addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#212529')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

form.addEventListener('submit', (ev) =>{
    ev.preventDefault()

    button.addEventListener('click', (ev) =>{
        ev.preventDefault()
        
        number_input++

        const button_cadastrar = document.getElementById('cadastrar')
        const div = document.getElementById('agrupamento')

        const div2 = document.createElement('div')
        const br = document.createElement('br')
        const br1 = document.createElement('br')
        const br2 = document.createElement('br')
        const br3 = document.createElement('br')

        const label_tecnologia = document.createElement('label')
        label_tecnologia.innerText = 'Nome da tecnologia'
        label_tecnologia.setAttribute('for','tecnologias') 

        const input_tecnologia = document.createElement('input')
        input_tecnologia.type = 'text'
        input_tecnologia.name = 'tecnologias'
        input_tecnologia.id = 'tecnologias'
        input_tecnologia.placeholder = 'Digite o nome da tecnologia'
        input_tecnologia.className = 'input_text_tecnologia'

        const titulo2 = document.createElement('label')
        titulo2.innerText = 'Tempo de experiência:'
        titulo2.setAttribute('for','input_time' + number_input) 

        const input_time1 = document.createElement('input')
        input_time1.type = 'radio'
        input_time1.name = 'input_time' + number_input
        input_time1.id ='input_time1-' + number_input
        input_time1.value = '0-2 anos'

        const label_time1 = document.createElement('label')
        label_time1.innerText = ' 0-2 anos '
        label_time1.setAttribute('for', 'input_time1-' + number_input)

        const input_time2 = document.createElement('input')
        input_time2.type = 'radio'
        input_time2.name = 'input_time' + number_input
        input_time2.id ='input_time2-' + number_input
        input_time2.value = '3-4 anos'

        const label_time2 = document.createElement('label')
        label_time2.innerText = ' 3-4 anos '
        label_time2.setAttribute('for', 'input_time2-' + number_input)

        const input_time3 = document.createElement('input')
        input_time3.type = 'radio'
        input_time3.name = 'input_time' + number_input
        input_time3.id ='input_time3-' + number_input
        input_time3.value = '5+ anos'

        const label_time3 = document.createElement('label')
        label_time3.innerText = ' 5+ anos '
        label_time3.setAttribute('for', 'input_time3-' + number_input)

        const remove = document.createElement('button')
        remove.innerText = 'Remover tecnologia'

        div2.append(label_tecnologia,br,input_tecnologia,br1,titulo2,br2,input_time1,label_time1,input_time2,label_time2,input_time3,label_time3,br3,remove)
        div.appendChild(div2)
        form.appendChild(div)

        remove.addEventListener('click', (ev) =>{
            ev.preventDefault()
            div.removeChild(div2)
            number_input--;
        })

        button_cadastrar.addEventListener('click', (ev) => {
            ev.preventDefault()

            const name = document.getElementById('name').value
            const name_tecnologia = document.querySelectorAll("input[id='tecnologias']")
            const time_experience = document.querySelectorAll("input[type='radio']:checked")
            const mensagem = [''];

            console.log({name, name_tecnologia, time_experience})

            for(var i = 0; i < number_input; i++){
                
                mensagem[i] = "\n- Nome da tecnologia: " + name_tecnologia[i].value +
                "\n- Tempo de experiência: " + time_experience[i].value
            }

            alert("Cadastro concluído!" +
                "\n Seja bem-vindo(a) dev." +
                "\n> Nome do desenvolvedor: " + name + 
                "\n> Tecnologias e Tempo de Experiência:" + mensagem
                )
        })
    })
})
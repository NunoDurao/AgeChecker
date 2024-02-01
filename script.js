function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('txtano')
    let res = document.getElementById('res')


    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {

        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(formAno.value);
        let gênero = '';
        let img = document.createElement('img');

        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-m.png')

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')

            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-f.png')

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-f.jpg')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-f.png')

            } else {
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }

}
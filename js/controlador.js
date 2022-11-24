console.log("first template");
const setHoraActual = (indice) => {
    let retorno;

    myDate = new Date();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;

    if (minutes < 10) minutes = "0" + minutes;

    if (seconds < 10) seconds = "0" + seconds;

    retorno = hours+ ":" +minutes+ ":" +seconds;

    return retorno;
};

const showSectionEscrever = (indice) => {

    let escreverDiv = document.getElementById('div-escrever');

    if (escreverDiv.style.display === "none") {
        escreverDiv.style.display = "block";
        escreverDiv.style.position = "fixed";
        escreverDiv.style.bottom = "0";
        escreverDiv.style.right= "10px";
    } else {
        escreverDiv.style.display = "none";
        console.log('div oculto');
    }
};

showSectionEscrever();

var localStorage = window.localStorage;

const setMensagensRecibidas = (indice) => {

    let recibidas = [
        {
            autor : "Carlos Albuquerque",
            email : "carlinmilgrau@gmail.com",
            assunto : "Acerto de Contas",
            mensagem : "Queria saber quando você vai me pagar...",
            hora : "09:57",
            lido : true,
            destacado : true,
            spam : false,
        },
        {
            autor : "Victor Tales",
            email : "TTvctr@gmail.com",
            assunto : "Convite Festa",
            mensagem : "Segue em anexo o convite pra festa...",
            hora : "10:20",
            lido : true,
            destacado : false,
            spam : false,
        },
        {
            autor : "Paula Tejano",
            email : "paulinhatjn@gmail.com",
            assunto : "Fotos Solicitadas",
            mensagem : "Em Anexo as fotos que me pediu...",
            hora : "11:00",
            lido : false,
            destacado : true,
            spam : true,
        },
        {
            autor : "Mecânica Especializada Simas Turbo",
            email : "simasturbos@gmail.com",
            assunto : "Carro Forte",
            mensagem : "Ai tem potência em meu patrão...",
            hora : "11:12",
            lido : false,
            destacado : false,
            spam : true,
        },
        {
            autor : "Silas Kou",
            email : "koujpn@gmail.com",
            assunto : "Agiota",
            mensagem : "O cara me perseguiu mano, nunca sofri tanto...",
            hora : "12:05",
            lido : false,
            destacado : false,
            spam : false,
        },
        {
            autor : "Elisson Deveque",
            email : "elissondeveque1@gmail.com",
            assunto : "Trabalho",
            mensagem : "O mano, fez o trabalho lá?",
            hora : "15:36",
            lido : false,
            destacado : false,
            spam : false,
        }
    ];

    if (localStorage.getItem('recibidas') == null) {
        localStorage.setItem('recibidas',JSON.stringify(recibidas));
    } else {
        console.log('local storage full');
    }
};

setMensagensRecibidas();

const setMensagensEnviadas  = (indice) => {
    let enviadas = [
        {
            destinatario : "Cleber Pereira",
            email : "clbpeireira@gmail.com",
            assunto : "Round 6 é bom demais",
            mensagem : "Pense numa série dahora....",
            hora : "10:00"
        },
        {
            destinatario : "Rudimar Moura",
            email : "profrudimar@gmail.com",
            assunto : "Trabalho de Banco de Dados",
            mensagem : "Segue em anexo o trabalho de BD",
            hora : "10:16"
        },
        {
            destinatario : "Celso Thiago",
            email : "celsin@gmail.com",
            assunto : "Trabalho Engenharia",
            mensagem : "Segue tua parte do trabalho ai",
            hora : "11:02"
        },
        {
            destinatario : "Peter Parker",
            email : "omiranhaespetacular@gmail.com",
            assunto : "Filme Novo",
            mensagem : "Já comprei os ingresso pra te ver mano",
            hora : "11:17"
        },
        {
            destinatario : "Doutô dos topus",
            email : "octopusdr@gmail.com",
            assunto : "Filme Novo",
            mensagem : "O mano, teu traje é foda",
            hora : "15:05"
        },
        {
            destinatario : "Senhor da Steam",
            email : "seniorsteam@gmail.com",
            assunto : "Loja",
            mensagem : "O lança uns desconto ai pfvr",
            hora : "22:16"
        }
    ];

    if (localStorage.getItem('enviadas') == null) {
        localStorage.setItem('enviadas',JSON.stringify(enviadas));
    } else {
        console.log('local storage full');
    }
};

setMensagensEnviadas();

const getReceivedEmails = (indice) => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidas'));

    let mails = dataLocalStorage;

    document.getElementById('tab-recibidas').innerHTML = '';
    mails.forEach((mail,index) => {

        switch (mail.spam) {
            case false:
                if (mail.destacado && mail.lido) {
                    document.getElementById('tab-recibidas').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" style="color: #ffeb00;" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i>${mail.autor}</td>
                            <td>${mail.assunto} - ${mail.mensagem.substring(0,20)}</t
                            console.log();d>
                            <td class="hora-item">${mail.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensagem-lido" onclick="mensagemLido(${index})"></i></td>
                        </tr>   
                    `; 
                } else if (mail.destacado && mail.lido == false) {
                    document.getElementById('tab-recibidas').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" style="color: #ffeb00;" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i><strong>${mail.autor}</strong></td>
                            <td><strong>${mail.assunto}</strong> - ${mail.mensagem.substring(0,20)}</td>
                            <td class="hora-item"><strong>${mail.hora}</strong><i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensagem-lido" onclick="mensagemLido(${index})"></i></td>
                        </tr>   
                    `; 
                }else if (mail.destacado == false && mail.lido) {
                    document.getElementById('tab-recibidas').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i>${mail.autor}</td>
                            <td>${mail.assunto} - ${mail.mensagem.substring(0,20)}</td>
                            <td class="hora-item">${mail.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensagem-lido" onclick="mensagemLido(${index})"></i></td>
                        </tr>   
                    `;
                }else if (mail.destacado == false && mail.lido == false) {
                    document.getElementById('tab-recibidas').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i><strong>${mail.autor}</strong></td>
                            <td><strong>${mail.assunto}</strong> - ${mail.mensagem.substring(0,20)}</td>
                            <td class="hora-item"><strong>${mail.hora}</strong><i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensagem-lido" onclick="mensagemLido(${index})"></i></td>
                        </tr>   
                    `;
                }
                
                break;
            default:
                break;
        }
    });
};

const getReceivedEmailsSpam = (indice) => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidas'));

    let mails = dataLocalStorage;
    document.getElementById('tab-recibidas').innerHTML = '';

    mails.forEach((mail, index) => {

        switch (mail.spam) {
            case true:
                document.getElementById('tab-recibidas').innerHTML += `
                    <tr>
                        <td><i class="far fa-star btns-nav items-table"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i><strong>${mail.autor}</strong></td>
                        <td><strong>${mail.assunto}</strong> - ${mail.mensagem.substring(0,20)}</td>
                        <td class="hora-item"><strong>${mail.hora}</strong><i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i></td>
                    </tr>   
                `;
                break;
        
            default:
                break;
        }
    });
};


const setDestacado = (indice) => {
    console.log('setDestacado');
    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidas'));

    let mails = dataLocalStorage;

    if (mails[indice].destacado) {
        mails[indice].destacado = false;
    }else if (mails[indice].destacado == false) {
        mails[indice].destacado = true;
    }
    
    localStorage.setItem('recibidas',JSON.stringify(mails));
    //location.reload();

    getReceivedEmails();

};

const setSpam = (indice) => {
    console.log('setSpam');
    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidas'));

    let mails = dataLocalStorage;

    if (mails[indice].spam) {
        mails[indice].spam = false;
    }else if (mails[indice].spam == false) {
        mails[indice].spam = true;
    }
    
    localStorage.setItem('recibidas',JSON.stringify(mails));
    //location.reload();

    getReceivedEmailsSpam();
};

const deleteItem = (indice) => {
    console.log('delete item');

    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidas'));

    let mails = dataLocalStorage;

    mails.splice(indice,1);
    
    localStorage.setItem('recibidas',JSON.stringify(mails));

    getReceivedEmails();
};


const getSendsEmails = (indice) => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('enviadas'));

    let emails = dataLocalStorage;
    document.getElementById('tab-recibidas').innerHTML = '';

    emails.forEach((email,index) => {
        document.getElementById('tab-recibidas').innerHTML += `
            <tr>
                <td>Para: ${email.destinatario}</td>
                <td>${email.assunto} - ${email.mensagem.substring(0,20)}</td>
                <td class="hora-item">${email.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deleteEnviado(${index})"></i></td>
            </tr>  
        `;
    });
};


const deleteEnviado = (indice) => {
    console.log('apagando enviado',indice);

    let dataLocalStorage = JSON.parse(localStorage.getItem('enviadas'));

    let mails = dataLocalStorage;

    mails.splice(indice,1);
    
    localStorage.setItem('enviadas',JSON.stringify(mails));

    getSendsEmails();

};


const getMensagensDestacadas = (indice) => {

    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidas'));

    let mails = dataLocalStorage;

    document.getElementById('tab-recibidas').innerHTML = '';
    mails.forEach((mail,index) => {

        switch (mail.destacado) {
            case true:
                if (mail.destacado && mail.lido) {
                    document.getElementById('tab-recibidas').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" style="color: #ffeb00;" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i>${mail.autor}</td>
                            <td>${mail.assunto} - ${mail.mensagem.substring(0,20)}</t
                            console.log();d>
                            <td class="hora-item">${mail.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensagem-lido" onclick="mensagemLido(${index})"></i></td>
                        </tr>   
                    `; 
                } else if (mail.destacado && mail.lido == false) {
                    document.getElementById('tab-recibidas').innerHTML += `
                        <tr>
                            <td><i class="far fa-star btns-nav items-table" style="color: #ffeb00;" onclick="setDestacado(${index})"></i><i class="fas fa-exclamation-triangle btns-nav items-table" onclick="setSpam(${index})"></i><strong>${mail.autor}</strong></td>
                            <td><strong>${mail.assunto}</strong> - ${mail.mensagem.substring(0,20)}</td>
                            <td class="hora-item"><strong>${mail.hora}</strong><i class="far fa-trash-alt btns-table trash-item" onclick="deleteItem(${index})"></i><i class="fas fa-envelope-open-text btns-table btn-mensagem-lido" onclick="mensagemLido(${index})"></i></td>
                        </tr>   
                    `; 
                }                
                break;
            default:
                break;
        }
    });
};


const getLixeira = (indice) => {
    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidas'));

    let emails = dataLocalStorage;
    document.getElementById('tab-recibidas').innerHTML = '';

    emails.forEach((email,index) => {
        document.getElementById('tab-recibidas').innerHTML += `
            <tr>
                <td>${email.autor}</td>
                <td>${email.assunto} - ${email.mensagem.substring(0,20)}</td>
                <td class="hora-item">${email.hora}<i class="far fa-trash-alt btns-table trash-item" onclick="deleteLixeira(${index})"></i></td>
            </tr>  
        `;
    });
};

const deleteLixeira = (indice) => {
    console.log('Mensagem apagada da Lixeira');
};


const enviarMensagem = (indice) => {
    const mensagem = {
        remetente : document.getElementById('inputDe').value,
        destinatario : document.getElementById('inputPara').value,
        assunto :document.getElementById('inputAssunto').value,
        mensagem : document.getElementById('inputMensagem').value,
        hora: setHoraActual()
    }

    console.log(mensagem);
    
    let data = JSON.parse(localStorage.getItem('enviadas'));

    data.push(mensagem);
    localStorage.setItem('enviadas', JSON.stringify(data));
    showSectionEscrever();
    getSendsEmails();
};

const mensagemLido = (indice) => {
    
    let dataLocalStorage = JSON.parse(localStorage.getItem('recibidas'));

    if (dataLocalStorage[indice].lido) {
        dataLocalStorage[indice].lido = false;
    }else if (dataLocalStorage[indice].lido == false) {
        dataLocalStorage[indice].lido = true;
    } 

    localStorage.setItem('recibidas',JSON.stringify(dataLocalStorage));
    getReceivedEmails();

};

const botContinuar = (indice) => {
	 
	<a href="caixa-de-email.html"></a>
}
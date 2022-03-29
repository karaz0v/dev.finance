const Modal = {
    open(){
        // Abrir o Modal
        // Adicionar a Classe active ao model
        document
        .querySelector('.modal-overlay')
        .classList.add('active')
    },

    close(){
        // Fechar o Modal
        // Remover a Classe active do model
        document
        .querySelector('.modal-overlay')
        .classList.remove('active')
    }
};
function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    function activeTab(index) {
        tabContent.forEach((section) => {  //foreach = interage com cada item
            section.classList.remove('ativo');
        })

        tabContent[index].classList.add('ativo');
    }
    //fazer um loop interagindo a image com sua descrição.  1: fazer o loop por cada li das imgs 2:add o index que passa o valor da colocação do elemento  3: em cada item add um evento de click 4: no css esconde os elementos que não estao ativos

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    })
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if (accordionList.length) {
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');

        function activeAccordion() {
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initAccordion();



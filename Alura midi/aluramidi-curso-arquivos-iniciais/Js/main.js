function tocaSom(id)
{
    document.querySelector(id).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (var i=0; i < listaTeclas.length; i++)
{
    const elementId = listaTeclas[i].classList[1];
    const tecla = listaTeclas[i]
    listaTeclas[i].onclick = function (){tocaSom('#som_'+elementId)};

    listaTeclas[i].onkeydown = function(e)
    {
        if (e.code === 'Space' || e.code == "Enter")
        {
            tecla.classList.add('ativa')
        }
    }

    listaTeclas[i].onkeyup = function()
    {
        tecla.classList.remove('ativa')
    }
}

function excluirItemSelecionado() {
    var itens = document.getElementById('itens');
    if (itens.selectedIndex == -1) {
        alert('Selecione um item na lista!');
        return;
    }
    var indice = itens.selectedIndex;
    var itemSelecionado = itens.options[indice].text;

    var resultado = confirm('Deseja Excluir o Item ' + itemSelecionado + ' ?');
    if (resultado) {
        itens.remove(indice);
        alert('O item ' + itemSelecionado + ' foi removido da lista!');
    } else {
        alert('Você cancelou a exclusão do item ' + itemSelecionado + '.')
    }
}

function adicionarItem() {
    var novoItem = prompt('Digite o novo item')
    if (novoItem) {
        var itens = document.getElementById('itens');
        var options = document.createElement('option')
    options.text = novoItem
    itens.add(options)
    alert('O item ' + novoItem + ' foi adicionado')
    }
}

function classToggle() {
    const navs = document.querySelectorAll('.Navbar_Items')
    navs.forEach(nav => nav.classList.toggle('Navbar_ToggleShow'))
}

document.getElementById('btnExcluirItem').onclick = excluirItemSelecionado
document.getElementById('btnAdicionarItem').onclick = adicionarItem
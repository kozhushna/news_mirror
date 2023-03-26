const refs = {
    pager: document.querySelector('[data-pager]'),
    gridBox: document.querySelector('.grid-box'),
};

refs.pager.addEventListener('click', onPageChanges);

function onPageChanges(e) {
    const target = e.target;
    if (target.nodeName !== 'BUTTON') {
        return;
    }

    const pageNumber = target.dataset.pageNumber;
    if (pageNumber == 1) {
        refs.gridBox.classList.remove('banner-hidden');
    } else {
        refs.gridBox.classList.add('banner-hidden');
    }
}

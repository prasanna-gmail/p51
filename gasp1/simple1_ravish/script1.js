const API = getAxiosInstance();
let todos;
const mainTl = gsap.timeline();
const paginationTl = gsap.timeline();

init();

function init() {
    renderLoaders();
    mainTl.add(loaderInAnimation());

    renderPagination(0);

    try {
        // Simulate longer delay
        setTimeout(async () => {
            //Get data
            response = await getToDos();
            todos = response.data;

            // Setup the animation for the inital load
            mainTl
                .add(loaderOutAnimation())
                .add(() => firstRender())
                .add(() => contentInAnimation())
                .add(() => addListeners())
        }, 2000);

    } catch (err) {
        console.log(err);
    }
}

/////////// Event handlers

function addListeners() {
    addTodoListeners();
    addPaginationListeners();
}

function addTodoListeners() {
    const todoItems = Array.from(document.querySelectorAll('.to-do'));
    todoItems.forEach((todo, index) => {
        todo.addEventListener('click', () => {
            renderSummary(todos[index]);
        });
    });
}

function addPaginationListeners() {
    const items = Array.from(document.querySelectorAll('.pagination-item'));

    items.forEach((item, index) => {
        item.addEventListener('click', (e) => {

            // Change active pagination item
            e.target.classList.add('pagination--active');
            items.forEach(item => {
                if (e.target !== item) {
                    item.classList.remove('pagination--active');
                }
            });

            renderLoaders();
            // paginationTl = gsap.timeline();
            paginationTl
                .add(contentOutAnimation())
                .add(loaderInAnimation());

            // Simulate longer response
            setTimeout(async () => {
                try {
                    // Update data
                    response = await getToDos(index + 1);
                    todos = response.data;

                    paginationTl
                        .add(loaderOutAnimation())
                        .add(() => updateView())
                        .add(() => contentInAnimation());


                    console.log("children", paginationTl.getChildren())
                } catch (err) {
                    console.log(err);
                }
            }, 2000);
        });
    })
}

/////////// Render & Remove functions

function firstRender() {
    renderTable();
    renderSummary(todos[0]);
}
function updateView() {
    clearTable();
    renderTable();
    addTodoListeners();
    renderSummary(todos[0]);
}

function renderTable() {
    const tableWrapper = document.querySelector('.table-wrapper');

    const tableHTML = generateTableHTML();
    tableWrapper.insertAdjacentHTML('afterbegin', tableHTML);
}
function clearTable() {
    const table = document.querySelector('.table');

    table.parentElement.removeChild(table);
}

function renderSummary(todo) {
    const summaryWrapper = document.querySelector('.summary-wrapper');

    const summaryHTML = generateSummaryHTML(todo);
    summaryWrapper.insertAdjacentHTML('afterbegin', summaryHTML);
}

function renderPagination(active) {
    const paginationWrapper = document.querySelector('.pagination-wrapper');

    const paginationHTML = generatePaginationHTML(active);
    paginationWrapper.insertAdjacentHTML('beforeend', paginationHTML);
}

function renderLoaders() {
    const tableWrapper = document.querySelector('.table-wrapper');
    const summaryWrapper = document.querySelector('.summary-wrapper');

    [
        { element: tableWrapper, name: 'table' },
        { element: summaryWrapper, name: 'summary' }
    ].forEach(wrapper => {
        renderLoader(wrapper);
    });
}
function renderLoader(wrapper) {
    // Add loaders
    wrapper.element.insertAdjacentHTML('afterbegin', generateLoaderHTML(wrapper.className));
}
function clearLoaders() {
    const loaders = Array.from(document.querySelectorAll('.loader'));
    loaders.forEach(loader => loader.parentElement.removeChild(loader));
}

//////////// Animations

function loaderOutAnimation() {
    return (
        gsap
            .timeline()
            .to('.loader', {
                autoAlpha: 0,
                duration: '.8',
                onComplete: () => {
                    console.log('Loader Out');
                    clearLoaders();
                }
            })
    );
}
function loaderInAnimation() {
    return gsap.timeline().fromTo('.loader', { autoAlpha: 0 }, { autoAlpha: 1, onComplete: () => { console.log('Loader In') } });
}

function contentOutAnimation() {
    const tl = gsap.timeline();
    tl
        .add(summaryOutAnimation())
        .add(tableOutAnimation(), '<');
    return tl;
}
function summaryOutAnimation() {
    const tl = gsap.timeline();
    tl.to('.summary', { autoAlpha: 0 });
    return tl;
}
function tableOutAnimation() {
    const tl = gsap.timeline();
    tl.to('.table', { autoAlpha: 0 });
    return tl;
}

function contentInAnimation() {
    const tl = gsap.timeline();
    tl
        .fromTo('.table', { autoAlpha: 0 }, { autoAlpha: 1 })
        .fromTo('.summary', { autoAlpha: 0 }, { autoAlpha: 1 }, '<');

    return tl;
}

/////////// HTML creation

function generateTableHTML() {
    let rows = todos.map(({ id, title }) => {
        return (`
        <div class="to-do">
          ${id} ${title}
        </div>
      `);
    });

    const markup = `<div class="table">${rows.join('')}</div>`;

    return markup;
}
function generateSummaryHTML({ id, title }) {
    const markup = `
    <div class="summary">
      <div class="id">${id}</div>
      <div class="title">${title}</div>
    </div>
  `;

    return markup;
}
function generatePaginationHTML(active) {
    let markup = '';
    for (let x = 0; x < 3; x++) {
        markup += `<div class="pagination-item ${active === x ? 'pagination--active' : ''}">${x}</div>`
    }
    return markup;
}

function generateLoaderHTML(loaderName) {
    const markup = `
    <div class="circles loader loader--${loaderName}">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
    </div>
  `;

    return markup;
}

/////////// Data

function initData({ data }) {
    for (let x = 0; x < 5; x++) {
        first5.push(data[x]);
        second5.push(data[x + 5]);
        third5.push(data[x + 5]);
    }
}

/////////// API calls

function getAxiosInstance() {
    return axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
}
function getToDos(page) {
    return API.get(`/posts?_page=${page}&_limit=5`, {
        cancelToken: new axios.CancelToken(c => cancelTokenSource = c)
    });
}

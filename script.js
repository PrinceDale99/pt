function loadPage(pageNumber) {
    const iframe = document.getElementById("iframe");
    iframe.src = pageNumber + ".html";
}

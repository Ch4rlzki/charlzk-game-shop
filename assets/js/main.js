Array.from(document.getElementsByTagName("a")).forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        let modal = new bootstrap.Modal(document.getElementById("main-modal"));
        modal.show();
    });
});
$(function(){
    var file = document.location.pathname.match(/[^\/]+$/)[0];

    let home = '../index.html';
    let imagesFolder = '../images/';
    let viewsFolder = '';
    let homeActive = '';
    let homeSpan = '';
    let contestActive = '';
    let contestSpan = '';
    let winnersActive = '';
    let winnersSpan = '';
    let sponsorActive = '';
    let sponsorSpan = '';
    let volunteerActive = '';
    let volunteerSpan = '';
    let contactActive = '';
    let contactSpan = '';
    switch (file) {
        case 'index.html':
            home = '#';
            imagesFolder = 'images/';
            viewsFolder = 'views/';
            homeActive = 'active';
            homeSpan = '<span class="sr-only">(current)</span>';
            break;
        case 'contest.html':
            contestActive = 'active';
            contestSpan = '<span class="sr-only">(current)</span>';
            break;
        case 'winners.html':
            winnersActive = 'active';
            winnersSpan = '<span class="sr-only">(current)</span>';
            break;
        case 'sponsor.html':
            sponsorActive = 'active';
            sponsorSpan = '<span class="sr-only">(current)</span>';
            break;
        case 'volunteer.html':
            volunteerActive = 'active';
            volunteerSpan = '<span class="sr-only">(current)</span>';
            break;
        case 'contact.html':
            contactActive = 'active';
            contactSpan = '<span class="sr-only">(current)</span>';
            break;
    }
    let header =
        `<nav class="header navbar navbar-expand-lg fixed-top navbar-dark">
            <a class="navbar-brand" href="${home}">
                <img src="${imagesFolder}Logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item ${homeActive} page mx-lg-5">
                        <a class="nav-link" href="${home}">Home ${homeSpan}</a>
                    </li>
                    <li class="nav-item ${contestActive} page mx-lg-5">
                        <a class="nav-link" href="${viewsFolder}contest.html">Contest ${contestSpan}</a>
                    </li>
                    <li class="nav-item ${winnersActive} page mx-lg-5">
                        <a class="nav-link" href="${viewsFolder}winners.html">Past Winners ${winnersSpan}</a>
                    </li>
                    <li class="nav-item ${sponsorActive} page mx-lg-5">
                        <a class="nav-link" href="${viewsFolder}sponsor.html">Sponsor ${sponsorSpan}</a>
                    </li>
                    <li class="nav-item ${volunteerActive} page mx-lg-5">
                        <a class="nav-link" href="${viewsFolder}volunteer.html">Volunteer ${volunteerSpan}</a>
                    </li>
                    <li class="nav-item ${contactActive} page mx-lg-5">
                        <a class="nav-link" href="${viewsFolder}contact.html">Contact ${contactSpan}</a>
                    </li>
                </ul>
            </div>
        </nav>`;
    $('.header').html(header);

    var index = (file == 'index.html') ? 'views/' : '';
    var homeFooter = (file == 'index.html') ? '<div class="row"><a href="#">Home</a></div>' : '<div class="row"><a href="../index.html">Home</a></div>';
    var contest = (file == 'contest.html') ? '<div class="row"><a href="#">Contest</a></div>' : `<div class="row"><a href="${index}contest.html">Contest</a></div>`;
    var winner = (file == 'winners.html') ? '<div class="row"><a href="#">Past Winners</a></div>' : `<div class="row"><a href="${index}winners.html">Past Winners</a></div>`;
    var sponsor = (file == 'sponsor.html') ? '<div class="row"><a href="#">Sponsor</a></div>' : `<div class="row"><a href="${index}sponsor.html">Sponsor</a></div>`;
    var volunteer = (file == 'volunteer.html') ? '<div class="row"><a href="#">Volunteer</a></div>' : `<div class="row"><a href="${index}volunteer.html">Volunteer</a></div>`;
    var contact = (file == 'contact.html') ? '<div class="row"><a href="#">Contact Us</a></div>' : `<div class="row"><a href="${index}contact.html">Contact Us</a></div>`;
    var icon = (file == 'index.html') ? '' : '../';
    var footer = 
        `<div class="container">
            <div class="row">
                <div class="col footer-col">
                    <div class="row"><h2>Pages</h2></div>
                    <div class="row">
                        <div class="col">
                            ${homeFooter}
                            ${contest}
                            ${winner}
                        </div>
                        <div class="col">
                            ${sponsor}
                            ${volunteer}
                            ${contact}
                            </div>
                            </div>
                        </div>
                        <div class="col footer-col">
                            <div class="row"><h2>Links</h2></div>
                            <div class="row"><a href="https://www.cspeef.org/competitions/">Other CA Chapters</a></div>
                            <div class="row"><a href="https://www.cspeef.org/">State Website</a></div>
                            <div class="row"><a href="https://www.mathcounts.org/">National Website</a></div>
                        </div>
                        <div class="col footer-col">
                            <div class="row"><h2>Contact Us</h2></div>
                            <div class="row"><a href="mailto:coord.nwscvmathcounts@gmail.com"><img src="${icon}images/email_icon.png"> coord.nwscvmathcounts@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </div>`;
    $('.footer').html(footer);

    // modal announcement
    // $('#close').click(() => {
    //     $('#alertModal').hide();
    //     $('#modalBackground').hide();
    // });
    // $('#alertModal').show();
    // $('#modalBackground').show();
})

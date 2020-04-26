$(function(){
    var file = document.location.pathname.match(/[^\/]+$/)[0];

    $('.header').html(header);

    var index = (file == 'index.html') ? 'views/' : '';
    var home = (file == 'index.html') ? '<nav class="navbar navbar-expand-lg fixed-top navbar-dark"><a href="#">Home</a></div>' : `<a class="nav-link"><a href="../index.html">Home</a></li>`;

    var contest = (file == 'contest.html') ? '<li class="nav-item active page mx-lg-5">' : `<a class="nav-link"><a href="${index}contest.html"<span class="sr-only">(current)</span></a> : '</li>`;
         contest = (file != 'contest.html') ? '<li class="nav-item page mx-lg-5">': `<a class="nav-link" href="${index}contest.html">Contest</a></li>`;
    var winner = (file == 'winners.html') ? '<li class="nav-item active page mx-lg-5">' : `<a class="nav-link"><a href="#">Past Winners</a></div>' : `<a class="nav-link"><a href="${index}winners.html"<span class="sr-only">(current)</span></a></li>`;
         = (file != 'winners.html') ? '<li class="nav-item page mx-lg-5">': `<a class="nav-link" href="${index}winners.html">Past Winners</a>`;
    var sponsor = (file == 'sponsor.html') ? '<li class="nav-item active page mx-lg-5">' : a href="#">Sponsor</a></div>' : `<a class="nav-link"><a href="${index}sponsor.html"<span class="sr-only">(current)</span></a>`;
         = (file != 'sponsor.html') ? '<li class="nav-item page mx-lg-5">' : `<a class="nav-link" href="sponsor.html">Sponsor</a></li>`;
    var volunteer = (file == 'volunteer.html') ? '<li class="nav-item active page mx-lg-5">' : a href="#">Volunteer</a></div>' : `<a class="nav-link"><a href="${index}volunteer.html"<span class="sr-only">(current)</span></a>`;
         = (file != 'volunteer.html') ? '<li class="nav-item page mx-lg-5">': `<a class="nav-link" href="${index}volunteer.html">Volunteer</a>`;
    var contact = (file == 'contact.html') ? '<li class="nav-item active page mx-lg-5"><a href="#">Contact</a></div>' : `<a class="nav-link"><a href="${index}contact.html"<span class="sr-only">(current)</span></a>`;
         = (file != 'contact.html') ? '<li class="nav-item page mx-lg-5">': `<a class="nav-link" href="${index}contact.html">Contact</a>`;
    var icon = (file == 'index.html') ? '' : '../';


    var header = `<nav class="navbar navbar-expand-lg fixed-top navbar-dark">`;
    header +=     
        `<a class="navbar-brand" href="#">
                <img src="images/Logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    ${home}
                    ${contest}
                    ${winner}
                    ${sponsor}
                    ${volunteer}
                    ${contact}
                    ${icon}
                </ul>
            </div>
            </nav>`;

    $('.footer').html(footer);

 





    $('.header').html(header);

    var index2 = (file == 'index.html') ? 'views/' : '';
    var home2 = (file == 'index.html') ? '<div class="row"><a href="#">Home</a></div>' : '<div class="row"><a href="../index.html">Home</a></div>';
    var contest2 = (file == 'contest.html') ? '<div class="row"><a href="#">Contest</a></div>' : `<div class="row"><a href="${index2}contest.html">Contest</a></div>`;
    var winner2 = (file == 'winners.html') ? '<div class="row"><a href="#">Past Winners</a></div>' : `<div class="row"><a href="${index2}winners.html">Past Winners</a></div>`;
    var sponsor2 = (file == 'sponsor.html') ? '<div class="row"><a href="#">Sponsor</a></div>' : `<div class="row"><a href="${index2}sponsor.html">Sponsor</a></div>`;
    var volunteer2 = (file == 'volunteer.html') ? '<div class="row"><a href="#">Volunteer</a></div>' : `<div class="row"><a href="${index2}volunteer.html">Volunteer</a></div>`;
    var contact2 = (file == 'contact.html') ? '<div class="row"><a href="#">Contact Us</a></div>' : `<div class="row"><a href="${index2}contact.html">Contact Us</a></div>`;
    var icon2 = (file == 'index.html') ? '' : '../';
    var footer = `<div class="container">
            <div class="row">
                <div class="col footer-col">
                    <div class="row"><h2>Pages</h2></div>
                    <div class="row">
                        <div class="col">
                            ${home2}
                            ${contest2}
                            ${winner2}
                        </div>
                        <div class="col">
                            ${sponsor2}
                            ${volunteer2}
                            ${contact2}
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
                            <div class="row"><a href="mailto:coord.nwscvmathcounts@gmail.com"><img src="${icon2}images/email_icon.png"> coord.nwscvmathcounts@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </div>`


    $('.footer').html(footer);
    
})
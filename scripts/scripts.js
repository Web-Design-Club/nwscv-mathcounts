$(function(){
    var file = document.location.pathname.match(/[^\/]+$/)[0];
    var header = `<nav class="navbar navbar-expand-lg fixed-top navbar-dark">`;
    if (file == 'index.html') {
        header += 
            `<a class="navbar-brand" href="#">
                <img src="images/Logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item active page mx-lg-5">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="views/contest.html">Contest</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="views/winners.html">Past Winners</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="views/sponsor.html">Sponsor</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="views/volunteer.html">Volunteer</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="views/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>`;
    } else {
        header += 
        `<a class="navbar-brand" href="../index.html">
            <img src="../images/Logo.png">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">`;
        switch (file) {
            case 'contest.html':
                header += 
                    `<li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="../index.html">Home</span></a>
                    </li>
                    <li class="nav-item active page mx-lg-5">
                        <a class="nav-link" href="#">Contest <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="winners.html">Past Winners</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="sponsor.html">Sponsor</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="volunteer.html">Volunteer</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>`;
                break;
            case 'winners.html':
                header += 
                    `<li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="../index.html">Home</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="contest.html">Contest</a>
                    </li>
                    <li class="nav-item active page mx-lg-5">
                        <a class="nav-link" href="#">Past Winners <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="sponsor.html">Sponsor</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="volunteer.html">Volunteer</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>`;
                break;
            case 'sponsor.html':
                header +=
                    `<li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="../index.html">Home</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="contest.html">Contest</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="winners.html">Past Winners</a>
                    </li>
                    <li class="nav-item active page mx-lg-5">
                        <a class="nav-link" href="#">Sponsor <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="volunteer.html">Volunteer</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>`;
                break;
            case 'volunteer.html':
                header +=
                    `<li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="../index.html">Home</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="contest.html">Contest</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="winners.html">Past Winners</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="sponsor.html">Sponsor</a>
                    </li>
                    <li class="nav-item active page mx-lg-5">
                        <a class="nav-link" href="#">Volunteer <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>`;
                break;
            case 'contact.html':
                header +=
                    `<li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="../index.html">Home</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="contest.html">Contest</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="winners.html">Past Winners</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="sponsor.html">Sponsor</a>
                    </li>
                    <li class="nav-item page mx-lg-5">
                        <a class="nav-link" href="volunteer.html">Volunteer</a>
                    </li>
                    <li class="nav-item active page mx-lg-5">
                        <a class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
                    </li>`;
                break;
        }
        header +=
            `</ul>
            </div>
            </nav>`;
    }
    $('.header').html(header);

    var index2 = (file == 'index.html') ? 'views/' : '';
    var home2 = (file == 'index.html') ? '<div class="row"><a href="#">Home</a></div>' : '<div class="row"><a href="../index.html">Home</a></div>';
    var contest2 = (file == 'contest.html') ? '<div class="row"><a href="#">Contest</a></div>' : '<div class="row"><a href="' + index2 + 'contest.html">Contest</a></div>';
    var winner2 = (file == 'winners.html') ? '<div class="row"><a href="#">Past Winners</a></div>' : '<div class="row"><a href="' + index2 + 'winners.html">Past Winners</a></div>';
    var sponsor2 = (file == 'sponsor.html') ? '<div class="row"><a href="#">Sponsor</a></div>' : '<div class="row"><a href="' + index2 + 'sponsor.html">Sponsor</a></div>';
    var volunteer2 = (file == 'volunteer.html') ? '<div class="row"><a href="#">Volunteer</a></div>' : '<div class="row"><a href="' + index2 + 'volunteer.html">Volunteer</a></div>';
    var contact2 = (file == 'contact.html') ? '<div class="row"><a href="#">Contact Us</a></div>' : '<div class="row"><a href="' + index2 + 'contact.html">Contact Us</a></div>';
    var footer = `        <div class="container">
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
                            <div class="row"><a href="mailto:coord.nwscvmathcounts@gmail.com"><img src="images/email_icon.png">coord.nwscvmathcounts@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </div>`


    $('.footer').html(footer);
    
})
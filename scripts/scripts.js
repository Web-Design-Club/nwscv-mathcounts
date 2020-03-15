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
})
<template>
    <!--loader start-->
    <!-- <div id="preloader">
        <div class="loader1"> -->
    <!-- <span>Tarikul Islam</span> -->
    <!-- <span></span>
            <span></span>
            <span></span>
            <span></span> -->
    <!-- </div>
    </div> -->
    <!--loader end-->
    <!--header section start-->
    <header id="header" class="header-main">

        <!--main header menu start-->
        <div id="logoAndNav" class="main-header-menu-wrap white-bg border-bottom">
            <div class="container">
                <nav class="js-mega-menu navbar navbar-expand-md header-nav">

                    <!--logo start-->
                    <router-link class="navbar-brand media-body" href="" :to="{ name: 'home' }"><img
                            src="@/assets/img/servicelogo.webp" width="120" alt="logo"
                            class="img-fluid" /></router-link>
                    <!--logo end-->

                    <!--responsive toggle button start-->
                    <button type="button" class="navbar-toggler btn" aria-expanded="false" aria-controls="navBar"
                        data-toggle="collapse" data-target="#navBar">
                        <span id="hamburgerTrigger">
                            <span class="fas fa-bars"></span>
                        </span>
                    </button>
                    <!--responsive toggle button end-->

                    <!--main menu start-->
                    <div id="navBar" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto main-navbar-nav">

                            <!-- tarikul start navbar section 1 -->
                            <!--Service start-->
                            <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="780px"
                                data-position="center">
                                <a id="hostingMegaMenu" class="nav-link custom-nav-link main-link-toggle"
                                    href="JavaScript:Void(0);" aria-haspopup="true" aria-expanded="false">Service</a>

                                <!-- Demos - Mega Menu -->
                                <div class="hs-mega-menu w-100 main-sub-menu" aria-labelledby="hostingMegaMenu">

                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <!--menu title with subtitle and icon item start-->
                                            <div class="title-with-icon-item">
                                                <router-link class="title-with-icon-link" href=""
                                                    :to="{ name: 'web-development' }">
                                                    <div class="media">
                                                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s2.svg" alt="com" class="img-fluid" />
                            </li>
                    </div>
                    
                    <div class="media-body">
                        <span class="u-header__promo-title">Web Development
                        </span>
                    </div>
            </div>
            </router-link>
        </div>

        <div class="title-with-icon-item">
            <router-link class="title-with-icon-link" href="" :to="{ name: 'ecommerce-development' }">
                <div class="media">
                    <div>
                        <li class="list-inline-item img-set">
                            <img src="@/assets/img/s1.svg" alt="com" class="img-fluid" />
                        </li>
                    </div>
                    <div class="media-body">
                        <span class="u-header__promo-title">Ecommer Website
                        </span>
                    </div>
                </div>
            </router-link>
        </div>
        </div>

        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'web-design' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s3.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Web Design</span>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'business-service' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s4.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Business Services
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="col-md-4">

            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'software-development' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s5.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Software
                                Devlopgg</span>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'wordpress-development' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s6.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">WordPress
                                Website</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'landing-page' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/ecom.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Landing Page
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'laravel-website' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s8.webp" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Laravel Website
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'app-development' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s9.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">App Development
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'software-development' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/c2.png" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Email Id
                            </span>
                            <span class="bg"> tarikulat124@gmail.com
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'software-development' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/c1.png" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Phone Number
                            </span>
                            <span class="bg"> +88 01793800828
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'software-development' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/c3.png" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Skype Id
                            </span>
                            <span class="bg"> tarikulat124@gmail.com
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        </div>
        </div>
        </li>
        <!--Service end-->

        <!--portfolio start-->
        <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="250px" data-position="center">
            <a id="hostingMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="JavaScript:Void(0);"
                aria-haspopup="true" aria-expanded="false">Portfolio</a>
            <div class="hs-mega-menu w-100 main-sub-menu" aria-labelledby="hostingMegaMenu">

                <div class="row no-gutters">
                    <div class="col-md-4">
                        <div class="title-with-icon-item">
                            <router-link class="title-with-icon-link" href="" :to="{ name: 'web-development' }">
                                <div class="media">
                                    <div>
        <li class="list-inline-item img-set">
            <img src="@/assets/img/h.png" alt="com" class="img-fluid" />
        </li>
        </div>
        <div class="media-body">
            <span class="u-header__promo-title">WordPress
            </span>
        </div>
        </div>
        </router-link>
        </div>

        <div class="title-with-icon-item">
            <router-link class="title-with-icon-link" href="" :to="{ name: 'ecommerce-development' }">
                <div class="media">
                    <div>
                        <li class="list-inline-item img-set">
                            <img src="@/assets/img/b.png" alt="com" class="img-fluid" />
                        </li>
                    </div>
                    <div class="media-body">
                        <span class="u-header__promo-title">Laravel
                        </span>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="title-with-icon-item">
            <router-link class="title-with-icon-link" href="" :to="{ name: 'ecommerce-development' }">
                <div class="media">
                    <div>
                        <li class="list-inline-item img-set">
                            <img src="@/assets/img/ee .png" alt="com" class="img-fluid" />
                        </li>
                    </div>
                    <div class="media-body">
                        <span class="u-header__promo-title">Landing Page
                        </span>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="title-with-icon-item">
            <router-link class="title-with-icon-link" href="" :to="{ name: 'ecommerce-development' }">
                <div class="media">
                    <div>
                        <li class="list-inline-item img-set">
                            <img src="@/assets/img/e (2).png" alt="com" class="img-fluid" />
                        </li>
                    </div>
                    <div class="media-body">
                        <span class="u-header__promo-title">Ecommerce
                        </span>
                    </div>
                </div>
            </router-link>
        </div>

        </div>
        </div>
        </div>
        </li>
        <!--portfolio end-->

        <!--Technology start-->
        <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="680px" data-position="center">
            <a id="hostingMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="JavaScript:Void(0);"
                aria-haspopup="true" aria-expanded="false">Technology</a>
            <div class="hs-mega-menu w-100 main-sub-menu" aria-labelledby="hostingMegaMenu">

                <div class="row no-gutters">
                    <div class="col-md-4">
                        <div class="title-with-icon-item">
                            <router-link class="title-with-icon-link" href="" :to="{ name: 'web-development' }">
                                <div class="media">
                                    <div>
        <li class="list-inline-item img-set">
            <img src="@/assets/img/s2.svg" alt="com" class="img-fluid" />
        </li>
        </div>
        <div class="media-body">
            <span class="u-header__promo-title">PHP
            </span>
        </div>
        </div>
        </router-link>
        </div>

        <div class="title-with-icon-item">
            <router-link class="title-with-icon-link" href="" :to="{ name: 'ecommerce-development' }">
                <div class="media">
                    <div>
                        <li class="list-inline-item img-set">
                            <img src="@/assets/img/s1.svg" alt="com" class="img-fluid" />
                        </li>
                    </div>
                    <div class="media-body">
                        <span class="u-header__promo-title">Laravel
                        </span>
                    </div>
                </div>
            </router-link>
        </div>
        </div>

        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'web-design' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s3.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Vue js</span>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'business-service' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s4.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">React js
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'software-development' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s5.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">MySQL</span>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'wordpress-development' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s6.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">HTML</span>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'landing-page' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s7.png" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">CSS
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'laravel-website' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s8.webp" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">Boostrap
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
        <div class="col-md-4">
            <div class="title-with-icon-item">
                <router-link class="title-with-icon-link" href="" :to="{ name: 'app-development' }">
                    <div class="media">
                        <div>
                            <li class="list-inline-item img-set">
                                <img src="@/assets/img/s9.svg" alt="com" class="img-fluid" />
                            </li>
                        </div>
                        <div class="media-body">
                            <span class="u-header__promo-title">CodeIgniter
                            </span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        </div>
        </div>
        </li>
        <!--Technology end-->

        <!--about start-->
        <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="250px" data-position="right">
            <a id="aboutMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="JavaScript:Void(0);"
                aria-haspopup="true" aria-expanded="false">About</a>

            <!--about submenu start-->
            <div class="hs-mega-menu main-sub-menu" aria-labelledby="aboutMegaMenu" style="min-width: 330px;">

                <!--menu title with subtitle and icon item start-->
                <div class="title-with-icon-item">
                    <a class="title-with-icon-link" href="contact-us.html">
                        <div class="media align-items-center">
                            <img class="menu-titile-icon" src="@/assets/img/chat-mobile.svg" alt="SVG">
                            <div class="media-body">
                                <span class="u-header__promo-title">Contact Us</span>
                                <small class="u-header__promo-text">Face any problem contact with us
                                </small>
                            </div>
                        </div>
                    </a>
                </div>
                <!--menu title with subtitle and icon item end-->

                <!--menu title with subtitle and icon item start-->
                <div class="title-with-icon-item">
                    <a class="title-with-icon-link" href="about-us.html">
                        <div class="media align-items-center">
                            <img class="menu-titile-icon" src="@/assets/img/community.svg" alt="SVG">
                            <div class="media-body">
                                <span class="u-header__promo-title">About Us</span>
                                <small class="u-header__promo-text">We are leading hosting company
                                </small>
                            </div>
                        </div>
                    </a>
                </div>
                <!--menu title with subtitle and icon item end-->

                <!--menu title with subtitle and icon item start-->
                <div class="title-with-icon-item">
                    <a class="title-with-icon-link" href="reviews.html">
                        <div class="media align-items-center">
                            <img class="menu-titile-icon" src="@/assets/img/user-behaver.svg" alt="SVG">
                            <div class="media-body">
                                <span class="u-header__promo-title">Client Testimonial</span>
                                <small class="u-header__promo-text">More than 100k lovly customer
                                </small>
                            </div>
                        </div>
                    </a>
                </div>
                <!--menu title with subtitle and icon item end-->

                <!--menu title with subtitle and icon item start-->
                <div class="title-with-icon-item">
                    <a class="title-with-icon-link" href="partners.html">
                        <div class="media align-items-center">
                            <img class="menu-titile-icon" src="@/assets/img/partner.svg" alt="SVG">
                            <div class="media-body">
                                <span class="u-header__promo-title">Our Partner</span>
                                <small class="u-header__promo-text">We have trusted partners
                                    globally
                                </small>
                            </div>
                        </div>
                    </a>
                </div>
                <!--menu title with subtitle and icon item end-->

                <!--menu title with subtitle and icon item start-->
                <div class="title-with-icon-item">
                    <a class="title-with-icon-link" href="network.html">
                        <div class="media align-items-center">
                            <img class="menu-titile-icon" src="@/assets/img/network.svg" alt="SVG">
                            <div class="media-body">
                                <span class="u-header__promo-title">Network</span>
                                <small class="u-header__promo-text">Keep your data save and secure
                                </small>
                            </div>
                        </div>
                    </a>
                </div>
                <!--menu title with subtitle and icon item end-->

                <!--menu title with subtitle and icon item start-->
                <div class="title-with-icon-item">
                    <a class="title-with-icon-link" href="blog-grid.html">
                        <div class="media align-items-center">
                            <img class="menu-titile-icon" src="@/assets/img/blog.svg" alt="SVG">
                            <div class="media-body">
                                <span class="u-header__promo-title">Company Blog</span>
                                <small class="u-header__promo-text">Industry latest technology news
                                </small>
                            </div>
                        </div>
                    </a>
                </div>
                <!--menu title with subtitle and icon item end-->

                <!--submenu footer start-->
                <div class="u-header__promo-footer pb-0">
                    <!-- List -->
                    <div class="row no-gutters align-bottom">
                        <div class="col-9">
                            <div class="u-header__promo-footer-item">
                                <span class="u-header__promo-title">CEO Video Message</span>
                                <p class="small d-inline-flex">Credibly synergize unique... <a
                                        href="https://www.youtube.com/watch?v=9No-FiEInLA"
                                        class="popup-youtube video-play-icon"><span class="ti-control-play"></span> </a>
                                </p>

                            </div>
                        </div>
                        <div class="col-3">
                            <div class="d-flex align-bottom">
                                <img src="@/assets/img/ceo.png" width="300" alt="ceo" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <!-- End List -->
                </div>
                <!--submenu footer end-->
            </div>
            <!--about submenu end-->
        </li>
        <!--about end-->

        <!--Case Studies start-->
        <!-- <li class="nav-item header-nav-last-item d-flex align-items-center">
            <a class="" href="#" target="_blank">
                Case Studies
            </a>
        </li> -->
        <li class="nav-item hs-has-mega-menu custom-nav-item" data-max-width="250px" data-position="right">
            <a id="aboutMegaMenu" class="nav-link custom-nav-link" href="JavaScript:Void(0);" aria-haspopup="true"
                aria-expanded="false">Case Studies</a>
        </li>
        <!--Case Studies end-->

        <!--button start-->
        <li class="nav-item header-nav-last-item d-flex align-items-center">
            <a class="btn primary-solid-btn animated-btn" href="#" target="_blank">
                Get Started
            </a>
        </li>
        <!--button end-->
        </ul>
        </div>
        <!--main menu end-->
        </nav>
        </div>
        </div>
        <!--main header menu end-->
    </header>
    <!--header section end-->
</template>

<script setup>

</script>

<style>
.img-set {
    width: 45px;
    padding-right: 15px;
}

.bg {
    background-color: rgb(221, 210, 210);
}
</style>
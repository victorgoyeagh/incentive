import { scrollTo as ScrollTo } from "./modules/ScrollCtrl";
import { menuCtrl as MenuCtrl } from "./modules/MenuCtrl";
import { windowHelper as WindowHelper } from "./modules/HelperFunctions";

//react
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Link } from "react-router";

import { main as Main } from "./pages/Main";
import { general as General } from "./pages/General";
import { modules as Modules } from "./pages/ModulesContainer";
import { forms as Forms } from "./pages/Forms";
import { mainContainer as MainContainer } from "./pages/MainContainer";
import { modulesHome as ModulesHome } from "./pages/ModulesHome";
import { contactList as ContactList } from "./pages/ContactList";

//site routes
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainContainer}>
            <IndexRoute component={Main} />
            <Route path="general" component={General} />
            <Route path="modules" component={Modules}>
                <IndexRoute component={ModulesHome} />
                <Route path="contactlist" component={ContactList} />
            </Route>
            <Route path="forms" component={Forms} />
        </Route>
    </Router>,
    document.getElementById("main")
);

//attach scroll func to top button
//new ScrollTo("js-scrollTop", 0);

//apply responsive bootstrap menu
new MenuCtrl("toggleBtn", "toggleNav", "toggleHeader", "toggleMain", true);


    function initCustomScrollbar() {
        var ww = $(window).width();
        var scrollPane = $(".scroll-content");
        var scrollPaneInit = $(scrollPane).mCustomScrollbar();

        setTimeout(function () {
            var scrollInnerPane = $(scrollPane).find(".mCustomScrollBox");
            $(scrollInnerPane).height(window.innerHeight + "px");
        }, 500);

        $(window).resize(function () {
            if (window.innerWidth < 960) {
                initCustomScrollbar();
            } else {
                $(scrollPane).mCustomScrollbar('destroy');
            }
        });
    }
   
    $(function(){
        initCustomScrollbar();
    });

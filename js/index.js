window.onload = function(){    
    if(getBrowserInfo().includes("Safari"))
    {
        console.log("Navegador Safari");
        const head = document.querySelector("head");
        addStyles(head);
        console.log(head);
    }
}

addStyles = function(head){
    var new_item = document.createElement("link");
    new_item.setAttribute("rel","stylesheet");
    new_item.setAttribute("href","//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css");
    head.appendChild(new_item);
    new_item = document.createElement("link");
    new_item.setAttribute("rel","stylesheet");
    new_item.setAttribute("href","/resources/demos/style.css");
    head.appendChild(new_item);
    new_item = document.createElement("script");
    new_item.setAttribute("src","https://code.jquery.com/jquery-1.12.4.js");
    head.appendChild(new_item);
    new_item = document.createElement("script");
    new_item.setAttribute("src","https://code.jquery.com/ui/1.12.1/jquery-ui.js");
    head.appendChild(new_item);
    new_item = document.createElement("script");
    new_item.setAttribute("src","./js/dp.js");
    head.appendChild(new_item);
};

getBrowserInfo = function() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
};

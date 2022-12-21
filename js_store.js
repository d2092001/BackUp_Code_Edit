// let code_check = /[a-z][a-z][a-z][a-z][a-z]:\D\D[a][m][i][s]\D[m][i][s][a]\D[v][n]\D/gm;
// let code_check = /amis.misa.vn/g;
// const regex = new RegExp('foo*');
// const globalRegex = new RegExp('/amis.misa.vn/', 'g');

// var urls = document.querySelectorAll(" div.td-post-content.tagdiv-type > p a")
// for (let i = 0; i < urls.length; i++) {
//     url = urls[i].getAttribute('href')
//     // Trường hợp intenal link
//     if(globalRegex.test(url)){
//         urls[i].classList.add("by_martech");
//     }
//   }
// let code_check = /[a-z][a-z][a-z][a-z][a-z]:\D\D[a][m][i][s]\D[m][i][s][a]\D[v][n]\D/gm;
jQuery(document).ready(function () {
    var urls = document.querySelectorAll(" div.td-post-content.tagdiv-type > p a");
    for (let i = 0; i < urls.length; i++) {
        url = urls[i].getAttribute("href");
        // Trường hợp intenal link
        if (url.search("amis.misa.vn") != -1) {
            if (url.search("https://amis.misa.vn/register/") != -1) {
                urls[i].setAttribute("name","mat_blog_to_register");
            }
            if (url.match(/\d/)) {
                urls[i].setAttribute("name","mat_blog_to_post");
            }else
            {
                urls[i].setAttribute("name","mat_blog_to_productpage");
            }
        } else {
            if (url.search("google") != -1) {
                urls[i].setAttribute("name","mat_blog_to_download");
            }
            else{
                urls[i].setAttribute("name","mat_blog_to_other");
            }
        }
    }
})


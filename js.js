function changeImg(e){
    // b1 thực hiện random số từ 0 đến 1, muốn random từ a đến b thì (random*b + a)
    // lấy radom từ 1 cho đến 3
    let
    let a = Math.floor(Math.random()*3+1);
    // alert(a);
    // lấy đường dẫn ảnh
    let partImg = 'a' + nameImg + '_p2.img';
    document.getElementById('p1').setAttribute('src',partImg);
}
/* hoạt động check xem có thắng hay không

 */
function checkWin(){
    let p1 = document.getElementById('p1').getAttribute('src').substr(0,2);
    let p2 = document.getElementById('p2').getAttribute('src').substr(0,2);
    let p3 = document.getElementById('p3').getAttribute('src').substr(0,2);

}

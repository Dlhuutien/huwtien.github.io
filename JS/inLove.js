// Dem ngay
const yourDate = new Date("2023-04-02T00:00:00"),
music = ['ido', 'noinaycoanh', 'nguoiamphu'];

document.addEventListener('DOMContentLoaded', function(){
    var rootTime = document.querySelector("time");
    document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
    
    document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";
    function olock() {
        var today = new Date(),
        hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
        min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
        sec =  Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    } olock();
    var timer = setInterval(function(){olock()}, 1000);
    document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);
    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<div id='mask'></div>"
    );
}, false);

// Ngay hien hanh
document.addEventListener('DOMContentLoaded', function(){
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0, nên cần cộng thêm 1.
    var year = currentDate.getFullYear();
    var currentDateStr = `${day}/${month}/${year}`;
    document.querySelector("hientai").textContent = currentDateStr;
});


// Tính tuổi
// Huu Tien
const dateOfBirth = new Date("2003-08-29");
document.addEventListener('DOMContentLoaded', function(){
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dateOfBirth;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    document.querySelector("age").textContent = ageInYears.toString();
});
// Truc Ly
const dateOfBirth2 = new Date("2003-02-16");
document.addEventListener('DOMContentLoaded', function(){
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dateOfBirth2;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    document.querySelector("age2").textContent = ageInYears.toString();
});

// Header
var $content = $('header .content'), 
    $blur = $('header .overlay'), 
    wHeight = $(window).height();

$(window).on('resize', function(){
    wHeight = $(window).height();
});

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ){
        window.setTimeout(callback, 1000 / 60);
    };
})();

function Scroller(){
    this.latestKnownScrollY = 0;
    this.ticking = false;
}

Scroller.prototype = {
    init: function() {
        window.addEventListener('scroll', this.onScroll.bind(this), false);
        $blur.css('background-image',$('header:first-of-type').css('background-image'));
    },
    onScroll: function() {
        this.latestKnownScrollY = window.scrollY;
        this.requestTick();
    },

    requestTick: function() {
        if( !this.ticking ) {
            window.requestAnimFrame(this.update.bind(this));
        }
        this.ticking = true;
    },

    update: function() {
        var currentScrollY = this.latestKnownScrollY;
        this.ticking = false;
        var slowScroll = currentScrollY / 2,
        blurScroll = currentScrollY * 2,
        opaScroll = 1.4 - currentScrollY / 400;
    if(currentScrollY > wHeight)
        $('nav').css('position','fixed');
    else
        $('nav').css('position','absolute');
    
    $content.css({
        'transform'         : 'translateY(' + slowScroll + 'px)',
        '-moz-transform'    : 'translateY(' + slowScroll + 'px)',
        '-webkit-transform' : 'translateY(' + slowScroll + 'px)',
        'opacity' : opaScroll
    });
    
    $blur.css({
        'opacity' : blurScroll / wHeight
    });
  }
};

var scroller = new Scroller();  
scroller.init();
// 


function showNews(type) {
    // Lấy tin tức từ local storage
    let news = localStorage.getItem(type);

    // Hiển thị tin tức
    let newsDiv = document.getElementById('news');
    newsDiv.innerHTML = news;
}
var val_Home = '<div class="chitiet"><br>'
    + '<h3 style="color: #fcbc30;">Sản phẩm bán chạy nhất trong tuần</h3><br>'
    + '<h3 class="h3-title">Bánh Tart Aperol</h3><br>'
    + '<a href="../images/cake/APEROLSPRITZTART_01.jpg" data-fancybox="table-slider"><img src="../images/cake/APEROLSPRITZTART_01.jpg" alt="" width="290px"></a><br><br>'
    + '<b style="color: red;">99.000₫</b><br>'
    + '<p>-Mô tả: Bánh quy shortbread giòn, sốt cam trứng, mứt cam chanh, mứt phật thủ, thạch Aperol spritz.</p>'
    + '<p>- Bánh Tart Aperol có màu sắc rực rỡ và hấp dẫn với màu cam và trắng sữa của kem phô mai. Đây là loại bánh Tart rất thích hợp để làm món tráng miệng trong các bữa tiệc, dịp lễ tết hoặc để thưởng thức vào bất cứ thời điểm nào trong ngày.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày.</p>'
    + '</div>'
var val_Introduce = '<div class="profile1">'
    + '<img src="IMG/tien1.jpg" alt="" width="200px" style="float: left;">'
    + '<h1>Đặng Lê Hữu Tiến (Til)</h1>'
    + '<h2>29/08/2003</h2>'
    + '<h3>Cung: Xử nữ</h3>'
    + '<h3 style="font-size: 25px;"><age>0</age><span> tuổi</span></h3>'
    + '</div>'
    + '<div class="profile2">'
    + '<img src="IMG/ly1.jpg" alt="" width="200px" style="float: left;">'
    + '<h1>Nguyễn Thị Trúc Ly (Bé Lit)</h1>'
    + '<h2>16/02/2003</h2>'
    + '<h3>Cung: Bảo bình</h3>'
    + '<h3 style="font-size: 25px;"><age2>0</age2><span> tuổi</span></h3>'
    + '</div>'
var val_Story = '<div class="chitiet"><br>'
    + '<h3 style="color: #fcbc30;">Các sản phẩm được yêu thích</h3><br>'
    + '<h3 class="h3-title">1. Bánh Mousse Caramel I 12cm</h3><br>'
    + '<a href="../images/cake/CARAMEL4INCH.jpg" data-fancybox="table-slider"><img src="../images/cake/CARAMEL4INCH.jpg" alt="" width="290px"></a><br>'
    + '<b style="color: red;">395.000₫</b><br>'
    + '<p>- Mô tả: Bánh Mousse Caramel là một loại bánh ngọt phổ biến được làm từ lớp kem mousse nhẹ, mịn và béo, phủ lên trên bánh genoise (bánh mềm, nhẹ) và được trang trí với nước caramel và kem tươi.</p>'
    + '<p>- Bánh Mousse Caramel I 12cm là phiên bản nhỏ hơn của bánh Mousse Caramel gốc, có kích thước khoảng 12cm (đường kính). Bánh có màu nâu vàng đẹp mắt, với lớp kem mousse caramel mềm mịn và thơm ngon được bọc quanh bánh genoise nhẹ và giòn. Phía trên của bánh được trang trí với một lớp nước caramel ngọt ngào, tạo ra một hương vị cân bằng giữa ngọt và béo.</p>'
    + '<p>- Bánh Mousse Caramel I 12cm thường được phục vụ trong các bữa tiệc, dịp kỷ niệm, hoặc đơn giản là để thưởng thức trong những ngày cuối tuần hoặc khi bạn muốn thưởng thức một chiếc bánh ngọt đặc biệt.</p><br><br>'

    + '<h3 class="h3-title">2. Bánh Tart Aperol</h3><br>'
    + '<a href="../images/cake/APEROLSPRITZTART_01.jpg" data-fancybox="table-slider"><img src="../images/cake/APEROLSPRITZTART_01.jpg" alt="" width="290px"></a><br><br>'
    + '<b style="color: red;">99.000₫</b><br>'
    + '<p>- Mô tả: Bánh quy shortbread giòn, sốt cam trứng, mứt cam chanh, mứt phật thủ, thạch Aperol spritz.</p>'
    + '<p>- Bánh Tart Aperol có màu sắc rực rỡ và hấp dẫn với màu cam và trắng sữa của kem phô mai. Đây là loại bánh Tart rất thích hợp để làm món tráng miệng trong các bữa tiệc, dịp lễ tết hoặc để thưởng thức vào bất cứ thời điểm nào trong ngày.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm thủ công hàng ngày bởi đội ngũ thợ làm bánh đầy nhiệt huyết được đào tạo tại Pháp bằng cách sử dụng những nguyên liệu tốt nhất, từ trái cây địa phương (hữu cơ khi chúng tôi có thể), bơ Pháp, sô cô la Bỉ, đồng thời không chứa phẩm màu và hóa chất.</p>'
    + '<p>- Bánh ngọt của chúng tôi được làm bằng nguyên liệu tươi và 0 chất bảo quản. Chúng ngon nhất khi được ăn trong cùng một ngày. Nếu ăn không hết có thể để tối đa 2-3 ngày.</p><br><br>'

    + '<h3 class="h3-title">3. Raspberry Tiramisu</h3><br>'
    + '<a href="../images/cake/RASPBERRYTIRAMISU1.jpg" data-fancybox="table-slider"><img src="../images/cake/RASPBERRYTIRAMISU1.jpg" alt="" width="290px"></a><br>'
    + '<b style="color: red;">110.000₫</b><br>'
    + '<p>- Mô tả: Bánh Raspberry Tiramisu là một loại bánh phô mai truyền thống của Ý, được làm từ các lớp bánh mì xốp ngập đầy hương vị cà phê và kem phô mai truyền thống. Bánh còn có thêm lớp raspberry (quả mâm xôi) tươi thêm hương vị thanh mát và tạo điểm nhấn đặc biệt cho bánh.</p>'
    + '<p>- Các nguyên liệu chính để làm bánh Raspberry Tiramisu gồm: bánh mì xốp, kem phô mai, trứng, đường, cà phê, rượu và các loại trái cây tùy chọn như raspberry. Đầu tiên, bánh mì xốp sẽ được cắt thành các miếng nhỏ hơn và ngâm trong hỗn hợp cà phê và rượu để tạo độ ẩm và hương vị cho bánh.</p>'
    + '<p>- Sau đó, lớp kem phô mai sẽ được làm bằng cách đánh trứng với đường cho đến khi đạt được kết cấu mịn và nhẹ. Sau đó, kem phô mai này sẽ được thêm vào các miếng bánh mì xốp đã ngâm và lớp raspberry để tạo thành các tầng bánh.</p>'
    + '<p>- Bánh Raspberry Tiramisu thường được trang trí với lớp phô mai và một vài quả raspberry tươi để tạo ra một bánh trang trí đẹp mắt và hấp dẫn. Khi ăn, bánh sẽ mang lại hương vị ngọt ngào của kem phô mai, hương vị cà phê đắng nhẹ và vị thanh mát của quả mâm xôi.</p>'
    + '</div>'


localStorage.setItem('Home', val_Home);
localStorage.setItem('Introduce', val_Introduce);
localStorage.setItem('Story', val_Story);

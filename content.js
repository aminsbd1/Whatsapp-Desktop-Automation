function enter() {
    setTimeout(function() {
        //fungsi untuk click button send
        document.getElementsByClassName('_3M-N-')[0].click();
    }, 2000);
}

let phone = ['6282244252383', '62895358427436']; // nomor WA
let text = "Selamat Siang Kak, Mau Konfirmasi Apa Benar Ini Pemilik Nomor ";

let i = 0,
    max = phone.length;

function f() {
    let data = document.createElement('a');
    data.href = "https://web.whatsapp.com/send?phone=" + phone[i] + "&text=" + text + phone[i] + "&source&data";
    data.id = "hp-" + i;
    data.setAttribute('onclick', 'enter()');
    document.body.appendChild(data);

    //eksekusi click to phone number
    document.getElementById("hp-" + i).click();
    i++;
    if (i < max) {
        setTimeout(f, 4000);
    }
}
f();
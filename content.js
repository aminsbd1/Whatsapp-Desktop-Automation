function enter() {
    setTimeout(function() {
        //click button send
        document.getElementsByClassName('_3M-N-')[0].click();
    }, 2000);
}

let array = ['6282244252383', '62895358427436'];
let text = ['Halo Satu', 'Halo Dua'];

let i = 0,
    max = 2;

function f() {
    let data = document.createElement('a');
    data.href = "https://web.whatsapp.com/send?phone=" + array[i] + "&text=" + text[i] + "&source&data";
    data.id = "hp-" + i;
    data.setAttribute('onclick', 'enter()');

    document.body.appendChild(data);
    document.getElementById("hp-" + i).click();

    i++;
    if (i < max) {
        setTimeout(f, 4000);
    }
}
f();
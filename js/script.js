// Ini js

//  Untuk membuat nama user 
replaceName();

function replaceName() {
    let name = prompt('Masukkan nama anda');
    console.log(name);
    document.getElementById('user-name').innerHTML = name;
}

// Form Validasi
function validateForm() {
    let inputName = document.getElementById('input-name').value;
    let tglLhr = document.getElementById("tanggal-lahir").value;
    let jKlmn = document.getElementsByName('jenis-kelamin');
    let inputMessage = document.getElementById("input-message").value;

    if (inputName == '') {
        alert('Nama harus di isi!');
    } else {
        // Periksa apakah tanggal lahir kosong
        if (tglLhr == '') {
            alert('Tanggal lahir kosong!');
        }if (inputMessage == '') {
            alert('pesan harus di isi!');
        } else {
            // Periksa apakah jenis kelamin dipilih
            let jenisKelamin = '';
            for (let i = 0; i < jKlmn.length; i++) {
                if (jKlmn[i].checked) {
                    jenisKelamin = jKlmn[i].value;
                    break;
                }
            }
            if (jenisKelamin == '') {
                alert('Jenis kelamin belum dipilih');
            } else {
                document.getElementById('result-nama').innerHTML = inputName;
                document.getElementById('result-tanggal-lahir').innerHTML = tglLhr;
                document.getElementById('result-jenis-kelamin').innerHTML = jenisKelamin;
                document.getElementById('result-pesan').innerHTML = inputMessage;

                alert('Sukses Submit Form');
            }
        }
    }
}

let indexSlide = 1;
showSlide();

// function untuk membuat gambar slide nya berpindah otomatis
function nextSlide(n) {
    showSlide(indexSlide += n);
}

//  function untuk menampilkan slide slider
function showSlide(index) {

    // Get DOM semua image banner 
    let listImage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide);
    console.log(listImage);

    // Reset index Slide
    if (index > listImage.length) indexSlide = 1;
    
    // Untuk menyembunyikan semua gambar
    let i = 0;
    while (i< listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    // Show Selected Image
    listImage[indexSlide - 1].style.display = 'block';
    
}

// untuk mengatur watku banner otomatis
setInterval(() => nextSlide(1), 2000);

// materi kak alvian
// var sliderIndex = 1;
// showDivs(sliderIndex)

// function showDivs() {
//     var i;
//     var x = document.getElementsByClassName("photo-banner")
//     console.log(x);
// }
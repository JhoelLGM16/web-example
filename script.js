document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();
if(nama.value==="" || email.value==="" || pesan.value===""){
alert("Semua field wajib diisi");
} else {
alert("Pesan berhasil dikirim");
this.reset();
}
});
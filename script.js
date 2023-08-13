function result() {
  // get data inputan
  const birthdayInput = document.querySelector(".birthday");
  const birthday = birthdayInput.value;

  // get data tahun sekarang
  const nowYear = new Date().getFullYear();
  const age = nowYear - birthday;

  // hasil calculate`
  const chekResult = document.querySelector(".chek-result");
  chekResult.innerHTML = "Usia Anda Sekarang " + age + " Tahun";
}

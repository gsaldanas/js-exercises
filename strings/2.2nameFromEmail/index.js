const email = "gaspar.saldana@gmail.com";
const result = email
  .slice(0, email.indexOf("@"))
  .split(".")
  .join(" ")
  .toUpperCase();
console.log(result);
console.log(`De eigenaar van ${email} heet ${result}`);

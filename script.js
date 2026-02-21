function login() {
  const user = username.value.trim();
  const pass = password.value.trim();

  if (!user || !pass) {
    Swal.fire({
      icon: "warning",
      title: "Missing Information",
      text: "Please enter username and password"
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Login Successful",
    timer: 1200,
    showConfirmButton: false
  });

  setTimeout(() => {
    loginPage.style.display = "none";
    dashboardPage.style.display = "block";
  }, 1200);
}

function logout() {
  Swal.fire({
    icon: "question",
    title: "Logout?",
    showCancelButton: true,
    confirmButtonText: "Yes"
  }).then(result => {
    if (result.isConfirmed) location.reload();
  });
}

function showSection(section) {
  personsSection.style.display = section === "persons" ? "block" : "none";
  aboutSection.style.display = section === "about" ? "block" : "none";
}

function savePerson() {
  const f = fname.value.trim();
  const m = mname.value.trim();
  const l = lname.value.trim();
  const a = age.value.trim();
  const e = email.value.trim();

  if (!f || !l || !a || !e) {
    Swal.fire({
      icon: "warning",
      title: "Incomplete Form",
      text: "Please fill all required fields"
    });
    return;
  }

  tableBody.innerHTML += `
    <tr>
      <td>${f}</td>
      <td>${m}</td>
      <td>${l}</td>
      <td>${a}</td>
      <td>${e}</td>
    </tr>
  `;

  Swal.fire({
    icon: "success",
    title: "Saved!",
    timer: 1000,
    showConfirmButton: false
  });

  fname.value = mname.value = lname.value = age.value = email.value = "";
}

$(document).ready(() => {
  emailMethod();
  auth();
});

function emailMethod() {
  $.validator.addMethod(
    "customEmail",
    (value, element) => {
      return (
        this.optional(element) ||
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        )
      );
    },
    "Please enter valid email address!"
  );
}

function auth() {
  const $form = $("#form");

  if ($form.length) {
    $form.validate({
      rules: {
        userName: {
          required: true,
        },
        email: {
          required: true,
          customEmail: true,
        },
        password: {
          required: true,
        },
      },
      messages: {
        userName: {
          required: "Please enter username!",
        },
        email: {
          required: "Please enter email!",
          email: "Please enter valid email!",
        },
        password: {
          required: "Please enter password!",
        },
      },
    });
  }
}

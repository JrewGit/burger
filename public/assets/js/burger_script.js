$(document).ready(() => {
    $('.clicked').on('click', function () {
      const devour = $(this).attr('devoured');
      const id = $(this).attr('id');
      $.ajax({
        method: 'PUT',
        url: `/${devour}`,
        data: {
          devour: id,
        },
      }).then((res) => {
        location.reload();
      });
    });
  });
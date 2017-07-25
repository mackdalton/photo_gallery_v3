$("#search").keyup(function(){

  var current_query = $("#search").val().toLowerCase();

      if (current_query != "") {
        $(".gallery a").hide();

      $(".gallery a").each(function(){

        var current_keyword = $(this).attr("data-title");

        if (current_keyword.indexOf(current_query) >= 0) {
          $(this).show();
        }

      });
    } else {
      $(".gallery a").show();
    }


});
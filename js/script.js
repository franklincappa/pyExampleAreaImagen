$(document).ready(function () {
   $("#especialidad").on("change", function () {
      
      if ($(this).val() == 'medicina') {

         $('#examenFisico').html(`<select name="human" id="human" class="form-select">
         <option>Seleccionar Examen fisico</option>
         <option value="humanf" data-img="img/hombref.jpg" data-img2="img/mujerf.png">examen frontal</option>
         <option value="humanp" data-img="img/hombrep.jpg" data-img2="img/mujerp.png">examen posterior</option>
      </select>
      <input type="hidden" value="`+ $(this).val() + `" id="medi_pe">`)

      }

      if ($(this).val() == 'pediatria') {
         $('#examenFisico').html(`<select name="human" id="human" class="form-select">
         <option>Seleccionar Examen fisico</option>
         <option value="humanf" data-img="img/ninof.jpg" data-img2="img/ninaf.jpg">examen frontal</option>
         <option value="humanp" data-img="img/ninop.jpg" data-img2="img/ninap.jpg">examen posterior</option>
      </select>
      <input type="hidden" value="`+ $(this).val() + `" id="medi_pe">`)
      }

      $("#human").on("change", function () {

         if ($('#medi_pe').val() == 'medicina' || $('#medi_pe').val() == 'pediatria') {
            $('#sexo').html(`<div class="form-check form-check-inline mt-2">
            <input class="form-check-input" type="radio" name="sexo" id="hombre" value="hombre">
            <label class="form-check-label" for="hombre">Hombre</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="sexo" id="mujer" value="mujer">
            <label class="form-check-label" for="mujer">Mujer</label>
          </div>`)
         }

         $("input[type=radio][name=sexo]").on("change", function () {
            if ($('#medi_pe').val() == 'medicina') {
               if ($('#human').val() == 'humanf') {
                  if ($(this).val() == 'hombre') {
                     imagep = $('select[name=human] option:selected').attr('data-img');

                     $('#humanImg').html('<img src="' + imagep + '" id="humanp" height="1007" usemap="#myMap" class="map">')

                     $('.map').maphilight();
                     
                  }
                  if ($(this).val() == 'mujer') {
                     imagep = $('select[name=human] option:selected').attr('data-img2');

                     $('#humanImg').html('<img src="' + imagep + '" id="humanp" height="450">')
                  }
               }
               if ($('#human').val() == 'humanp') {
                  if ($(this).val() == 'hombre') {
                     imagep = $('select[name=human] option:selected').attr('data-img');

                     $('#humanImg').html('<img src="' + imagep + '" id="humanp" height="450">')
                  }
                  if ($(this).val() == 'mujer') {
                     imagep = $('select[name=human] option:selected').attr('data-img2');

                     $('#humanImg').html('<img src="' + imagep + '" id="humanp" height="450">')
                  }
               }
            }

            if ($('#medi_pe').val() == 'pediatria') {
               if ($('#human').val() == 'humanf') {
                  if ($(this).val() == 'hombre') {
                     imagep = $('select[name=human] option:selected').attr('data-img');
                    
                     $('#humanImg').html('<img src="' + imagep + '" id="humanp" height="450">')
                  }
                  if ($(this).val() == 'mujer') {
                     imagep = $('select[name=human] option:selected').attr('data-img2');

                     $('#humanImg').html('<img src="' + imagep + '" id="humanp" height="450">')
                  }
               }
               if ($('#human').val() == 'humanp') {
                  if ($(this).val() == 'hombre') {
                     imagep = $('select[name=human] option:selected').attr('data-img');

                     $('#humanImg').html('<img src="' + imagep + '" id="humanp" height="450">')
                  }
                  if ($(this).val() == 'mujer') {
                     imagep = $('select[name=human] option:selected').attr('data-img2');

                     $('#humanImg').html('<img src="' + imagep + '" id="humanp" height="450">')
                  }
               }
            }
         })
      })
   })

   
   $(".area").on("click", function (e) {
      e.preventDefault();
      var title = $(this).attr('title');
      $('.card-header > span').html(title);
   });
})
this["templates"] = this["templates"] || {};
this["templates"]["404"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"/step1\">Start</a>\n";
},"useData":true});
this["templates"]["final"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"final-card\">\n  <div class=\"final-card__info\">\n    <div class=\"info__personal\">\n      <span class=\"card-name\">Александр Александрович</span>\n      <span class=\"card-email\">alex@lun.ua</span>\n    </div>\n    <div class=\"info__location\">\n      <span class=\"card-location\">Киев, Украина</span>\n    </div>\n    <div class=\"info__social\">\n      <span class=\"card-fb\">Facebook: fb.com/alex</span>\n      <span class=\"card-vk\">Twitter: twitter.com/alex</span>\n      <span class=\"card-tw\"></span>\n      <span class=\"card-ok\"></span>\n    </div>\n  </div>\n  <div class=\"final-card__image\">\n    <img class=\"card-img\" src=\"img/cat1.jpg\" alt=\"\">\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["step1"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form\">\n  <div class=\"form__pag-num\">\n    <a class=\"pag-num__page\" data-value=\"1\">1</a>\n    <a class=\"pag-num__page\" data-value=\"2\">2</a>\n    <a class=\"pag-num__page\" data-value=\"3\">3</a>\n    <a class=\"pag-num__page\" data-value=\"4\">4</a>\n  </div>\n  <div class=\"form__description\">\n    <span>1. Введите имя и e-mail</span>\n  </div>\n  <div class=\"form__user-interaction\">\n    <div class=\"user-interaction__item\">\n      <div class=\"input\">\n        <input type=\"text\" name=\"name\" placeholder=\"Имя\">\n      </div>\n      <span id=\"name-error\" class=\"not-valid-msg display-none\">&#8212; некорректное имя</span>\n    </div>\n    <div class=\"user-interaction__item\">\n      <div class=\"input\">\n        <input type=\"email\" name=\"email\" placeholder=\"E-mail\">\n      </div>\n      <span id=\"email-error\" class=\"not-valid-msg display-none\">&#8212; некорректный адрес эл. почты</span>\n    </div>\n  </div>\n  <div class=\"form__pag-nav\">\n    <a id=\"prev\" class=\"pag-nav\"><i class=\"material-icons\">keyboard_arrow_left</i> Предыдущий</a>\n    <a id=\"next\" class=\"pag-nav\">Следующий <i class=\"material-icons\">keyboard_arrow_right</i></a>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["step2"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form\">\n  <div class=\"form__pag-num\">\n    <a class=\"pag-num__page\" data-value=\"1\">1</a>\n    <a class=\"pag-num__page\" data-value=\"2\">2</a>\n    <a class=\"pag-num__page\" data-value=\"3\">3</a>\n    <a class=\"pag-num__page\" data-value=\"4\">4</a>\n  </div>\n  <div class=\"form__description\">\n    <span>2. Выберите страну и город</span>\n  </div>\n  <div class=\"form__user-interaction\">\n    <select name=\"\"></select>\n    <select name=\"\"></select>\n  </div>\n  <div class=\"form__pag-nav\">\n    <a id=\"prev\" class=\"pag-nav\"><i class=\"material-icons\">keyboard_arrow_left</i> Предыдущий</a>\n    <a id=\"next\" class=\"pag-nav\">Следующий <i class=\"material-icons\">keyboard_arrow_right</i></a>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["step3"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form\">\n  <div class=\"form__pag-num\">\n    <a class=\"pag-num__page\" data-value=\"1\">1</a>\n    <a class=\"pag-num__page\" data-value=\"2\">2</a>\n    <a class=\"pag-num__page\" data-value=\"3\">3</a>\n    <a class=\"pag-num__page\" data-value=\"4\">4</a>\n  </div>\n  <div class=\"form__description\">\n    <span>3. Отметьте социальные сети</span>\n  </div>\n  <div class=\"form__user-interaction\">\n    <div class=\"social-networks\">\n      <div class=\"social-networks__item\">\n        <div>\n          <input type=\"checkbox\" name=\"check_fb\">\n          <span>Facebook</span>\n        </div>\n        <div>\n        <input class=\"display-none\" type=\"text\" name=\"input_fb\" placeholder=\"Ваша страница в Facebook\">\n        </div>\n      </div>\n      <div class=\"social-networks__item\">\n        <div>\n          <input type=\"checkbox\" name=\"check_vk\">\n          <span>Вконтакте</span>\n        </div>\n        <div>\n        <input class=\"display-none\" type=\"text\" name=\"input_vk\" placeholder=\"Ваша страница в Vkontakte\">\n      </div>\n      </div>\n      <div class=\"social-networks__item\">\n        <div>\n          <input type=\"checkbox\" name=\"check_tw\">\n          <span>Twitter</span>\n        </div>\n        <div>\n        <input  class=\"display-none\" type=\"text\" name=\"input_tw\" placeholder=\"Ваша страница в Twitter\">\n        </div>\n      </div>\n      <div class=\"social-networks__item\">\n        <div>\n          <input type=\"checkbox\" name=\"check_ok\">\n          <span>Одноклассники</span>\n        </div>\n        <div>\n        <input  class=\"display-none\" type=\"text\" name=\"input_ok\" placeholder=\"Ваша страница в Odnoklasniki\">\n        </div>\n      </div>\n      <span id=\"url-error\" class=\"not-valid-msg display-none\">&#8212; cсылка должна быть вида social.network/yourID</span>\n    </div>\n  </div>\n  <div class=\"form__pag-nav\">\n    <a id=\"prev\" class=\"pag-nav\"><i class=\"material-icons\">keyboard_arrow_left</i> Предыдущий</a>\n    <a id=\"next\" class=\"pag-nav\">Следующий <i class=\"material-icons\">keyboard_arrow_right</i></a>\n  </div>\n</div>\n";
},"useData":true});
this["templates"]["step4"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form\">\n  <div class=\"form__pag-num\">\n    <a class=\"pag-num__page\" data-value=\"1\">1</a>\n    <a class=\"pag-num__page\" data-value=\"2\">2</a>\n    <a class=\"pag-num__page\" data-value=\"3\">3</a>\n    <a class=\"pag-num__page\" data-value=\"4\">4</a>\n  </div>\n  <div class=\"form__description\">\n    <span>4. Выберите любимого котика</span>\n  </div>\n  <div class=\"form__user-interaction\">\n    <div class=\"user-interaction__images\">\n      <img class=\"animal\" src=\"img/cat1.jpg\" data-animal=\"cat\" alt=\"cat1\">\n      <img class=\"animal\" src=\"img/cat2.jpg\" data-animal=\"cat\" alt=\"cat2\">\n      <img class=\"animal\" src=\"img/cat3.jpg\" data-animal=\"cat\" alt=\"cat3\">\n      <img class=\"animal\" src=\"img/dog4.jpg\" data-animal=\"dog\" alt=\"dog1\">\n    </div>\n    <span id=\"animal-error\" class=\"not-valid-msg display-none\">Вы выбрали собачку. А надо котика</span>\n  </div>\n  <div class=\"form__pag-nav\">\n    <a  id=\"prev\"  class=\"pag-nav\"><i class=\"material-icons\">keyboard_arrow_left</i> Предыдущий</a>\n    <a id=\"final\"  class=\"pag-nav pag-nav--end\">Завершить</a>\n  </div>\n</div>\n";
},"useData":true});
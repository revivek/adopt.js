/*! Adopt.js - v0.1.0 - 2013
* Copyright (c) 2013 Vivek Patel; Licensed MIT */
(function($) {
  $.fn.adopt = function() {
    this.each(function() {
      $(this).contents().filter(function() {
        return this.nodeType === 3
      }).each(function(i) {
        var str        = this.data,
            firstIndex = this.data.indexOf(" "),
            lastIndex  = str.lastIndexOf(" ");
        if (lastIndex > firstIndex && lastIndex < str.length - 1) {
          str = str.substring(0, lastIndex) + "\u00a0" + str.substring(lastIndex + 1);
        }
        this.data = str;
      });
    });
  };
}(jQuery));
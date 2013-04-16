/*! Adopt.js - v0.1.0 - 2013
* Copyright (c) 2013 Vivek Patel; Licensed MIT */
(function($) {
  $.fn.adopt = function() {
    this.each(function() {
      $(this).contents().filter(function() {
        return this.nodeType === 3;
      }).each(function(i) {
        var lastIndex = this.data.lastIndexOf(" ");
        if (0 < lastIndex && lastIndex < this.data.length - 1) {
          this.data = this.data.substring(0, lastIndex) + "\u00a0" + this.data.substring(lastIndex + 1);
        }
      });
    });
  };
}(jQuery));
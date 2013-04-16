# Adopt.coffee - v0.1.0 - 2013
# Copyright (c) 2013 Vivek Patel; Licensed MIT

(($) -> $.fn.adopt = () ->
  @each () ->
    textNodes = $(@).contents().filter () -> return (@nodeType == 3)
    textNodes.each () ->
      last = @data.lastIndexOf(" ")
      if 0 < last < @data.length - 1
        @data = "#{@data.substring(0, last)}\u00a0#{@data.substring(last + 1)}"
)(jQuery)